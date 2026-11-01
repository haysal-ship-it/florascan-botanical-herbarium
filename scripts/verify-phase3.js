import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots/phase3');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function verify() {
  console.log('Launching browser for Phase 3 verification...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  console.log('Navigating to http://localhost:5174/...');
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle0' });

  // 1. Capture Idle Scanner at 375px and 1440px
  console.log('Capturing Scanner idle state...');
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'scanner-375-idle.png'), fullPage: false });

  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'scanner-1440-idle.png'), fullPage: false });

  // 2. Click Pomegranate (Punica granatum) from reference tray (not pre-saved)
  console.log('Selecting Punica granatum reference specimen from tray...');
  const clickedSample = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const puncicaBtn = buttons.find(b => b.textContent && b.textContent.includes('Punica'));
    if (puncicaBtn) {
      puncicaBtn.click();
      return true;
    }
    return false;
  });
  console.log('Clicked reference specimen?', clickedSample);

  // Capture processing state
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'scanner-1440-processing.png'), fullPage: false });

  // Wait for processing sequence to complete
  await new Promise(r => setTimeout(r, 2200));

  // 3. Capture Dossier Overview at 375px and 1440px
  console.log('Capturing Dossier overview...');
  await page.evaluate(() => {
    const el = document.getElementById('specimen-dossier-section');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dossier-1440-overview.png'), fullPage: false });

  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dossier-375-overview.png'), fullPage: false });

  // 4. Test Safety & Toxicity Tab
  await page.setViewport({ width: 1440, height: 900 });
  console.log('Switching to Safety & Toxicity tab...');
  const clickedSafety = await page.evaluate(() => {
    const tabBtns = Array.from(document.querySelectorAll('button[role="tab"]'));
    const safetyTab = tabBtns.find(b => b.textContent && b.textContent.includes('Safety'));
    if (safetyTab) {
      safetyTab.click();
      return true;
    }
    return false;
  });
  console.log('Clicked Safety tab?', clickedSafety);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dossier-1440-safety.png'), fullPage: false });

  // 5. Test Save to Journal Flow
  console.log('Testing Save to Journal modal...');
  const clickedSave = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const saveBtn = buttons.find(b => b.textContent && b.textContent.trim().startsWith('Save to Journal'));
    if (saveBtn) {
      saveBtn.click();
      return true;
    }
    return false;
  });
  console.log('Clicked Save to Journal button?', clickedSave);
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dossier-1440-save-dialog.png'), fullPage: false });

  // Fill in form and submit
  console.log('Filling save modal form...');
  await page.type('#field-location', ' - Orchard Courtyard');
  await page.type('#field-notes', ' Vigorous fruiting specimen with glossy leaves and leathery rind.');
  
  // Submit modal form
  await page.evaluate(() => {
    const submitBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Confirm & Save'));
    if (submitBtn) submitBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'dossier-1440-saved-state.png'), fullPage: false });

  // Verify button now says "Saved in Journal"
  const isSavedButtonPresent = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button')).some(b => b.textContent && b.textContent.includes('Saved in Journal'));
  });
  console.log('Specimen is now marked Saved in Journal?', isSavedButtonPresent);

  // Check localStorage entries count
  const storedCount = await page.evaluate(() => {
    const data = localStorage.getItem('florascan_herbarium_entries');
    return data ? JSON.parse(data).length : 0;
  });
  console.log('Total entries in localStorage after save:', storedCount);

  await browser.close();

  console.log('Phase 3 verification complete! Console errors:', consoleErrors.length);
  if (isSavedButtonPresent && storedCount >= 3) {
    console.log('SUCCESS: All Phase 3 representative flows verified cleanly!');
  }
}

verify().catch(err => {
  console.error('Phase 3 verification failed:', err);
  process.exit(1);
});

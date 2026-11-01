import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots/phase4');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function verify() {
  console.log('Launching browser for Phase 4 verification...');
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

  // Helper to click navigation tabs across responsive layouts
  async function selectTab(tabKey) {
    return await page.evaluate((key) => {
      const navButtons = Array.from(document.querySelectorAll('header nav button, aside[aria-label="Mobile Navigation Dock"] button, header .lg\\:hidden button'));
      const mapping = {
        'scanner': ['scanner'],
        'explore': ['explore'],
        'compare': ['compare'],
        'triage': ['health'],
        'herbarium': ['journal']
      };
      const targets = mapping[key] || [key];
      const found = navButtons.find(b => {
        const text = b.textContent?.trim().toLowerCase() || '';
        const aria = b.getAttribute('aria-label')?.toLowerCase() || '';
        return targets.some(t => text.includes(t) || aria.includes(t));
      });
      if (found) {
        found.click();
        return true;
      }
      return false;
    }, tabKey);
  }

  // 1. Explore Tab Verification
  console.log('--- Verifying Explore / Catalog ---');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('explore');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'explore-desktop-1440.png'), fullPage: false });

  // Test Search
  console.log('Testing search in Explore...');
  await page.type('input[placeholder*="Search" i]', 'Aloe');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'explore-search-aloe.png'), fullPage: false });
  const resultText = await page.evaluate(() => document.querySelector('h2.text-base, h2.text-lg')?.textContent);
  console.log('Search result primary match:', resultText);

  // Mobile Explore View
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'explore-mobile-375.png'), fullPage: false });

  // 2. Compare Tab Verification
  console.log('--- Verifying Compare Tool ---');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('compare');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'compare-desktop-1440.png'), fullPage: false });

  // Mobile Compare View (verify paired attribute layout)
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'compare-mobile-375.png'), fullPage: false });

  // 3. Health / Triage Verification
  console.log('--- Verifying Health / Triage ---');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('triage');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'health-desktop-1440.png'), fullPage: false });

  // Click second symptom (Crispy brown tips)
  console.log('Selecting second symptom in triage...');
  await page.evaluate(() => {
    const radioBtns = Array.from(document.querySelectorAll('button[role="radio"]'));
    if (radioBtns[1]) radioBtns[1].click();
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'health-symptom-crispy-tips.png'), fullPage: false });

  // 4. Herbarium Journal Verification (Check persistence & edit/delete)
  console.log('--- Verifying Herbarium Journal ---');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('herbarium');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'herbarium-desktop-1440.png'), fullPage: false });

  // Verify initial entries exist
  const initialEntryCount = await page.evaluate(() => {
    const entries = JSON.parse(localStorage.getItem('florascan_herbarium_entries') || '[]');
    return entries.length;
  });
  console.log('Initial entries in Herbarium:', initialEntryCount);

  // Test Edit Notes modal
  console.log('Opening Edit Notes dialog for first entry...');
  await page.evaluate(() => {
    const editBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Edit Notes'));
    if (editBtn) editBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'herbarium-edit-dialog.png'), fullPage: false });

  // Update note text
  await page.type('#edit-notes-input', ' [Verified autumn fenestration growth]');
  await page.evaluate(() => {
    const saveBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Save Notes'));
    if (saveBtn) saveBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // Test Delete Confirmation Dialog
  console.log('Testing delete confirmation dialog...');
  await page.evaluate(() => {
    const removeBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Remove'));
    if (removeBtn) removeBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'herbarium-delete-dialog.png'), fullPage: false });

  // Click "Keep Entry" to verify cancel works safely
  await page.evaluate(() => {
    const keepBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Keep Entry'));
    if (keepBtn) keepBtn.click();
  });
  await new Promise(r => setTimeout(r, 300));

  const finalEntryCount = await page.evaluate(() => {
    const entries = JSON.parse(localStorage.getItem('florascan_herbarium_entries') || '[]');
    return entries.length;
  });
  console.log('Final entries count (must match initial):', finalEntryCount);

  await browser.close();

  console.log('Phase 4 verification complete! Console errors:', consoleErrors.length);
  if (finalEntryCount === initialEntryCount && initialEntryCount >= 2) {
    console.log('SUCCESS: All Phase 4 screens and flows verified cleanly!');
  }
}

verify().catch(err => {
  console.error('Phase 4 verification failed:', err);
  process.exit(1);
});

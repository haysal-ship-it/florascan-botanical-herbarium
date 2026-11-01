import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots/baseline');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'mobile-320', width: 320, height: 640 },
  { name: 'mobile-375', width: 375, height: 667 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 }
];

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  console.log('Navigating to http://localhost:5174/...');
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle0' });

  // 1. Capture Scanner across viewports
  for (const vp of VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `scanner-${vp.name}-light.png`), fullPage: false });
    console.log(`Saved: scanner-${vp.name}-light.png`);
  }

  // 2. Capture dark mode Scanner
  await page.setViewport({ width: 1440, height: 900 });
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const themeBtn = buttons.find(b => b.getAttribute('aria-label')?.toLowerCase().includes('switch to obsidian') || b.getAttribute('aria-label')?.toLowerCase().includes('switch to parchment'));
    if (themeBtn) themeBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `scanner-desktop-1440-dark.png`), fullPage: false });
  console.log(`Saved: scanner-desktop-1440-dark.png`);

  // Switch back to light
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const themeBtn = buttons.find(b => b.getAttribute('aria-label')?.toLowerCase().includes('switch to obsidian') || b.getAttribute('aria-label')?.toLowerCase().includes('switch to parchment'));
    if (themeBtn) themeBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // Helper to click tabs
  async function selectTab(tabKey) {
    return await page.evaluate((key) => {
      const navButtons = Array.from(document.querySelectorAll('header nav button, aside[aria-label="Mobile Navigation Dock"] button, header .md\\:hidden button'));
      const mapping = {
        'scanner': ['scanner', 'lens'],
        'explore': ['index', 'botanical index', 'explore'],
        'compare': ['comparator', 'compare'],
        'triage': ['triage', 'health triage', 'health'],
        'herbarium': ['my herbarium', 'journal', 'herbarium']
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

  // 3. Capture Dossier view
  console.log('Capturing Dossier view...');
  await page.evaluate(() => {
    const el = document.getElementById('specimen-dossier-section');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `dossier-desktop-1440-light.png`), fullPage: false });
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `dossier-mobile-375-light.png`), fullPage: false });
  console.log('Saved: dossier screens');

  // 4. Capture Explore
  console.log('Navigating to Explore tab...');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('explore');
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `explore-desktop-1440-light.png`), fullPage: false });
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `explore-mobile-375-light.png`), fullPage: false });
  console.log('Saved: explore screens');

  // 5. Capture Compare
  console.log('Navigating to Compare tab...');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('compare');
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `compare-desktop-1440-light.png`), fullPage: false });
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `compare-mobile-375-light.png`), fullPage: false });
  console.log('Saved: compare screens');

  // 6. Capture Health
  console.log('Navigating to Health tab...');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('triage');
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `health-desktop-1440-light.png`), fullPage: false });
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `health-mobile-375-light.png`), fullPage: false });
  console.log('Saved: health screens');

  // 7. Capture Herbarium
  console.log('Navigating to Herbarium tab...');
  await page.setViewport({ width: 1440, height: 900 });
  await selectTab('herbarium');
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `herbarium-desktop-1440-light.png`), fullPage: false });
  await page.setViewport({ width: 375, height: 667 });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `herbarium-mobile-375-light.png`), fullPage: false });
  console.log('Saved: herbarium screens');

  await browser.close();
  console.log('All baseline screenshots captured successfully!');
  if (consoleErrors.length > 0) {
    console.log('Console Errors:', consoleErrors);
  }
}

run().catch(err => {
  console.error('Script failed:', err);
  process.exit(1);
});

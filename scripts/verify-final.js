import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots/final');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runFinalVerification() {
  console.log('=== Starting FloraScan Comprehensive Final Verification ===');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const network404s = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('response', res => {
    if (res.status() >= 400) network404s.push(`${res.status()}: ${res.url()}`);
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

  // 1. Check Multi-Viewport Matrix
  const viewports = [
    { name: '320', width: 320, height: 640 },
    { name: '375', width: 375, height: 667 },
    { name: '640', width: 640, height: 800 },
    { name: '768', width: 768, height: 1024 },
    { name: '1024', width: 1024, height: 768 },
    { name: '1440', width: 1440, height: 900 },
    { name: '1920', width: 1920, height: 1080 }
  ];

  console.log('Testing viewport matrix in Light Mode...');
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `scanner-${vp.name}-light.png`), fullPage: false });
  }

  // 2. Test Dark Mode at 375, 768, and 1440
  console.log('Testing Dark Mode across primary breakpoints...');
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('florascan_theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 200));

  for (const vp of [viewports[1], viewports[3], viewports[5]]) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `scanner-${vp.name}-dark.png`), fullPage: false });
  }

  // Reset to Light Mode for functional flow checks
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('florascan_theme', 'light');
  });
  await new Promise(r => setTimeout(r, 200));

  // 3. Functional Screen Captures at 1440px and 375px
  console.log('Capturing all functional screens in Light Mode...');
  const screens = ['explore', 'compare', 'triage', 'herbarium'];
  for (const scr of screens) {
    await page.setViewport({ width: 1440, height: 900 });
    await selectTab(scr);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `${scr}-desktop-1440.png`), fullPage: false });

    await page.setViewport({ width: 375, height: 667 });
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `${scr}-mobile-375.png`), fullPage: false });
  }

  // 4. Test Reduced Motion Emulation
  console.log('Testing prefers-reduced-motion media feature...');
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await selectTab('scanner');
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'scanner-reduced-motion.png'), fullPage: false });

  // 5. Check Persistence across Page Reload
  console.log('Testing localStorage data persistence across page reload...');
  await page.reload({ waitUntil: 'networkidle0' });
  const entriesCount = await page.evaluate(() => {
    const raw = localStorage.getItem('florascan_herbarium_entries');
    return raw ? JSON.parse(raw).length : 0;
  });
  console.log('Entries in localStorage after full reload:', entriesCount);

  // Check no horizontal overflow on body
  const bodyOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Page horizontal overflow detected?', bodyOverflow);

  await browser.close();

  console.log('=== Final Verification Summary ===');
  console.log('Network 404s:', network404s.length);
  console.log('Console Errors:', consoleErrors.length);
  console.log('Horizontal Overflow:', bodyOverflow ? 'FAIL (overflow detected)' : 'PASS (no overflow)');
  console.log('Persistence Survives:', entriesCount > 0 ? 'PASS' : 'FAIL');

  if (network404s.length === 0 && consoleErrors.length === 0 && !bodyOverflow && entriesCount > 0) {
    console.log('ALL ACCEPTANCE CRITERIA VERIFIED SUCCESSFULLY!');
  }
}

runFinalVerification().catch(err => {
  console.error('Final verification error:', err);
  process.exit(1);
});

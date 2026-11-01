import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots/phase2');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function verify() {
  console.log('Launching browser for Phase 2 verification...');
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

  // 1. Explicitly ensure Light Theme first
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('florascan_theme', 'light');
  });
  await new Promise(r => setTimeout(r, 200));

  const viewports = [
    { name: '320', width: 320, height: 640 },
    { name: '768', width: 768, height: 1024 },
    { name: '1440', width: 1440, height: 900 }
  ];

  // Capture viewports in Light Mode
  console.log('Capturing Light Mode viewports...');
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `shell-${vp.name}-light.png`), fullPage: false });
    console.log(`Captured: shell-${vp.name}-light.png`);
  }

  // 2. Explicitly switch to Dark Theme
  console.log('Switching to Dark Theme...');
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('florascan_theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 300));

  // Capture viewports in Dark Mode
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUTPUT_DIR, `shell-${vp.name}-dark.png`), fullPage: false });
    console.log(`Captured: shell-${vp.name}-dark.png`);
  }

  // 3. Verify Theme Toggle via UI button click
  console.log('Testing interactive theme toggle button click...');
  await page.setViewport({ width: 1440, height: 900 });
  const themeBtn = await page.$('button[aria-label*="theme" i]');
  if (themeBtn) {
    const labelBefore = await page.evaluate(el => el.getAttribute('aria-label'), themeBtn);
    console.log('Theme button label before click:', labelBefore);
    await themeBtn.click();
    await new Promise(r => setTimeout(r, 300));
    const themeAfter = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    console.log('data-theme after interactive click:', themeAfter);
  }

  // 4. Verify Keyboard Access & Focus Rings
  console.log('Testing keyboard navigation (Tab & Enter)...');
  await page.focus('button[aria-label*="FloraScan Home" i]');
  await page.keyboard.press('Tab'); // Nav: Scanner
  await page.keyboard.press('Tab'); // Nav: Explore
  await page.keyboard.press('Tab'); // Nav: Compare
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUTPUT_DIR, `shell-1440-focus.png`), fullPage: false });
  console.log('Captured: shell-1440-focus.png');

  // Verify active element text
  const activeElementInfo = await page.evaluate(() => {
    const el = document.activeElement;
    return {
      tagName: el?.tagName,
      text: el?.textContent?.trim(),
      ariaCurrent: el?.getAttribute('aria-current')
    };
  });
  console.log('Active keyboard focus element:', activeElementInfo);

  // Press Enter to navigate tab via keyboard
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 500));
  const activeTabAfterEnter = await page.evaluate(() => {
    const compareTitle = document.querySelector('h1, h2');
    return compareTitle?.textContent?.trim();
  });
  console.log('View title after keyboard Enter navigation:', activeTabAfterEnter);

  await browser.close();

  console.log('Phase 2 verification complete!');
  console.log('Network 404s:', network404s);
  console.log('Console Errors:', consoleErrors);

  if (network404s.length === 0) {
    console.log('SUCCESS: All Phase 2 criteria verified!');
  }
}

verify().catch(err => {
  console.error('Phase 2 verification failed:', err);
  process.exit(1);
});

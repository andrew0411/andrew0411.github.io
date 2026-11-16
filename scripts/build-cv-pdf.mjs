// Regenerates public/cv.pdf from the /cv page (print stylesheet).
// Usage: npm run cv:pdf   (builds the site, serves dist/, prints /cv with headless Chrome or Edge)
// Override the browser with CHROME_PATH=<path to chrome/msedge>.
import { spawn } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const PORT = 4329;
const OUT = resolve('public/cv.pdf');

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error('No Chrome/Edge found. Set CHROME_PATH.');
  process.exit(1);
}

const run = (cmd, args, opts = {}) =>
  new Promise((ok, fail) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32', ...opts });
    p.on('exit', (code) => (code === 0 ? ok() : fail(new Error(`${cmd} exited with ${code}`))));
  });

await run('npx', ['astro', 'build']);

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  stdio: 'ignore',
  shell: process.platform === 'win32',
});

const url = `http://localhost:${PORT}/cv/`;
let ready = false;
for (let i = 0; i < 60 && !ready; i++) {
  try {
    ready = (await fetch(url)).ok;
  } catch {
    await new Promise((r) => setTimeout(r, 500));
  }
}

try {
  if (!ready) throw new Error(`Preview server did not respond at ${url}`);
  await run(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${OUT}`,
    url,
  ], { shell: false });
  console.log(`Wrote ${OUT} (${statSync(OUT).size} bytes)`);
} finally {
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill();
}

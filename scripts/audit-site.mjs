import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const rootPath = decodeURIComponent(root.pathname).replace(/^\/(.:\/)/, '$1');
const files = [];
const walk = dir => readdirSync(dir).forEach(name => {
  const file = join(dir, name);
  statSync(file).isDirectory() ? walk(file) : files.push(file);
});
walk(rootPath);

const htmlFiles = files.filter(file => file.endsWith('.html'));
const failures = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(rootPath, file).replaceAll('\\', '/');
  const require = (pattern, label) => { if (!pattern.test(html)) failures.push(`${name}: missing ${label}`); };
  require(/<title>[^<]+<\/title>/, 'title');
  require(/<meta name="description" content="[^"]+"/, 'description');
  require(/<link rel="canonical" href="https:\/\/vaultyn\.com\//, 'canonical');
  require(/hreflang="zh-CN"/, 'zh-CN alternate');
  require(/hreflang="zh-Hant"/, 'zh-Hant alternate');
  require(/hreflang="en"/, 'English alternate');
  require(/hreflang="x-default"/, 'x-default alternate');
  require(/property="og:image" content="https:\/\/vaultyn\.com\/share\//, 'Open Graph image');
  require(/name="twitter:card" content="summary_large_image"/, 'Twitter card');

  for (const href of html.matchAll(/href="([^"]+)"/g)) {
    const value = href[1];
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const clean = value.split(/[?#]/)[0];
    if (!clean || clean === '/') continue;
    const target = clean.endsWith('/') ? join(rootPath, clean, 'index.html') : join(rootPath, clean);
    if (!existsSync(target)) failures.push(`${name}: broken internal link ${value}`);
  }
}

for (const asset of ['share/zh.png', 'share/zh-hant.png', 'share/en.png', 'robots.txt', 'sitemap-index.xml']) {
  if (!existsSync(join(rootPath, asset))) failures.push(`missing generated asset ${asset}`);
}

if (failures.length) {
  console.error(`Site audit failed (${failures.length}):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`Site audit passed: ${htmlFiles.length} HTML pages, internal links and metadata checked.`);

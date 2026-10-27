'use strict';

const themeButton = document.querySelector('.theme-toggle');
let savedTheme;
try { savedTheme = localStorage.getItem('homepage-theme'); } catch { /* Storage is optional. */ }
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let manualTheme = savedTheme === 'dark' || savedTheme === 'light';

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  themeButton.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1b1e21' : '#f7f7f2';
}
applyTheme(manualTheme ? savedTheme : systemTheme.matches ? 'dark' : 'light');
themeButton.addEventListener('click', () => {
  const theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  manualTheme = true;
  applyTheme(theme);
  try { localStorage.setItem('homepage-theme', theme); } catch { /* Storage is optional. */ }
});
systemTheme.addEventListener('change', event => {
  if (!manualTheme) applyTheme(event.matches ? 'dark' : 'light');
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
document.querySelector('#copy-handle').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('INCEPTIONwang');
    status.textContent = '已复制 INCEPTIONwang';
  } catch {
    status.textContent = '用户名：INCEPTIONwang（可选中文字复制）';
  }
});

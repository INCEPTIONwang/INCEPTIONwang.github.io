'use strict';

const themeButton = document.querySelector('.theme-toggle');
let savedTheme;
try { savedTheme = localStorage.getItem('homepage-theme'); } catch { /* Storage is optional. */ }
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let manualTheme = savedTheme === 'dark' || savedTheme === 'light';

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#171a1e' : '#ffffff';
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
for (const button of document.querySelectorAll('.copy-citation')) {
  button.addEventListener('click', async () => {
    const citation = button.parentElement.querySelector('pre');
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(citation.textContent);
      button.textContent = 'Copied';
      status.textContent = 'BibTeX copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy'; }, 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or Cmd+C to copy.';
    }
  });
}

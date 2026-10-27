# INCEPTIONwang · Personal Homepage

中文研究主页，展示公开项目 PolicyTrim 和 A³。原生 HTML、CSS、JavaScript，无需构建。

## 本机预览

```bash
cd /home/wxh/personal-homepage
python3 -m http.server 8088 --bind 127.0.0.1
```

打开 http://127.0.0.1:8088 。也可直接打开 `index.html`。

## 修改内容

- `index.html`：介绍、项目、联系方式和社交分享信息。
- `styles.css`：主题、版式和移动端适配。
- `app.js`：深浅主题及用户名复制功能。
- `assets/`：项目图片和图标。

姓名、单位和邮箱尚未提供，页面使用 GitHub 账号名。未添加未经确认的个人履历或联系方式。

## 资料来源

项目介绍、论文链接与指标来自对应公开仓库的 README，指标保留实验语境，不代表独立复现实验。

- https://github.com/INCEPTIONwang/PolicyTrim
- https://github.com/INCEPTIONwang/A3
- `assets/policytrim.png` 来自 PolicyTrim 的 `overview_01.png`。
- `assets/a3.png` 来自 A3 的 `docs/assets/images/horizon-analysis.png`。
- 机器人主视觉为此主页绘制的 SVG 示意图。

## GitHub Pages

已准备 `.github/workflows/pages.yml`。上传至 `INCEPTIONwang/INCEPTIONwang.github.io` 后，将仓库 Settings → Pages → Source 设置为 **GitHub Actions**，即可通过工作流发布至 https://inceptionwang.github.io/ 。

Google Fonts 加载失败时会使用本地字体，核心内容和功能不依赖第三方脚本。

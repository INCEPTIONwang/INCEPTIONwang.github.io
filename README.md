# Xianghui Wang · Academic Homepage

线上访问：https://inceptionwang.github.io/

以研究背景和论文为中心的学术主页。原生 HTML、CSS、JavaScript，无需构建。

## 内容

- 简短个人简介：四川大学硕士生。
- 研究方向：计算机视觉、具身智能、视觉语言动作模型、执行效率及强化学习。
- 代表论文：PolicyTrim（ECCV 2026）与 A³（arXiv 2026）。
- 论文完整作者、资源链接及可展开、复制的 BibTeX。
- 首选学校邮箱、OpenReview、GitHub 和 Hugging Face。

姓名、身份和首选邮箱由本人提供。按本人要求不展示导师，不单列教育经历。

## 本机预览

```bash
cd /home/wxh/personal-homepage
python3 -m http.server 8088 --bind 127.0.0.1
```

打开 http://127.0.0.1:8088 。也可直接打开 `index.html`。

## 修改内容

- `index.html`：研究背景、论文作者、发表信息、引用及联系方式。
- `styles.css`：学术版式、深浅主题与响应式适配。
- `app.js`：主题切换和 BibTeX 复制。
- `assets/`：本人提供的猫咪头像、原项目研究配图和图标。

## 资料来源

- https://arxiv.org/abs/2606.22540 （作者、题目、ECCV 2026 录用信息）
- https://arxiv.org/abs/2605.11567 （作者、题目、预印本信息）
- https://inceptionwang.github.io/PolicyTrim/ （共同一作、BibTeX、方法）
- https://github.com/INCEPTIONwang/PolicyTrim
- https://github.com/INCEPTIONwang/A3
- https://openreview.net/profile?id=%7EXianghui_Wang1 （本人提供的档案入口；档案正文由本人粘贴确认）
- `assets/policytrim.png` 来自 PolicyTrim 的 `overview_01.png`。
- `assets/a3-architecture.png` 来自 A3 的 `docs/assets/images/method-overview.png`，用于论文架构图。

## 发布

推送至 `main` 后，`.github/workflows/pages.yml` 自动发布 GitHub Pages。
Google Fonts 不可用时回退到本地字体；无第三方运行时脚本。

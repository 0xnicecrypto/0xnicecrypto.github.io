# 我的个人网站 / My Personal Website

使用 [Astro](https://astro.build/) 构建的个人网站，使用 [Terminal Theme](https://github.com/dennisklappe/astro-theme-terminal) 主题，部署在 [GitHub Pages](https://pages.github.com/) 上。

A personal website built with [Astro](https://astro.build/), using the [Terminal Theme](https://github.com/dennisklappe/astro-theme-terminal), deployed on [GitHub Pages](https://pages.github.com/).

## 🚀 快速开始 / Quick Start

### 本地开发 / Local Development

```bash
# 克隆仓库 / Clone repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# 安装依赖 / Install dependencies
npm install

# 启动本地服务器 / Start dev server
npm run dev

# 访问 http://localhost:4321
```

### 创建新文章 / Create New Post

在 `src/content/posts/` 目录下创建新的 `.md` 文件：

Create a new `.md` file in the `src/content/posts/` directory:

```markdown
---
title: '文章标题 / Post Title'
description: '文章描述 / Post description'
pubDate: 2026-02-03
author: 'Your Name'
tags: ['标签1', '标签2', 'tag1', 'tag2']
draft: false
---

文章内容 / Post content here...
```

### 构建网站 / Build Site

```bash
npm run build
```

构建后的文件会在 `dist/` 目录中。

Build output will be in the `dist/` directory.

## 📁 项目结构 / Project Structure

```
.
├── .github/workflows/    # GitHub Actions 配置 / GitHub Actions config
│   └── deploy.yml        # 自动部署配置 / Auto deployment
├── public/               # 静态文件 / Static files
├── src/
│   ├── components/       # 组件 / Components
│   ├── content/          # 内容 / Content
│   │   └── posts/        # 博客文章 / Blog posts
│   ├── layouts/          # 布局模板 / Layout templates
│   ├── pages/            # 页面 / Pages
│   ├── styles/           # 样式文件 / Stylesheets
│   └── content.config.ts # 内容配置 / Content config
├── astro.config.mjs      # Astro 配置 / Astro config
├── package.json          # 依赖配置 / Dependencies
└── README.md             # 本文件 / This file
```

## ⚙️ 配置说明 / Configuration

### 修改基本信息 / Update Site Info

编辑 `astro.config.mjs` 文件：

Edit the `astro.config.mjs` file:

- `site`: 你的网站地址 / Your site URL
- `base`: 基础路径（如果使用自定义域名则为 `/`）/ Base path (use `/` for custom domain)

### 更新导航菜单 / Update Navigation

编辑 `src/layouts/BaseLayout.astro` 文件中的导航部分。

Edit the navigation section in `src/layouts/BaseLayout.astro`.

### 更新关于页面 / Update About Page

编辑 `src/pages/about.astro` 文件。

Edit the `src/pages/about.astro` file.

## 🌐 部署到 GitHub Pages / Deploy to GitHub Pages

### 1. 创建 GitHub 仓库 / Create GitHub Repository

在 GitHub 上创建一个仓库，命名为 `yourusername.github.io`（将 `yourusername` 替换为你的 GitHub 用户名）。

Create a repository named `yourusername.github.io` (replace `yourusername` with your GitHub username).

### 2. 推送到 GitHub / Push to GitHub

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages / Enable GitHub Pages

1. 进入仓库的 **Settings** > **Pages** / Go to repository **Settings** > **Pages**
2. 在 **Source** 部分选择 **GitHub Actions** / Select **GitHub Actions** in **Source**
3. 保存设置 / Save

### 4. 自动部署 / Auto Deployment

每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署网站。

GitHub Actions will automatically build and deploy the site on every push to `main`.

部署完成后，访问 `https://yourusername.github.io` 查看网站。

Visit `https://yourusername.github.io` after deployment.

## 📝 写作指南 / Writing Guide

### 文章前置参数 / Frontmatter

```yaml
---
title: "文章标题 / Post Title"           # 必填 / Required
description: "文章描述 / Description"    # 可选 / Optional
pubDate: 2026-02-03                      # 发布日期 / Publish date
author: "Your Name"                      # 作者 / Author
tags: ["标签1", "标签2"]                  # 标签 / Tags
draft: false                             # 是否为草稿 / Draft mode
---
```

### 草稿模式 / Draft Mode

- `draft: true` - 文章不会显示（生产环境）/ Post won't show (production)
- 本地预览草稿：所有文章都会在开发服务器显示 / All posts show in dev mode

## 🎨 自定义主题 / Customization

### 修改颜色 / Change Colors

编辑 `src/styles/terminal.css` 文件中的 CSS 变量：

Edit CSS variables in `src/styles/terminal.css`:

```css
:root {
  --background: #1e2022;
  --foreground: #d6deeb;
  --accent: #ffa86a;
  --secondary: #8be9fd;
  /* ... */
}
```

也可以使用 [Terminal.css](https://panr.github.io/terminal-css/) 生成配色方案。

You can also use [Terminal.css](https://panr.github.io/terminal-css/) to generate color schemes.

## 📚 相关链接 / Related Links

- [Astro 文档 / Documentation](https://docs.astro.build/)
- [Terminal Theme](https://github.com/dennisklappe/astro-theme-terminal)
- [Markdown 语法 / Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages](https://docs.github.com/en/pages)

## 📄 许可证 / License

本网站内容使用 [MIT](LICENSE) 许可证。

This website content is licensed under [MIT](LICENSE).

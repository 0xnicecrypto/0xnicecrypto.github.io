# 我的个人网站

使用 [Hugo](https://gohugo.io/) 构建的个人网站，使用 [PaperMod](https://github.com/adityatelange/hugo-PaperMod) 主题，部署在 [GitHub Pages](https://pages.github.com/) 上。

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# 启动本地服务器
hugo server -D

# 访问 http://localhost:1313
```

### 创建新文章

```bash
hugo new content posts/my-new-post.md
```

### 构建网站

```bash
hugo --minify
```

构建后的文件会在 `public/` 目录中。

## 📁 项目结构

```
.
├── archetypes/          # 内容模板
├── assets/              # 需要处理的资源文件
├── content/             # 网站内容
│   ├── about.md         # 关于页面
│   └── posts/           # 博客文章
├── data/                # 数据文件
├── layouts/             # HTML 模板
├── static/              # 静态文件
├── themes/              # 主题
│   └── PaperMod/        # PaperMod 主题
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml       # 自动部署配置
├── hugo.toml            # Hugo 配置文件
└── README.md            # 本文件
```

## ⚙️ 配置说明

### 修改基本信息

编辑 `hugo.toml` 文件：

- `baseURL`: 你的网站地址
- `title`: 网站标题
- `params.author`: 作者名称
- `params.description`: 网站描述
- `params.profileMode.title/subtitle`: 首页标题和副标题
- `params.socialIcons`: 社交媒体链接

### 更新 GitHub 链接

在 `hugo.toml` 中更新以下链接：
- GitHub: `https://github.com/yourusername`
- Twitter: `https://twitter.com/yourusername`
- Email: `mailto:your.email@example.com`

## 🌐 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个仓库，命名为 `yourusername.github.io`（将 `yourusername` 替换为你的 GitHub 用户名）。

### 2. 推送到 GitHub

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库的 **Settings** > **Pages**
2. 在 **Source** 部分选择 **GitHub Actions**
3. 保存设置

### 4. 自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署网站。

部署完成后，访问 `https://yourusername.github.io` 查看网站。

## 📝 写作指南

### 文章前置参数

```yaml
---
title: "文章标题"
date: 2026-02-03T12:00:00+08:00
draft: false              # 是否为草稿
tags: ["标签1", "标签2"]   # 标签
categories: ["分类"]       # 分类
description: "文章描述"    # 描述
---
```

### 草稿模式

- `draft: true` - 文章不会显示（生产环境）
- 本地预览草稿：`hugo server -D`

## 🔧 自定义主题

### 修改样式

在 `assets/css/` 目录下创建自定义 CSS 文件。

### 修改模板

在 `layouts/` 目录下覆盖主题的模板文件。

## 📚 相关链接

- [Hugo 文档](https://gohugo.io/documentation/)
- [PaperMod 文档](https://github.com/adityatelange/hugo-PaperMod/wiki)
- [Markdown 语法](https://www.markdownguide.org/)
- [GitHub Pages](https://docs.github.com/en/pages)

## 📄 许可证

本网站内容使用 [MIT](LICENSE) 许可证。

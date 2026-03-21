# GitHub Pages 简历网站

这是一个根据 PDF 简历内容生成的纯静态个人简历网站，适合直接部署到 GitHub Pages。

## 文件说明

- `index.html`：页面结构
- `styles.css`：视觉样式与响应式布局
- `script.js`：简历数据与页面渲染逻辑
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署流程

## 本地预览

如果本机装了 Python，可以在当前目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 将当前目录推送到一个 GitHub 仓库。
2. 在 GitHub 仓库的 `Settings -> Pages` 中将 `Build and deployment` 设置为 `GitHub Actions`。
3. 推送代码到默认分支后，GitHub Actions 会自动发布站点。

## 自定义内容

简历内容都在 `script.js` 的 `resumeData` 对象里，后续要替换文案、联系方式、项目经历，直接修改这里即可。

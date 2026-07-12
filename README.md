# agw.bot — AGW 官网

AGW（Agents Grow Well）的品牌官网（Astro 静态站点，中文）：
面向实体机器人 / 具身智能方向的单页官网，定位是「持续进化的实体机器人集群」。

品牌释义与方向探讨见 [`docs/BRAND-NOTES.md`](docs/BRAND-NOTES.md)。

## 开发

```bash
make install   # pnpm install
make run       # pnpm dev
make build     # pnpm build，构建产物输出到 dist/
```

## 技术栈

Astro 7 + Tailwind CSS 4（`@tailwindcss/vite`），零框架运行时；
滚动动效用 IntersectionObserver，不引入 3D 依赖。

## 目录结构

- `src/pages/index.astro` — 唯一页面，按区块组装组件
- `src/components/` — Hero / Fleet / Evolution / Scenarios / Cases / Ticker / Visit / Footer 各区块
- `src/layouts/Base.astro` — 站点外壳（SEO 元信息 / 全局样式）
- `src/styles/` — 全局样式与动效
- `public/` — 静态资源（Astro 默认 `publicDir`）

## 部署

push 到 main 后由 GitHub Actions 构建并发布到 GitHub Pages（`gh-pages` 分支，
自定义域名 `agw.bot`，见 `.github/workflows/deploy-docs.yml`）。

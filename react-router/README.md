# React Router: 3 Implementation Styles

This repo now contains simple examples for all three React Router styles:

1. Declarative Mode
2. Data Mode
3. Framework Mode

## 1) Declarative Mode (runnable here)

- Entry: `index.html`
- App: `src/main.jsx`, `src/App.jsx`
- Uses: `BrowserRouter`, `Routes`, `Route`

Run:

```bash
npm run dev
```

## 2) Data Mode (runnable here)

- Entry: `data.html`
- App: `src/data/main.jsx`, `src/data/router.jsx`
- Uses: `createHashRouter`, `RouterProvider`, `loader`

Run:

```bash
npm run dev:data
```

Then navigate using hash URLs like:

- `http://localhost:5173/data.html#/`
- `http://localhost:5173/data.html#/about`

## 3) Framework Mode (example structure)

- Folder: `framework-example/`
- Config: `framework-example/react-router.config.ts`
- Root route: `framework-example/app/root.tsx`
- Route config: `framework-example/app/routes.ts`
- Route modules: `framework-example/app/routes/home.tsx`, `framework-example/app/routes/about.tsx`

This shows the framework route-module pattern (including `loader`, `action`, `meta`).
To run it, initialize a dedicated React Router Framework app and copy these files into that project structure.

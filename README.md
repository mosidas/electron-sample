# electron-sample

An Electron application with React and TypeScript


## Project Setup

### Prepare
- init
```bash
npm create @quick-start/electron
Need to install the following packages:
@quick-start/create-electron@1.0.24
Ok to proceed? (y) y
> npx
> create-electron
✔ Project name: … electron-sample
✔ Select a framework: › react
✔ Add TypeScript? … No / Yes
✔ Add Electron updater plugin? … No / Yes
✔ Enable Electron download mirror proxy? … No / Yes
Scaffolding project in /Users/shota/repos/electron-sample...
Done. Now run:
  cd electron-sample
  npm install
  npm run dev
```

```bash
npm i
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
npm i -D electron-builder
npm i react-router-dom
npm i @types/react-router-dom
npm i mui-file-input
```

- setup biome
```bash
npm uninstall eslint prettier
npm --save-dev --save-exact @biomejs/biome
npx biome init
```

- mod `.gitignore`: https://github.com/electron/electron/blob/main/.gitignore
- mod `biome.json`
- mod script `format`, `lint` in `package.json`

### Development

```bash
npm run dev
```

### Check

```bash
# Format
npm run format
# Lint
npm run lint
# Typecheck
npm run typecheck
```

### Build

```bash
# For windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

### ref

- https://qiita.com/murasuke/items/8d405d39dd86be0aa44b
- https://blog.logrocket.com/authentication-react-router-v6/

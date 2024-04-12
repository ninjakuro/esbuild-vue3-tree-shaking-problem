# Tree Shaking esbuild vue problem

## Prepare

### Install dependency
```bash
yarn
```

### build esbuild
```bash
yarn build:esbuild
```

### build vite
```bash
yarn build:vite
```

## Test example
```vue
import { Icon } from "./components";
console.log(Icon);
```
We import only the Icon and expect that as a result we will only have the Icon, but in the case of ESBuild we also get an InputText

## How to check
- Open `./dist/vite.js` and try to find `InputText.vue`
- Open `./dist/esbuild.js` and try to find `InputText.vue`
- `esbuild.js` have `InputText.vue`, but `vite.js` haven't

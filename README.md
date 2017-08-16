# Compare Webpack Bundles

> Generate webpack bundles in different scenarios.

This project collects different bundles generated with source files requiring CommonJS or ES2015 modules. It is aimed to understand requiring machanism of webpack in browser.

## build

**install dependencies:**

```sh
yarn install
```

**rebuild each webpack configs under `/examples` :**

```
yarn build
```

## test

To ensure bundles can be excuted correctly in browser.

> note: not include `HMR` and `dynamic import`

```
yarn run test
```

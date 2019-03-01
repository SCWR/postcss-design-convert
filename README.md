# PostCSS Design Convert

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-ci-image]][travis-ci-url]
<!-- [![Node.js Version][node-version-image]][node-version-url] -->

babel plugin quickly introduce the echarts module on demand

[PostCSS] plugin adjust the size of design draft when using viewport or rem layout.
(e.g. cube-ui is based on 375\*667, but project design draft is based on 750\*1334)

[npm-image]: https://img.shields.io/npm/v/postcss-design-convert.svg
[npm-url]: https://npmjs.org/package/postcss-design-convert
<!-- [node-version-image]: https://img.shields.io/node/v/postcss-design-convert.svg
[node-version-url]: http://nodejs.org/download/ -->
[downloads-image]: https://img.shields.io/npm/dm/postcss-design-convert.svg
[downloads-url]: https://npmjs.org/package/postcss-design-convert
[travis-ci-image]: https://travis-ci.org/SCWR/postcss-design-convert.svg
[travis-ci-url]: https://travis-ci.org/SCWR/postcss-design-convert
[PostCSS]: https://github.com/postcss/postcss

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw'],
  classRule: /^\.design-/
}
```

```css
.design-a {
  /* Input example */
  width: 8.21vw;
}
.custom .design-a {
  /* Input example */
  width: 8.21vw;
}
```

```css
.design-a {
  /* Output example */
  width: 16.42vw;
}
.custom .design-a {
  /* Output example */
  width: 8.21vw;
}
```

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw'],
  classRule: /\.design-/
}
```

```css
.design-a {
  /* Input example */
  width: 8.21vw;
}
.custom .design-a {
  /* Input example */
  width: 8.21vw;
}
```

```css
.design-a {
  /* Output example */
  width: 16.42vw;
}
.custom .design-a {
  /* Output example */
  width: 16.42vw;
}
```

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw', 'rem'],
  classRule: /\.design-/
}
```

```css
.design-a {
  /* Input example */
  width: 8.21vw;
  height: 8.21rem;
}
.custom .design-a {
  /* Input example */
  width: 8.21vw;
  height: 8.21rem;
}
```

```css
.design-a {
  /* Output example */
  width: 16.42vw;
  height: 16.42rem;
}
.custom .design-a {
  /* Output example */
  width: 16.42vw;
  height: 16.42rem;
}
```

## Usage

```js
postcss([ require('postcss-design-convert') ])
```

See [PostCSS] docs for examples for your environment.

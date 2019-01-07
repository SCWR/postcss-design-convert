# PostCSS Cube Convert [![Build Status][ci-img]][ci]

[PostCSS] plugin adjust the size of design draft when using viewport or rem layout.
(e.g. cube-ui is based on 375\*667, but project design draft is based on 750\*1334)

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/SCWR/postcss-design-convert.svg
[ci]:      https://travis-ci.org/SCWR/postcss-design-convert

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
    /* Input example */
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
    /* Input example */
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
    /* Input example */
  width: 16.42vw;
  height: 16.42rem;
}
```

## Usage

```js
postcss([ require('postcss-design-convert') ])
```

See [PostCSS] docs for examples for your environment.

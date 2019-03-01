# PostCSS Design Convert

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-ci-image]][travis-ci-url]
<!-- [![Node.js Version][node-version-image]][node-version-url] -->

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

## Example

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw'],
  selector: /^\.design-/
}
```

```css
  /* Input example */
.design-a {
  width: 8.21vw;
}
.custom .design-a {
  width: 8.21vw;
}
```

```css
  /* Output example */
.design-a {
  width: 16.42vw;
}
.custom .design-a {
  width: 8.21vw;
}
```

***

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw'],
  selector: /\.design-/
}
```

```css
  /* Input example */
.design-a {
  width: 8.21vw;
}
.custom .design-a {
  width: 8.21vw;
}
```

```css
  /* Output example */
.design-a {
  width: 16.42vw;
}
.custom .design-a {
  width: 16.42vw;
}
```

***

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw', 'rem'],
  selector: /\.design-/
}
```

```css
  /* Input example */
.design-a {
  width: 8.21vw;
  height: 8.21rem;
}
.custom .design-a {
  width: 8.21vw;
  height: 8.21rem;
}
```

```css
  /* Output example */
.design-a {
  width: 16.42vw;
  height: 16.42rem;
}
.custom .design-a {
  width: 16.42vw;
  height: 16.42rem;
}
```

***

```js
'postcss-design-convert' : {
  multiple: 2,
  units: ['vw'],
  selector: /\.design-/,
  attribute: /width/
}
```

```css
  /* Input example */
.design-a {
  width: 8.21vw;
  height: 8.21vw;
}
.custom .design-a {
  width: 8.21vw;
  height: 8.21vw;
}
```

```css
  /* Output example */
.design-a {
  width: 16.42vw;
  height: 8.21vw;
}
.custom .design-a {
  width: 16.42vw;
  height: 8.21vw;
}
```

## Usage

```js
//postcss.config.js
module.exports = {
  plugins:[
    require('postcss-design-convert')({
      multiple: 2,
      units: ['vw'],
      selector: /\.design-/
    })
  ]
}

//.postcssrc.js
module.exports = {
  'plugins': {
    'postcss-design-convert' : {
      multiple: 2,
      units: ['vw'],
      selector: /\.design-/
    }
  }
}
```

### Options

1. >__multiple__ _(number)_ __default 2__: how many times the design draft needs to be multiplied
2. >__units__ _(array&lt;string&gt;)_ __default \['vw'\]__: the units to be converted
3. >__selector__ _(string | Reg)_ __default /./__: used to filter out the style to be converted (version compatibility reasons, alias __\[classRule\]__)
4. >__attribute__ _(string | Reg)_: used to filter out the attributes to be converted

See [PostCSS] docs for examples for your environment.

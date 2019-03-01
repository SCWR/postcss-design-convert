let postcss = require('postcss')

function convert (sizeStr, zoom = 1, units = 'px') {
  // eslint-disable-next-line security/detect-non-literal-regexp
  let reg = new RegExp(`(-?\\d+)(\\.\\d+)?${units}`, 'g')
  return (sizeStr || '').replace(reg, (value, index, str) => {
    let unit = units ? value.replace(/-?\.?\d+/g, '') : ''
    return `${Number(value.replace(unit, '')) * zoom}${unit}`
  })
}

module.exports = postcss.plugin('postcss-design-convert', (opts = {}) => {
  opts = opts || {} //
  let {
    multiple = 2,
    units = ['vw'],
    selector,
    classRule = /./,
    attribute
  } = opts
  selector = selector || classRule
  // Work with options here
  return function (root, result) {
    // 遍历所有的选择器
    root.walkRules(selector, rule => {
      // 遍历所有的属性
      let fun = decl => {
        decl.value = convert(decl.value, multiple, (`(${units.join('|')})`))
      }
      let params = attribute ? [attribute, fun] : [fun]
      rule.walkDecls(...params)
    })
  }
})

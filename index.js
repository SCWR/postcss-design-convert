var postcss = require('postcss')

function convert (sizeStr, zoom = 1, units = 'px') {
  let reg = new RegExp(`(-?\\d+)(\\.\\d+)?${units}`, 'g')
  return (sizeStr || '').replace(reg, function (value, index, str) {
    let unit = units ? value.replace(/-?\.?\d+/g, '') : ''
    return `${Number(value.replace(unit, '')) * zoom}${unit}`
  })
}

module.exports = postcss.plugin('postcss-design-convert', function (opts = {}) {
  opts = opts || {}
  let { multiple = 2, units = ['vw'], classRule = /^\./ } = opts
  // Work with options here
  let classReg = new RegExp(classRule)
  return function (root, result) {
    // 遍历所有的选择器
    root.walkRules(classReg, function (rule) {
      // 遍历所有的属性
      rule.walkDecls(function (decl) {
        decl.value = convert(decl.value, multiple, (`(${units.join('|')})`))
      })
    })
  }
})

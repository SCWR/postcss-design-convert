var postcss = require('postcss')

var plugin = require('../')

function run(input, output, opts) {
  return postcss([plugin(opts)]).process(input, {
    from: undefined
  }).then(function (result) {
    expect(replace(result.css)).toEqual(replace(output))
    expect(result.warnings()).toHaveLength(0)
    expect(result.css).toMatchSnapshot()
  })
}

function replace(str) {
  return str.replace(/([\r\n]|\s)+/g, ' ')
}

/* Write tests here
it('does something', function () {
  return run('a{ }', 'a{ }', { })
})
*/

const example = [{
    input: `.design-a{
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 200vw;
    height: 20.6vw;
  }
  .custom .design-b{
    width: 200vw;
    height: 20.6vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw'],
      selector: /\.design-/
    }
  },
  {
    input: `.design-a{
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 200vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 200vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw'],
      selector: /\.design-/,
      attribute: /width/,
    }
  },
  {
    input: `.design-a{
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 200vw;
    height: 20.6vw;
  }
  .custom .design-b{
    width: 200vw;
    height: 20.6vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw'],
      classRule: /\.design-/ //test alias, version compatible
    }
  },
  {
    input: `.design-a{
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 200vw;
    height: 20.6vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw'],
      selector: /^\.design-/
    }
  }, {
    input: `.design-a{
    width: 100rem;
    height: 10.3rem;
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 200rem;
    height: 20.6rem;
    width: 200vw;
    height: 20.6vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw', 'rem'],
      selector: /^\.design-/
    }
  },
  {
    input: `.design-a{
    width: 100rem;
    height: 10.3rem;
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 200rem;
    height: 20.6rem;
    width: 200vw;
    height: 20.6vw;
  }
  .custom .design-b{
    width: 200vw;
    height: 20.6vw;
  }
  .other{
    width:200vw;
  }
  a{
    width:200vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw', 'rem']
    }
  },
  {
    input: `.design-a{
    width: 100rem;
    height: 10.3rem;
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:100vw;
  }`,
    output: `.design-a{
    width: 100rem;
    height: 10.3rem;
    width: 100vw;
    height: 10.3vw;
  }
  .custom .design-b{
    width: 100vw;
    height: 10.3vw;
  }
  .other{
    width:100vw;
  }
  a{
    width:200vw;
  }`,
    opts: {
      multiple: 2,
      units: ['vw', 'rem'],
      selector: 'a'
    }
  }
]

example.forEach(({
  input,
  output,
  opts
}) => {
  it(input, function () {
    return run(input, output, opts)
  })
})

// let {input,output,opts} = example[4]
// it(input, function () {
//   return run(input, output, opts)
// })

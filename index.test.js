var postcss = require('postcss')

var plugin = require('./')

function run(input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
    console.log(result.css)
    expect(result.css).toEqual(output)
    expect(result.warnings()).toHaveLength(0)
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
it('test classRule 1', function () {
  return run(replace(`.design-a{
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
  }`), replace(`.design-a{
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
    }`), {
    multiple: 2,
    units: ['vw'],
    classRule: /\.design-/
  })
})

it('test classRule 2', function () {
  return run(replace(`.design-a{
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
  }`), replace(`.design-a{
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
    }`), {
    multiple: 2,
    units: ['vw'],
    classRule: /^\.design-/
  })
})

it('test units ', function () {
  return run(replace(`.design-a{
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
  }`), replace(`.design-a{
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
    }`), {
    multiple: 2,
    units: ['vw', 'rem'],
    classRule: /^\.design-/
  })
})

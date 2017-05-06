
let njb_headjs_load_css = () => {

  head.load('/data/lib/bootstrap.min.css')
  head.load('/data/lib/slick.css')
  head.load([
    'base',
    'page',
    'text',
  ].map(e => '/data/build/css/' + e + '.min.css'))

}

let njb_headjs_load_lib = () => {

  head.load([
    // 'https://unpkg.com/react@15.3.0/dist/react.js',
    // 'https://unpkg.com/react-dom@15.3.0/dist/react-dom.js',
    // 'https://unpkg.com/babel-standalone@6.15.0/babel.min.js',
    // 'https://unpkg.com/remarkable@1.6.2/dist/remarkable.min.js',
    // '/data/lib/bootstrap.min.js',
  ])

}

let njb_headjs_load_script = () => {
  head.load([
    'helfykz',
  ].map(e => '/data/build/js/js/' + e + '.min.js'))
}

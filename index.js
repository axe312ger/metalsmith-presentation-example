const Metalsmith = require('metalsmith')
const debug = require('metalsmith-debug')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const browserSync = require('metalsmith-browser-sync')

const __DEV__ = process.env.NODE_ENV === 'development'

Metalsmith(__dirname)
  .source('content')
  .destination('dist')
  .use(__DEV__ && browserSync({
    open: false,
    server: {
      baseDir: 'dist',
      directory: true
    },
    files  : [
      'content/**/*.md',
      'layouts/**/*'
    ]
  }))
  .use(debug())
  .use(markdown())
  .metadata({
    pageTitle: 'My Awesome Blog'
  })
  .use(layouts({
    default: 'default.hbs'
  }))
  .build(function(err) {
    if (err) throw err;
  });

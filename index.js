const Metalsmith = require('metalsmith')
const debug = require('metalsmith-debug')
const { report } = require('metalsmith-debug-ui')
const browserSync = require('metalsmith-browser-sync')

const layouts = require('metalsmith-layouts')
const collections = require('metalsmith-collections')

const markdown = require('metalsmith-markdown')
const excerpts = require('metalsmith-excerpts')

const __DEV__ = process.env.NODE_ENV === 'development'

Metalsmith(__dirname)
  .source('content')
  .destination('dist')
  .metadata({
    pageTitle: 'My Awesome Blog'
  })
  .use(__DEV__ && browserSync({
    open: false,
    server: {
      baseDir: 'dist'
    },
    files  : [
      'content/**/*.md',
      'layouts/**/*'
    ]
  }))
  // Content
  .use(markdown())
  .use(excerpts())
  // Structure
  .use(collections({
    articles: {
      pattern: 'articles/*.html',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(layouts({
    default: 'default.pug'
  }))
  .use(__DEV__ && report())
  .build((err) => {
    if (err) throw err
  })

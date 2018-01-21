const Metalsmith = require('metalsmith')
const debug = require('metalsmith-debug')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')

Metalsmith(__dirname)
  .source('content')
  .destination('dist')
  .use(debug())
  .use(markdown())
  .metadata({
    pageTitle: 'My Awesome Blog'
  })
  .use(layouts({
    default: 'default.hbs',  // required
    pattern: '**/*.html', // multimatch
    directory: 'layouts', // default
    engineOptions: {} // pass option to transformer
  }))
  .build(function(err) {
    if (err) throw err;
  });

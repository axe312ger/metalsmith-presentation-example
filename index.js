const Metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const debug = require('metalsmith-debug')

Metalsmith(__dirname)
  .source('content')
  .destination('dist')
  .use(debug())
  .use(markdown())
  .build(function(err) {
    if (err) throw err;
  });

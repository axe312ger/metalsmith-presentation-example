const Metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')

Metalsmith(__dirname)
  .source('content')
  .destination('dist')
  .use(markdown())
  .build(function(err) {
    if (err) throw err;
  });
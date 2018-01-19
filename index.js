const Metalsmith = require('metalsmith')

Metalsmith(__dirname)
  .source('content')
  .destination('dist')
  .build(function(err) {
    if (err) throw err;
  });
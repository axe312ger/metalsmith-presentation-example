const Metalsmith = require('metalsmith')

Metalsmith(__dirname)
  .build(function(err) {
    if (err) throw err;
  });
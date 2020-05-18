const Import = require('./index');
module.export = {
  plugins: [
    [Import, {a: 1, b: 2}]
  ]
}
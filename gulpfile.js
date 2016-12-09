var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('test', shell.task([
  'node_modules\\.bin\\jasmine-node test'
]));

gulp.task('server', shell.task([
  'node server.js'
]));
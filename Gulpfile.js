var gulp = require('gulp');
var bs = require('browser-sync');
var reload = bs.reload;

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('serve', function(done) {
  bs({
    open: false,
    port: 9000,
    server: {
      baseDir: ['client'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('watch', ['serve'], function(){
  gulp.watch('client/**/*.**',  reload).on('change', reportChange)
});

gulp.task('default', ['watch']);

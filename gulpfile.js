const { dest } = require('gulp');
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');

gulp.task('css', async function() {
    return gulp.src('style.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('./dest'))



})


gulp.task('watch', async function(){
    gulp.watch()


});

gulp.task('default',['css','watch']);
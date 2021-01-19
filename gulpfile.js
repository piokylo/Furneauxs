var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync');

gulp.task('css', function () {
    return gulp.src('style.css')
        .pipe(
            cleanCss({

                compatibility: 'ie8'
            })
        )
        .pipe(gulp.dest('dist'))

});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'))


});


gulp.task('watch', function () {

    browserSync.init({
        server: {

            baseDir: 'dist'
        }

    })

    gulp.watch('index.html', gulp.series('html')).on("change", browserSync.reload);
    gulp.watch('style.css', gulp.series('css')).on("change", browserSync.reload);

});


gulp.task('default', gulp.series('html', 'css', 'watch'));
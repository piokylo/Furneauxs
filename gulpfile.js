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

gulp.task('fonts', function () {
    return gulp.src('fonts/* ')
        .pipe(gulp.dest('dist/fonts'))


});

gulp.task('img', function () {
    return gulp.src('img/* ')
        .pipe(gulp.dest('dist/img'))


});

gulp.task('js', function () {
    return gulp.src('js')
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
    gulp.watch('fonts/*', gulp.series('fonts')).on("change", browserSync.reload);
    gulp.watch('img/*', gulp.series('img')).on("change", browserSync.reload);
    gulp.watch('main.js', gulp.series('js')).on("change", browserSync.reload);

});


gulp.task('default', gulp.series('html', 'css','fonts','js', 'img',  'watch'));
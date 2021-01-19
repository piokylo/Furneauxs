var gulp = require('gulp')
var cleanCss = require('gulp-clean-css')

gulp.task('css',  function() {
    return gulp.src('style.css')
    .pipe(
        cleanCss({

            compatibility: 'ie8'
    })
    )
    .pipe(gulp.dest('dist'))



})


// gulp.task('watch', function(){
//     gulp.watch()


// });

gulp.task('default',gulp.series('css'));
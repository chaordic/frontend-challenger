var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// tarefa para o sass
gulp.task('sass', () => {
   return  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

// tarefa para observar
gulp.task('watch', () => {
    gulp.watch('sass/*.scss');
});


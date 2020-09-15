var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
        
gulp.task('html', function (){
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('img', function (){
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('./build/img'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function (){
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  }); 
});

gulp.task('watch', function () {
    gulp.watch("src/scss/**/*.scss", gulp.parallel('sass'));
    gulp.watch("src/*.html", gulp.parallel('html'));
    gulp.watch("src/img/*", gulp.parallel('img'));
    gulp.watch("src/js/*", gulp.parallel('js'))
});

gulp.task('default', gulp.series(
  gulp.parallel('html', 'img', 'sass', 'js'),
  gulp.parallel ('watch', 'serve')
));

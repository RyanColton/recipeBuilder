var gulp = require('gulp')
,   sourcemaps =require('gulp-sourcemaps')
,   sass = require('gulp-sass')
,   concat = require('gulp-concat')
,   CacheBuster = require('gulp-cachebust')
,   babel = require('gulp-babel')
,   print = require('gulp-print')
,   clean = require('gulp-clean')

var cachebust = new CacheBuster();

gulp.task('Hello', function(){
  console.log('Hello World!')
});

gulp.task('anotherMessage', function(){
  console.log('This is another message');
})

gulp.task('build-css', function(){
  return gulp.src('./styles/*')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cachebust.resources())
  .pipe(concat('styles.css'))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
})
gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});

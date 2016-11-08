let del = require('del');
let gulp = require('gulp');
let ts = require('gulp-typescript');
let watch = require('gulp-watch');
let sass = require('gulp-sass');

let tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')});

gulp.task('ts', () => {
    let tsResult = tsProject.src()     
      .pipe(tsProject());
    
    return tsResult.js
      .pipe(gulp.dest('dist/'));
});

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', (done) => {
  del(['dist'], done);
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.ts', ['ts']);
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.html', ['html']);
});

gulp.task('default', ['ts', 'html', 'sass', 'watch']);
var gulp = require('gulp'),
	less = require('gulp-less'),
	nodemon = require('gulp-nodemon');

gulp.task('compileLess', function () {
	return gulp.src('./public/less/style.less')
		.pipe(less())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('watchLess', function () {
	gulp.watch('./public/less/*', ['compileLess']);
});

gulp.task('startServer', function () {
	nodemon({ script: 'server.js' });
});

gulp.task('default', Object.keys(gulp.tasks));

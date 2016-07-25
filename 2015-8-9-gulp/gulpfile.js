var gulp=require('gulp'),
	htmlmin=require('gulp-htmlmin');

gulp.task('hm',function(){
	return gulp.src('src/index.html')	
	.pipe(htmlmin({collapseWhitespace: true,removeComments:true}))
	.pipe(gulp.dest('dest'));
});

gulp.task('default',['hm']);
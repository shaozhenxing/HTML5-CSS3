module.exports=function(grunt){
	// 1. 引入功能(压缩)插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	//2. 写具体任务
	grunt.initConfig({
		uglify:{
			suibian:{
				src:'src/*.js',
				dest:'dest/jquery.min.js'	
			}	
		}
	});
	
	//3. 注册任务
	grunt.registerTask('default',['uglify']);
};
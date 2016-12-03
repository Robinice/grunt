module.exports = function(grunt) {  
  
  grunt.initConfig({  
    pkg: grunt.file.readJSON('package.json'),  
    concat: {  
      optionsjs: {  
        separator: ';'  
      },  
      //合并js里面的所以js到jsmin里面，并后缀改为*.min.js
      js: {  
        src: ['js/**/*.js'],  
        dest: 'jsmin/<%= pkg.name %>.min.js'  
      },
      //合并css里面的所以css到cssmin里面,并后缀改为*.min.css
      css : {
        src: ['css/**/*.css'],
        dest:'cssmin/<%= pkg.name %>.min.css'

            }
      
    },  
     
    //压缩jsmin里面的*.min.js
    uglify: {  
      options: {  
        banner: '/*! Robin <%= grunt.template.today("dd-mm-yyyy") %> */\n'  
      },  
      js: {  
        files: {  
          'jsmin/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']  
        }  
      }

    },  
    //检测jsmin里面的js语法的准确
    jshint: {  
      files: ['gruntfile.js', 'jsmin/**/*.js'],  
      options: {  
        // options here to override JSHint defaults  
        globals: {  
          jQuery: true,  
          console: true,  
          module: true,  
          document: true  
        }  
      }  
    },  
     //压缩cssmin里面的*.min.css
        cssmin: {
            //文件头部输出信息
            options: {
               banner: '/*! Robin <%= grunt.template.today("dd-mm-yyyy") %> */\n' ,
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'cssmin/',
                        src: '*.css',
                        dest: 'cssmin',
                        ext: '.min.css'//后缀
                    }
                ]
            }
        }
   
  });  
  
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-jshint');   
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-contrib-concat'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
/*  grunt.registerTask('test', ['jshint', 'qunit']);  */
  
  grunt.registerTask('default', ['jshint', 'concat', 'uglify','cssmin']);  
};  
# grunt
Grunt 的配置使用

  Grunt 依赖 Node.js 所以在安装之前确保你安装了 Node.js。然后开始安装 Grunt。
  
  第一步：安装nodejs，机械式的安装！
  
  第二步：执行grunt命令，npm install -g grunt-cli 命令
  
  第三步：生成package.json文件
    
    {
    "name": "my-project-name",
    "version": "0.1.0",
    "devDependencies": {
    }
  }

 第四步：执行npm install grunt --save-dev 命令
 
 第五步：安装所需的插件（注：复制下面全部）
 npm install --save-dev grunt-contrib-concat 
 grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify 
 grunt-contrib-watch grunt-contrib-connect grunt-contrib-cssmin
 
 插件安装解释：
 合并文件：grunt-contrib-concat
 语法检查：grunt-contrib-jshint
 Scss 编译：grunt-contrib-sass
 压缩文件：grunt-contrib-uglify
 监听文件变动：grunt-contrib-watch
 建立本地服务器：grunt-contrib-connect
 压缩css：grunt-contrib-cssmin
 
 第五步：然后直接运行此项目！
 
 
  

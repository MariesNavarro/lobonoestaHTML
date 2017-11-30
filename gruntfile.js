

module.exports = function(grunt){
  grunt.initConfig({
  imagemin: {
      static: {
        options: {
          optimizationLevel: 5
        },
        files: {
          'build/prod/fav/favicon6.png': 'build/dev/fav/favicon6.png',
          'build/prod/fav/favicon4.png': 'build/dev/fav/favicon4.png',
          'build/prod/fav/favicon9.png': 'build/dev/fav/favicon9.png',
          'build/prod/fav/favicon2.png': 'build/dev/fav/favicon2.png',
          'build/prod/fav/favicon5.png': 'build/dev/fav/favicon5.png',
          'build/prod/img/poster/p0.jpg': 'build/dev/img/poster/p0.jpg',
          'build/prod/img/informacion_lobo_no_esta.jpg': 'build/dev/img/informacion_lobo_no_esta.jpg'
        }
      }
    }, //imgmin
    uglify: {
     target: {
       files: {
         'build/prod/js/app.min.js': ['build/dev/js/app.js']
       }
     }
   }, //uglify
   cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/dev/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/prod/css',
          ext: '.min.css'
        }]
      }
    }, //cssmin
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/prod/index.html': 'build/dev/index.html'
        }
      }
    }, //htmlmin
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          base: 'build/prod/',
          livereload: true
        }
      }
    }, //connect
    watch: {
      options : {
        livereload : true
      },
      files: ['build/dev/**/*'],
      tasks: ['uglify','cssmin','htmlmin']
    } //watch
  }); //initConfig
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.registerTask('default', ['imagemin', 'uglify', 'cssmin', 'htmlmin', 'connect', 'watch']);
  // grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['imagemin', 'uglify', 'cssmin', 'htmlmin', 'watch']);
}; //wrapper

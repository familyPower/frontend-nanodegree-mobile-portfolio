module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // minimize js
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          //'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          'dist/js/perfmatters.min.js': ['js/perfmatters.js'],
          'dist/views/js/main.min.js': ['views/js/main.js']
        }
      }
    },

    // minimize images
    imagemin: {
       dist: {
          options: {
            optimizationLevel: 5
          },
          files: [{
             expand: true,
             cwd: 'img',
             src: ['**/*.{png,jpg,gif}'],
             dest: 'dist/img'
          },
          {
            expand: true,
            cwd: 'views/images',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/views/images'
          }]
       }
    },

    htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'dist/index.html': 'index.html',     // 'destination': 'source'
            'dist/project-2048.html': 'project-2048.html',
            'dist/project-mobile.html': 'project-mobile.html',
            'dist/project-webperf.html': 'project-webperf.html',
            'dist/views/pizza.html': 'views/pizza.html'
          }
        }
      },

    cssmin: {
      minify: {
        expand: true,
      //cwd: 'css/',
      // src: ['*.css', '!*.min.css', ],
        files: {
          'dist/css/print.min.css': ['css/print.css'],
          'dist/css/style.min.css': ['css/stle.css'],
          'dist/views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
          'dist/views/css/style.css': ['views/css/style.css']
        }
      // dest: 'dist/css',
      // ext: '.min.css'
      }
    },
});
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['contrib-clean','contrib-copy','uglify', 'imagemin', 'cssmin', 'htmlmin']);

};

//http://integralist.co.uk/Grunt-Boilerplate.html

(function () {
   "use strict";

  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      jshint: {
        gruntfile: ['Gruntfile.js'],
      },
      watch: {
        gruntfile: {
          files: ['./sass/*.scss', 'Gruntfile.js'],
          tasks: ['sass']
        }
      },
      sass: {
        dev: {
          options: {
            style: 'expanded',
            debugInfo: false,
            lineNumbers: true,
            noCache: true
          },
          expand: true,
          cwd: './sass',
          src: ['*.scss'],
          dest:'./styles',
          ext: '.css'
        }
      }
    });

    //Load the tasks plugins from node_modules dir
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Setup the tasks to run at the cli by invoking grunt <task_name>
    grunt.registerTask('dev', ['watch', 'sass']);
    grunt.registerTask('styles', ['sass']);

    // Default task. Which stuff gets ran just by running "grunt" at the cli
    grunt.registerTask('default', ['dev']);
  };
}());
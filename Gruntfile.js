'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'static/css/style.css': ['static/css/style.css']
        }
      }
    },
    watch: {
      files: ["scss/*.less", "scss/*/*.less"],
      tasks: ["build:css"]
    },
    less: {
      development: {
        options: {
          paths: ["scss"],
        },
        files: {
          "static/css/style.css": "scss/style.less"
        }
      },
    },
  });

  grunt.registerTask('build:css', ['less', 'cssmin']);

  grunt.registerTask('default', ['build:css']);
};

'use strict';
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      files: ["scss/*.less", "scss/*/*.less"],
      tasks: ["less"]
    },
    // "less"-task configuration
    less: {
      // production config is also available
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

  grunt.registerTask('default', ['less']);
};

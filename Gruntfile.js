module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/js/firepad-userlist.min.js': ['lib/firepad-userlist.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');;


  grunt.registerTask('default', ['uglify']);

};

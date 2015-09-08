module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less : {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'app/module/bible/less',
            src: '**/*.less',
            dest: 'app/module/bible/css',
            ext: '.css'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less:dev']);
};
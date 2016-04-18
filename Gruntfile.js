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
    },
    watch: {
      scripts: {
        files: '**/*.less',
        tasks: ['less:dev'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:dev']);
};
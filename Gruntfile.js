module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.initConfig({
    connect: {
   server: {
     options: {
       port: 8000
     }
   }
 },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/agency.css": "less/agency.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect','less', 'watch']);
};

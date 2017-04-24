module.exports = function(grunt) {
    grunt.initConfig({

    // imports the config data from the package.json
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        dist: {
            files: {
                'css/style.css' : 'sass/style.scss '
            }
        }
    },

});

    grunt.loadNpmTasks('grunt-contrib-sass');

};
// Generated on 2016-01-04 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    ngtemplates: 'grunt-angular-templates',
    ngconstant: 'grunt-ng-constant'
  });

  // Configurable paths for the application
  var moduleConfig = {
    lib: 'lib',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    yeoman: moduleConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.lib %>/**/*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all']
      },
      jsTest: {
        files: ['test/spec/**/*.js'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.lib %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'postcss:server']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9001,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35719
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(moduleConfig.lib)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.lib %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.lib %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.lib %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        fontsDir: '<%= yeoman.lib %>/styles/fonts',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    ngconstant: {
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'visageNgCommon.config',
        dest: '<%= yeoman.lib %>/config.js'
      },
      // Environment targets
      development: {
        constants: {
          ENV: {
            development: true,
            apiEndpoint: 'http://localhost:3000',
            pdfViewerEndpoint: 'http://localhost:9011/viewer.html#/'
          },
          ThirdParties: {
            checkout: {
              jsLib: 'https://sandbox.checkout.com/js/v1/checkout.js',
              endpoint: 'http://localhost:2222',
              apiKey: 'pk_test_dd1c0c5a-2669-475a-952a-f203f08fdb73'
            },
            zappier: {
              updateLead: 'https://zapier.com/hooks/catch/230zsq/'
            },
            intercom: {
              appId: 'qgdnsb89'
            },
            auth0: {
              clientID: 'bQ1LbVxzegv8oUew3SO7eHa8bemGgcu0',
              domain: 'visage.auth0.com'
            }
          }
        }
      },
      dist: {
        constants: {
          ENV: {
            staging: true,
            apiEndpoint: '{{VISAGE_API_ENDPOINT}}',
            pdfViewerEndpoint: '{{PDF_VIEWER_ENDPOINT}}/viewer.html#/'
          },
          ThirdParties: {
            checkout: {
              jsLib: '{{CHECKOUT_JS_LIB}}',
              endpoint: '{{CHECKOUT_API_ENDPOINT}}',
              apiKey: '{{CHECKOUT_API_KEY}}'
            },
            zappier: {
              updateLead: '{{ZAPPIER_HOOK_UPDATELEAD}}'
            },
            intercom: {
              appId: '{{INTERCOM_APP_ID}}'
            },
            auth0: {
              clientID: '{{AUTH0_CLIENT_ID}}',
              domain: '{{AUTH0_DOMAIN}}'
            }
          }
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/visage-ng-common.css': [
            '.tmp/styles/{,*/}*.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/visage-ng-common.min.js': [
            '<%= yeoman.dist %>/visage-ng-common.js'
          ]
        }
      }
    },
    concat: {
      dist: {
        files: {
          '<%= yeoman.dist %>/visage-ng-common.js': [
            '<%= yeoman.lib %>/config.js' ,
            '<%= yeoman.lib %>/index.js' ,
            '<%= yeoman.lib %>/controllers/*.js',
            '<%= yeoman.lib %>/directives/*.js',
            '<%= yeoman.lib %>/services/*.js',
            '.tmp/templateCache.js'
          ]
        }
      }
    },

    ngtemplates: {
      dist: {
        options: {
          module: 'visageNgCommon',
          htmlmin: {
            ignoreCustomFragment:true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            //collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true
          }
        },
        cwd: '<%= yeoman.lib %>',
        src: 'views/**/*.html',
        dest: '.tmp/templateCache.js'
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '*.js',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },


    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }

  });

  grunt.registerTask('test', [
    'clean:server',
    'postcss',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'ngconstant:development',
    'postcss',
    'compass:dist',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('dist', [
    'clean:dist',
    'ngconstant:dist',
    'postcss',
    'compass:dist',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'cssmin',
    'uglify',
    'ngconstant:development'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test'
  ]);
};

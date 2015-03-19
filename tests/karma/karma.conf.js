module.exports = function(config) {
    config.set({
        files : [
            'public/components//angular/angular.js',
            'public/components//angular-route/angular-route.js',
            'public/components//angular-mocks/angular-mocks.js',
            'public/javascripts/ng/main.js',
            'public/javascripts/ng/controllers.js',
            'public/javascripts/ng/services.js',
            'tests/client/unit/**/*Spec.js',
        ],
        basePath: '../../',
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['Chrome'],
        autoWatch: false,
        singleRun: true,
        colors: true
    });
};

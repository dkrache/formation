var gulp = require('gulp');
var sonar = require('gulp-sonar');

var sonarJs = {
    sonar: {
        host: {
            url: 'http://localhost:9000'
        },
        projectKey: 'AngularFormation-js',
        projectName: 'AngularFormation-js',
        projectVersion: '1.0.0',
        sources: 'app/js',
        language: 'js',
        sourceEncoding: 'UTF-8',
        exec: {
            maxBuffer: 1024 * 1024
        }
    }
};
var sonarCss = {
    sonar: {
        host: {
            url: 'http://localhost:9000'
        },
        projectKey: 'AngularFormation-css',
        projectName: 'AngularFormation-css',
        projectVersion: '1.0.0',
        sources: 'app/css',
        language: 'css',
        sourceEncoding: 'UTF-8',
        exec: {
            maxBuffer: 1024 * 1024
        }
    }
};
var sonarWeb = {
    sonar: {
        host: {
            url: 'http://localhost:9000'
        },
        projectKey: 'AngularFormation-web',
        projectName: 'AngularFormation-web',
        projectVersion: '1.0.0',
        sources: 'app/partials/',
        language: 'web',
        sourceEncoding: 'UTF-8',
        exec: {
            maxBuffer: 1024 * 1024
        }
    }
};

gulp.task('sonar', function () {
    return gulp.src('')
        .pipe(sonar(sonarWeb))
        .pipe(sonar(sonarCss))
        .pipe(sonar(sonarJs))
        .on('error', util.log);
});

const   gulp = require('gulp'),
        frontifyApi = require('@frontify/frontify-api');

const   const_access_token = 'XSQwvq8jdunmejg4CmTvgDaxLrDhTUxjFEBRr1vG',
        const_project = '411',
        baseUrl = 'https://brand.eon.com';


// Frontify related
function assets() {
    return frontifyApi.syncAssets(
        {
            access_token: const_access_token,
            project: const_project,
            cwd: './assets',
            baseUrl: 'https://eon.frontify.com'
        },
        [
            'fonts/**/*.*',
            'styles/*.css',
            'fonts/*.*',
            'scripts/*.*',
            'img/**/*.*'
        ]
    ).catch(function(err) {
        console.error(err);
    });
}
// Watch for assets
function watch() {
    gulp.watch("./assets/img/**/*", assets);
}

const frontify = gulp.series(assets, watch);
exports.frontify = frontify;
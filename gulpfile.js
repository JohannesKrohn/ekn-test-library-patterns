const   gulp = require('gulp'),
        frontifyApi = require('@frontify/frontify-api');

const   const_access_token = 'b653gyHiLLeSwh3S2sRkZw4jo2Q6Frf6JjAANt11',
        const_project = '416',
        baseUrl = 'https://brand.eon.com';


// Frontify related
function assets() {
    return frontifyApi.syncAssets(
        {
            access_token: const_access_token,
            project: const_project,
            cwd: './assets',
            baseUrl: baseUrl
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
    gulp.watch("./assets/**/*", assets);
}

const frontify = gulp.series(assets, watch);
exports.frontify = frontify;
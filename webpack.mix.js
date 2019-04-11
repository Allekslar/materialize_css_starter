let mix = require('laravel-mix');

// Path to dist folder
const DIST = 'assets';

// Proxy an existing virtual host (eg: 'myhost.dev', 'localhost/bootstrap-myhost').
// If null, use the built-in static server.
const PROXY = null;

mix.options({
    clearConsole: true,
    processCssUrls: false,
})
    .setPublicPath('/')
    .sass('resources/sass/theme.scss', 'assets/css')
    .js('resources/js/theme.js', 'assets/js')
    .extract(['jquery', 'materialize-css'])
    .browserSync({
        server: PROXY === null,
        proxy: PROXY,
        files: [
            '*.{php|html|htm|js}',
            DIST + '/**/*',
            // '*.*'

        ]
    });
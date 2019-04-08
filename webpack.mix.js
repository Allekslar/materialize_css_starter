let mix = require('laravel-mix');



mix.options({
    clearConsole: true,
    processCssUrls: false,
})
    .setPublicPath('/')
    .sass('resources/sass/theme.scss', 'assets/css')
    .js('resources/js/theme.js', 'assets/js')
    .extract(['jquery', 'materialize-css']);

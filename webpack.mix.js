const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix
  .setPublicPath('./dist')
  .blocks('src/scripts/app.js', 'scripts')
  .autoload({ jquery: ['$', 'window.jQuery'] })
  .extract()
  .sourceMaps()
  .version()
  .disableSuccessNotifications();
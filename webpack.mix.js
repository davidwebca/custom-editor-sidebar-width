const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix
  .setPublicPath('./dist')
  .blocks('src/scripts/app.js', 'scripts')
  .extract()
  .sourceMaps()
  .version()
  .disableSuccessNotifications();
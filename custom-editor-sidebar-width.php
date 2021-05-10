<?php 
/*
Plugin Name: Custom editor sidebar width
Plugin URI: https://github.com/davidwebca/custom-editor-sidebar-width
Description: WordPress plugin to allow users to set their desired Gutenberg sidebar width.
License: MIT
Author: David Lapointe Gilbert
Version: 1.0.0
Author URI: https://davidweb.ca
*/

/**
 * Setup the user meta and show it in the Rest API
 */
add_action('admin_init', function () {
    register_meta('user', 'editor_width', [
      "single" => true,
      "type" => "integer",
      "show_in_rest" => true
    ]);
});

add_action('admnin_enqueue_scripts', function() {
    $ds = DIRECTORY_SEPARATOR;
    $script_path = plugin_dir_path(__FILE__) . $ds . 'dist' . $ds . 'scripts' . $ds . 'app.js';
    $script_asset_path = plugin_dir_path(__FILE__) . $ds . 'dist' . $ds . 'scripts' . $ds . 'script.asset.php';
    $script_asset = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
    $script_url = plugins_url( $script_path, __FILE__ );
    wp_enqueue_script( 'script', $script_url, $script_asset['dependencies'], $script_asset['version'] );
});

add_action('admin_head', function () {
    // We use css custom properties to make sure the sidebar 
    ?>
    <style>
        :root{
            --cesw-sidebar-width:280px;
        }
        .edit-post-sidebar{
            width: var(--cesw-sidebar-width);
        }

    </style>
    <?php
});

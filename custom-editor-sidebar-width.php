<?php 
/*
Plugin Name: Custom editor sidebar width
Plugin URI: https://github.com/davidwebca/custom-editor-sidebar-width
Description: WordPress plugin to allow users to set their desired Gutenberg sidebar width.
License: MIT
Author: David Lapointe Gilbert
Version: 1.0.8
Author URI: https://davidweb.ca
Text Domain: cesw
Domain Path: /languages
*/

/**
 * Setup the user meta and show it in the Rest API
 */
add_action('rest_api_init', function () {
    register_meta('user', 'editor_width', [
        "single" => true,
        "type" => "integer",
        "show_in_rest" => true,
        "default" => 280
    ]);
});


add_action('init', function() {
    load_plugin_textdomain( 'cesw', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
});

add_action('admin_enqueue_scripts', function($hook) {
    $screen = get_current_screen();
    if ( $screen->base == 'post' || $screen->base == 'edit' && $screen->is_block_editor ){
        $ds = DIRECTORY_SEPARATOR;
        $script_path = plugin_dir_path(__FILE__) . 'build' . $ds . 'index.js';
        $script_asset_path = plugin_dir_path(__FILE__) . $ds . 'build' . $ds . 'index.asset.php';
        $script_asset = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
        $script_url = plugin_dir_url( __FILE__ ) . 'build/index.js';

        wp_enqueue_script( 'cesw_script', $script_url, $script_asset['dependencies'], $script_asset['version'] );
        wp_set_script_translations( 'cesw_script', 'cesw', plugin_dir_path( __FILE__ ) . '/languages/');
    }  
});

add_action('admin_head', function () {
    /**
     * We use css with a custom property that we change with JS to make sure the sidebar
     * stays with that width, otherwise react removes the attribute since the sidebar
     * mounts / unmounts every time the user changes tabs.
     */
    $screen = get_current_screen();
    if ( $screen->base == 'post' || $screen->base == 'edit' && $screen->is_block_editor ){
    ?>
    <style>
        :root{
            --cesw-sidebar-width:280px;
        }
        .interface-complementary-area__fill,
        .interface-complementary-area{
            width: var(--cesw-sidebar-width) !important;
        }

    </style>
    <?php
    }
});

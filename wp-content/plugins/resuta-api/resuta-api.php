<?php
/*
	Plugin Name: Resuta API
	Plugin URI: https://resuta.com.br
	Version: 0.0.1
	Author: Resuta
	Author URI: https://resuta.com.br
	Text Domain: resuta-api
	Domain Path: /languages
	License: GPLv2
	Description: Keep plugin enabled to enjoy all its functionalities.
*/

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Core;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
}

$core = new Core( __FILE__ );

register_activation_hook( __FILE__, array( $core, 'activate' ) );

<?php
/*
	Plugin Name: Resuta Manager
	Plugin URI: https://resuta.com.br/
	Version: 0.1.0
	Author: Resuta
	Author URI: https://resuta.com.br/
	Text Domain: resuta-manager
	Domain Path: /languages
	License: GPL2
	Description: Exemplo de implementação utilizando a API.
*/

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

if ( ! class_exists( 'RESUTA\API\Core' ) ) {
	return;
}

use RS\Resuta\Core;

include 'vendor/autoload.php';

$core = new Core( __FILE__ );

register_activation_hook( __FILE__, array( $core, 'activate' ) );

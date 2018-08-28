<?php

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
}

add_action( 'tgmpa_register', 'resuta_register_required_plugins' );

function get_component( $template_name, $args = array() ) {
	$template_name = __DIR__ . "/components/{$template_name}.php";

	if ( file_exists( $template_name ) ) {
		include $template_name;
	}
}

function resuta_register_required_plugins() {
	$plugins = array(
		array(
			'name'               => 'Resuta API',
			'slug'               => 'resuta-api',
			'source'             => 'https://github.com/Apiki/gb-plugin-api/archive/master.zip',
			'required'           => true,
			'version'            => '0.0.1',
			'force_activation'   => false,
			'force_deactivation' => false,
		),
	);

	tgmpa( $plugins );
}

if ( ! class_exists( 'RESUTA\API\Core' ) ) {
	return;
}

new Resuta\Core();

<?php

namespace RS\Resuta;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Loader;

class Core extends Loader
{
	const SLUG = 'resuta-manager';

	public function initialize()
	{
		add_action( 'init', array( &$this, 'load_textdomain' ) );

		$controllers = array(
			'Posts',
			//'Events',
			'Environments',
			'Widgets',
			//'Nav_Menus',
			'Users',
		);

		$this->load_controllers( $controllers );
	}

	public function activate()
	{
		$controllers = array(
			//'Events',
			'Environments',
		);

		$this->load_controllers( $controllers, true );
	}

	public function scripts_admin()
	{
		$this->load_wp_media();

		wp_enqueue_script(
			'admin-script-' . self::SLUG,
			self::plugins_url( '/assets/javascripts/built.js' ),
			array( 'jquery', 'admin-script-gb-plugin-api' ),
			self::filemtime( 'assets/javascripts/built.js' ),
			true
		);
	}

	public function styles_admin()
	{
		// wp_enqueue_style(
		// 	'admin-style-' . self::SLUG,
		// 	self::plugins_url( 'assets/stylesheets/style.css' ),
		// 	array( 'admin-css-gb-plugin-api' ),
		// 	self::filemtime( 'assets/stylesheets/style.css' )
		// );
	}
}

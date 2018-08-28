<?php

namespace RS\Resuta\Controller;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Controller\Post_Type;
use RS\Resuta\Model\Event;
use RS\Resuta\Core;

use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Events extends Post_Type
{
	public $name            = Event::POST_TYPE;
	public $capability_type = Event::POST_TYPE;
	public $messages        = array(
		'label'  => 'Evento',
		'plural' => 'Eventos',
	);

	public function register_meta_boxes()
	{

	}

	public function get_args_register_post_type()
	{
		return array(
			'menu_icon' => 'dashicons-calendar-alt',
			'rewrite'   => array( 'slug' => __( 'evento', Core::SLUG ) ),
		);
	}
}

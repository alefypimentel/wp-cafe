<?php

namespace RS\Resuta\Controller;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Controller\Post_Type;
use RS\Resuta\Core;
use RS\Resuta\Helper\Utils;
use RS\Resuta\Model\Post;

use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Posts extends Post_Type
{
	public $is_register = false;
	public $name        = Post::POST_TYPE;

	public function initialize()
	{
		add_filter( 'carbon_fields_save_post_start_date_value', array( &$this, 'format_save_date' ), 10, 3 );
		add_filter( 'carbon_fields_get_start_date_value', array( &$this, 'format_show_date' ) );
	}

	public function format_save_date( $value, $field, $post_id )
	{
		return Utils::convert_date_for_sql( $value );
	}

	public function format_show_date( $value )
	{
		return Utils::convert_date_human( $value );
	}

	public function register_meta_boxes()
	{
		$employees_labels = array(
			'plural_name'   => 'Imagens',
			'singular_name' => 'Imagem',
		);

		Container::make( 'post_meta', 'Custom Data' )
			->show_on_post_type( $this->name )
			->add_fields(
				array(
					Field::make( 'map', 'location' )->set_position( 37.423156, -122.084917, 14 ),
					Field::make( 'radio_image', 'custom_sidebar', 'Sidebar Customizada' )
						->add_options(
							array(
								''      => Core::plugins_url( '/assets/images/sidebar-default.png' ),
								'left'  => Core::plugins_url( '/assets/images/sidebar-left.png' ),
								'full'  => Core::plugins_url( '/assets/images/sidebar-full.png' ),
								'right' => Core::plugins_url( '/assets/images/sidebar-right.png' ),
							)
						),
					Field::make( 'complex', 'gallery', 'Galeria' )
						->setup_labels( $employees_labels )
						->set_layout( 'tabbed-horizontal' )
						->add_fields(
							array(
								Field::make( 'image', 'photo', '' )
							)
						),
				)
			);
	}
}

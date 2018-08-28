<?php

namespace RS\Resuta\Model;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Model;

class Post extends Model\Post
{
	public $metas = array(
		'location'       => array(),
		'custom_sidebar' => array(),
		'gallery'        => array(
			'type' => 'complex',
		),
	);

	const POST_TYPE = 'post';
}

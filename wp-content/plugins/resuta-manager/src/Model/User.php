<?php

namespace RS\Resuta\Model;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Model;

class User extends Model\User
{
	public $metas = array(
		'city_and_post'    => array(),
		'street'           => array(),
		'professional_exp' => array(
			'type' => 'complex',
		),
	);
}

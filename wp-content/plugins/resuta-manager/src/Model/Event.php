<?php

namespace RS\Resuta\Model;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Model;

class Event extends Model\Post
{
	public $metas = array();

	const POST_TYPE = 'gb_event';
}

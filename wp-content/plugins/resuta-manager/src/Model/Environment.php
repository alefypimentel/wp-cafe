<?php

namespace RS\Resuta\Model;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Model\Term;

class Environment extends Term
{
	public $metas = array();

	const SLUG = 'gb_environment';
}

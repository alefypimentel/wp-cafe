<?php

namespace RS\Resuta\Controller;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Controller;

class Widgets extends Controller\Widgets
{
	public $available_widgets = array(
		//'RS\Resuta\Widget\Events',
	);
}

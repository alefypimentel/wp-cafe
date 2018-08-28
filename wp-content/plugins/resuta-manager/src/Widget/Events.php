<?php

namespace RS\Resuta\Widget;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Widget\Implement_Widget;
use RS\Resuta\Model\Event;

use Carbon_Fields\Field;

class Events extends Implement_Widget
{
	public function __construct()
	{
		$this->setup( 'Eventos', 'Exibe os eventos selecionados', array(
			Field::make( 'text', 'title', 'Título' )->set_default_value( 'Eventos' ),
			Field::make( 'relationship', 'events', 'Eventos' )
				->set_post_type( Event::POST_TYPE )
				->help_text( 'Adicione e ordene os eventos desejados' ),
		));
	}
}

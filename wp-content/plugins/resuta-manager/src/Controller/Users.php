<?php

namespace RS\Resuta\Controller;

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use RESUTA\API\Controller;
use RS\Resuta\Model\User;

use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Users extends Controller\Users
{
	public function initialize()
	{
		$this->model = new User();
	}

	public function register_meta_boxes()
	{
		Container::make( 'user_meta', 'Endereço' )
			->add_fields(
				array(
					Field::make( 'text', 'city_and_post', 'Cidade e código postal' ),
					Field::make( 'text', 'street', 'Rua' ),
					Field::make( 'complex', 'professional_exp', 'Experiências profissionais' )
						->set_layout( 'tabbed-horizontal' )
						->add_fields(
							array(
								Field::make( 'text', 'company', 'Empresa' )
									->set_required( true ),
								Field::make( 'text', 'office', 'Cargo' )
									->set_required( true ),
								Field::make( 'textarea', 'activities', 'Atividades desempenhadas' )
									->set_required( true ),
							)
						)
						->set_header_template('
							<# if (company && office) { #>
								{{ company }}, {{ office }}
							<# } #>
						'),
				)
			);
	}
}

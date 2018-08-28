<?php

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

use Resuta\Core;
use Resuta\Helper\Utils;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="theme-color" content="<?php echo esc_attr( get_theme_mod( 'theme_color' ) ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<?php wp_site_icon(); ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?> style="background-image: url('https://i.redd.it/r0ad288kma8x.jpg')">

<header class="header">
	<div class="app">
		<div class="icon-logo">
			<img src="<?php echo esc_url( Utils::get_template_url() ); ?>/assets/images/logo-wp-cafe.png">
		</div>

		<h4 class="name-icon">Apiki WP Café</h4>
	</div>
</header>

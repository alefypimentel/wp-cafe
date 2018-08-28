<?php

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}

get_header();
?>
	<div class="container">

		<div class="list-windows">
			<div class="window">
				<div class="title-bar">
					<div class="title-bar-title">Hello World</div>
					<div class="title-bar-close"></div>
					<div class="title-bar-max"></div>
					<div class="title-bar-min"></div>
				</div>
				<div class="content">
					Content
				</div>
			</div>

			<div class="window">
				<div class="title-bar">
					<div class="title-bar-title">Hello World</div>
					<div class="title-bar-close"></div>
					<div class="title-bar-max"></div>
					<div class="title-bar-min"></div>
				</div>
				<div class="content">
					Content
				</div>
			</div>

			<div class="window">
				<div class="title-bar">
					<div class="title-bar-title">Hello World</div>
					<div class="title-bar-close"></div>
					<div class="title-bar-max"></div>
					<div class="title-bar-min"></div>
				</div>
				<div class="content">
					Content
				</div>
			</div>
		</div>
	</div>
<?php
get_footer();

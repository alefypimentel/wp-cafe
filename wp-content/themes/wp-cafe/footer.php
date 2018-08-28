<?php

if ( ! function_exists( 'add_action' ) ) {
	exit( 0 );
}
use Resuta\Core;
use Resuta\Helper\Utils;
?>
	<footer class="footer">
		<div class="menu-start">
			Iniciar
		</div>

		<nav class="navigation">
			<div class="nav-header">
				<div class="logo-footer">
					<img src="<?php echo esc_url( Utils::get_template_url() ); ?>/assets/images/logo-wp-cafe.png">
				</div>

				<h3 class="name-footer">Alefy Pimentel</h3>
			</div>

			<div class="nav-content">
				<div class="left-side">

				</div>
				<div class="right-side">

				</div>
			</div>
			<div class="nav-footer">
				<span class="text-off">Turn off</span>
				<div class="btn-off">
					<img src="http://www.free-icons-download.net/images/red-power-off-button-32209.png" alt="">
				</div>
			</div>
		</nav>

		<div class="bar-footer">
			<div class="time">
				<?php echo date("d/m/Y"); ?>
			</div>
		</div>
	</footer>

	<script src='js/main.js'></script>

	<?php wp_footer(); ?>
</body>
</html>

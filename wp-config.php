<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'wp-cafe');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'root');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.vauG_[y+>^0Hs]b-9cgM9//1K{vMLx$;=*SWCs$t4YBxX421&,)N}ZuD+5_=ntV');
define('SECURE_AUTH_KEY',  'ogb,Bs2,FkydmdUc.)(oAV,5_>r]3%ffrC+poNO;J*9xh;FRdc*7CTN.)+>iAMSG');
define('LOGGED_IN_KEY',    'eV*o!l5)GL,.?E:4NB>=IY)k,&n&sb!-aXwQWQ>kjql^8uiz7A6>%8rFsaBa{!^&');
define('NONCE_KEY',        'WDT0{trb{^m9i(HU_+jg[0LnTfF3QGz#B.q<P)c<3Lw-}=^3^71%/C+KT+0/x3Jj');
define('AUTH_SALT',        'mq-dK,@1EIo`G($RI/vc.d`4#7LTRUt>1&q&M8H_U0vX1{*_[;v&f^{g&/&<OM#Q');
define('SECURE_AUTH_SALT', '*]l.TQL:k`i $7mL,[2!P<8xT_/_rOu@KAHXv!awG`#r5W,*t]Zs7}2gc_ztlP[)');
define('LOGGED_IN_SALT',   'x3=N13[K(w(h)F nWu<dTaJ]#K%)_&9:ufU:cYY8|wNU4w N,/K*0tFMNu2k1`A+');
define('NONCE_SALT',       'gvxXMQRs.0XKDA?DC@7bs&o:1aJNJihDAuTTAb~Wzaoj1w|Sf.b9O,aM><?*+K<k');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');

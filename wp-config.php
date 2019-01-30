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
define('DB_HOST', '127.0.0.1');

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
define('AUTH_KEY',         '}%  ^,sa%R/$E:hX3@Vo5?_`Fwq*;=J.:<5z];xKQP<`(.IxAP>Wh7[)i|f-3onY');
define('SECURE_AUTH_KEY',  'Eil.INoK,MiMNPInEMeErr{-Qna=xdLDzldXFys%9t])i^jHix$lP~ia3svRI>Jh');
define('LOGGED_IN_KEY',    'AiB?H6fTAnkfDofsRnZ<F-p_Old`,6_}h[TkjQT>t>t}w:,Ck!+PPdF(=4TSm<_@');
define('NONCE_KEY',        '-jd?{}@vxe5 &^*3qz6(HvEp5&M]cx>S5<Bat@:vrzj*Y#0ZD|zXAM5b>1!K2ls@');
define('AUTH_SALT',        '@K:}mTBLK@f?$qmTr&W8^<0Qjhyg;`>wgohsZxE8wXR[iNsjmDv~O:X*:U}wX+yx');
define('SECURE_AUTH_SALT', 'kkK:2dfU?P%ZITA~(ARi8PH@oCB9P-rGe0=hNKh%5>k;]J72=8Oqvz1Nn{vbU.j^');
define('LOGGED_IN_SALT',   'fS pa~<-=j <>Jbl +,2d}=l[cO$-ke/zxQbuDaF<~?RpvpxsMYoQK$50s[#l6(E');
define('NONCE_SALT',       '9fOWII5f<WWZB-:oB9bC}5(0CwD=auwMm32JG|j.b)$#9+O~j*QVYWahmL&Bz5:4');

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

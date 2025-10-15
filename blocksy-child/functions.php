<?php
if (! defined('WP_DEBUG')) {
	die( 'Direct access forbidden.' );
}

add_action('wp_enqueue_scripts', function () {
    // Detectar entorno según constante definida
    $is_dev = defined('QONTERA_ENV') && QONTERA_ENV === 'dev';

    // Rutas absolutas (para filemtime)
    $css_path = get_stylesheet_directory() . '/qontera_assets/css/custom.css';
    $js_path  = get_stylesheet_directory() . '/qontera_assets/js/custom.js';

    // URLs públicas
    $css_url = get_stylesheet_directory_uri() . '/qontera_assets/css/custom.css';
    $js_url  = get_stylesheet_directory_uri() . '/qontera_assets/js/custom.js';

    // Versiones
    $css_ver = $is_dev ? filemtime($css_path) : '1.0.0';
    $js_ver  = $is_dev ? filemtime($js_path)  : '1.0.0';

    // CSS personalizado
    wp_enqueue_style(
        'qontera-custom-style',
        $css_url,
        [],
        $css_ver
    );

    // JS generado por Vite (ya incluye las librerías necesarias)
    wp_enqueue_script(
        'qontera-custom-script',
        $js_url,
        [],
        $js_ver,
        true
    );
}, 100);

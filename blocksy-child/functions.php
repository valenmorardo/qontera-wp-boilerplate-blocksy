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

    // AOS CSS
    wp_enqueue_style(
        'aos-css',
        'https://unpkg.com/aos@2.3.4/dist/aos.css',
        [],
        '2.3.4'
    );

    // Custom CSS
    wp_enqueue_style(
        'qontera-custom-style',
        $css_url,
        [],
        $css_ver
    );

    // AOS JS
    wp_enqueue_script(
        'aos-js',
        'https://unpkg.com/aos@2.3.4/dist/aos.js',
        [],
        '2.3.4',
        true
    );

    // Custom JS
    wp_enqueue_script(
        'qontera-custom-script',
        $js_url,
        ['aos-js'],
        $js_ver,
        true
    );

    // Swiper CSS
    wp_enqueue_style(
        'swiper-css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        [],
        '11.0.0'
    );

    // Swiper JS
    wp_enqueue_script(
        'swiper-js',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        [],
        '11.0.0',
        true
    );

    // GLightbox CSS
    wp_enqueue_style(
        'glightbox-css',
        'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
        [],
        '3.2.0'
    );

    // GLightbox JS
    wp_enqueue_script(
        'glightbox-js',
        'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js',
        [],
        '3.2.0',
        true
    );

}, 100);

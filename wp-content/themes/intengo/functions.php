<?php
define('THEME_DIR', get_template_directory_uri());
define('IMAGES_DIR', get_template_directory_uri().'/images/');
define('VENDOR_DIR', THEME_DIR.'/js/vendor');

remove_filter ('the_content','wpautop');
remove_filter ('the_excerpt','wpautop');
add_filter( 'show_admin_bar' , 'my_function_admin_bar');


function my_function_admin_bar(){ return false; }

//nickname, path, dependencies, version, in footer
wp_deregister_script('jquery');
wp_register_script('jquery', 'http://code.jquery.com/jquery-latest.js', null, false);
wp_register_script('shiv', THEME_DIR.'/js/shiv.js', array('jquery'), null, false);
wp_register_script('home', THEME_DIR.'/js/home.js', array('jquery','shiv'), '', false);
wp_register_script('global', THEME_DIR.'/js/global.js', array('jquery','shiv'), null, false);
wp_register_script('parallax', THEME_DIR.'/js/parallax.js', array('jquery'), null, false);
wp_register_script('scrollTo', VENDOR_DIR.'/jquery.scrollTo/jquery.scrollTo.js', array('jquery'), null, false);
wp_register_script('localScroll', VENDOR_DIR.'/jquery.localScroll/jquery.localScroll.js', array('jquery','scrollTo'), '', false);

wp_enqueue_script('jquery');
wp_enqueue_script('localScroll');
wp_enqueue_script('home');
wp_enqueue_script('parallax');
wp_enqueue_script('global');

#Shortcodes
function get_theme_dir(){
	$dir = get_bloginfo('stylesheet_directory').'/';
	return $dir;
}
add_shortcode('get_theme_dir', 'get_theme_dir');
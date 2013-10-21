<?php
/**
 * Template Name: No Header
 *
 **/
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="ie6"> <![endif]-->
<!--[if IE 7]><html class="ie7"> <![endif]-->
<!--[if IE 8]><html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html><!--<![endif]-->
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta name="viewport" content="initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="all">
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="http://gointengo.com/wp-content/themes/intengo/js/shiv.js"></script>
	<?php wp_head(); ?>
</head>
<body <?php body_class();?>>
<?php
	if( have_posts() ) : while ( have_posts() ) : the_post();
		the_content();
	endwhile; endif;
get_footer(); ?>
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
	<?php wp_head();?>
</head>
<body <?php body_class();?>>
<!-- <div id="pageWrapper"> -->
	<div id="headerWrapper">
		<header class="clearfix">
			<div class="inner">
				<a href="<?php bloginfo('url'); ?>">
					<img src="<?php echo IMAGES_DIR; ?>/logo.png" id="logo" />
				</a>
				<a href="#" id="navControl" class="clearfix">
					<div class="one">▔</div>
					<div class="two">▔</div>
					<div class="three">▔</div>
				</a>
				<ul id="nav" class="clearfix">
					<li id="home">
						<a href="http://gointengo.com/home">Home</a>
						<span class="seperator"></span>
						<ul class="sub-nav">
							<li><a href="http://gointengo.com/home#block1">Superior Prediction Markets</a></li>
							<li><a href="http://gointengo.com/home#cta-home1">Get Inspired</a></li>
						</ul>
					</li>
					<li id="solutions">
						<span class="seperator"></span>
						<a href="http://gointengo.com/solutions">Solutions</a>
						<ul class="sub-nav">
							<li><a href="http://gointengo.com/solutions#cta-solutions1">Product Concepts</a></li>
							<li><a href="http://gointengo.com/solutions#cta-solutions2">Brand Positioning &amp; Creative</a></li>
						</ul>
					</li>
					<li id="methodology">
						<span class="seperator"></span>
						<a href="http://gointengo.com/methodology">Methodology</a>
						<ul class="sub-nav">
							<li><a href="http://gointengo.com/methodology#parallax1">Premise</a></li>
							<li><a href="http://gointengo.com/methodology#cta-methodology1">How It Works</a></li>
							<li><a href="http://gointengo.com/methodology#cta-methodology2">A pure approach</a></li>
							<li><a href="http://gointengo.com/methodology#cta-methodology3">Recruiting Participants</a></li>
							<li><a href="http://gointengo.com/methodology#cta-methodology4">Confidentiality</a></li>
						</ul>
					</li>
					<li id="case-study">
						<span class="seperator"></span>
						<a href="http://gointengo.com/case-study">Case Study</a>
						<ul class="sub-nav">
							<li><a href="http://gointengo.com/case-study#parallax1">Two Paths For Screening</a></li>
							<li><a href="http://gointengo.com/case-study#infographic">The Big Picture</a></li>
						</ul>
					</li>
					<li id="about" class="hidden">
						<a href="http://gointengo.com/about">About</a>
					</li>
					<li id="contactUs" class="hidden">
						<a href="http://gointengo.com/contact-us">Contact Us</a>
					</li>
				</ul>
			</div>
		</header>
	</div><!-- #headerWrapper -->

	<div id="nav2" class="wrapper">
		<div id="secondaryNav">
			<ul id="socialIcons">
				<li><a href="https://www.facebook.com/intengo">&nbsp;</a></li>
				<li><a href="http://www.twitter.com/gointengo">&nbsp;</a></li>
				<li><a href="http://www.youtube.com/channel/UCNAfn8gqP5poB8q9HkJmpNw">&nbsp;</a></li>
				<li class="last"><a href="http://www.linkedin.com/company/intengo">&nbsp;</a></li>
			</ul>
			<a href="http://gointengo.com/about" id="about"></a>
			<a href="http://gointengo.com/contact-us" id="contact-us"></a>
			<p class="tagline">Explore Your Possibilities</p>
			<p class="phone">855.844.3172</p>
		</div>
	</div>
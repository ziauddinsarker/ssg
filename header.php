<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
	<?php if (is_search()) { ?>
	   <meta name="robots" content="noindex, nofollow" /> 
	<?php } ?>
	
    <title>
		   <?php
		      if (function_exists('is_tag') && is_tag()) {
		         single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
		      elseif (is_archive()) {
		         wp_title(''); echo ' Archive - '; }
		      elseif (is_search()) {
		         echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
		      elseif (!(is_404()) && (is_single()) || (is_page())) {
		         wp_title(''); echo ' - '; }
		      elseif (is_404()) {
		         echo 'Not Found - '; }
		      if (is_home()) {
		         bloginfo('name'); echo ' - '; bloginfo('description'); }
		      else {
		          bloginfo('name'); }
		      if ($paged>1) {
		         echo ' - page '. $paged; }
		   ?>
	</title>
	
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.ico">
	
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php if ( is_singular() ) wp_enqueue_script('comment-reply'); ?>

	<?php wp_head(); ?>
	
</head>

<?php if (is_single()){
	$body_cls = "post";	
}else{
	$body_cls = "main";
}?>

<body <?php body_class($body_cls); ?>>
    <div id="fb-root"></div>
    <div id="wrapper">
        <div class="page">
            <header>
                <a class="bookmark" href="#">Bookmark This PAGE</a>
                <nav class="header_nav">
                    <ul class="social_header">
                        <li>
                            <a href="http://www.facebook.com/sammisweetheart" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                        </li>
                        <li>
                            <a href="http://twitter.com/SammiSweetheart" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                        </li>
                        <li>
                            <a href="http://instagram.com/sammisweetheart" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>
                        </li>
                    </ul>
                    <div class="clear"></div>
                    <div class="logo">
                        <a href="<?php bloginfo('url'); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/images/heartslogogrey.png" alt="" height="100" width="100"></a>
                    </div>
                </nav>

            </header>
            <nav class="menu_main">
				<?php
					$defaults = array(
						'theme_location'  => 'header',
						'menu'            => '',
						'container'       => 'div',
						'container_class' => '',
						'container_id'    => 'cssmenu',
						'menu_class'      => 'menu',
						'menu_id'         => '',
						'echo'            => true,
						'fallback_cb'     => 'wp_page_menu',
						'before'          => '',
						'after'           => '',
						'link_before'     => '',
						'link_after'      => '',
						'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s<li class="search">
								<form action="http://blog.parishilton.com/search" method="get">
									<i id="search_submit" class="fa fa-search icon-search"></i>
									<input type="text" name="query" class="input-search" placeholder="SEARCH..." />
								</form>
							</li></ul>',
						'depth'           => 0,
						'walker'          => ''
					);

					wp_nav_menu( $defaults );
					?>			
            </nav>
			
			
			
			
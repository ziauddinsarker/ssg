<?php
	
	// Add RSS links to <head> section
	automatic_feed_links();
	
	// Load jQuery
	if ( !is_admin() ) {
	   wp_deregister_script('jquery');
	   wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false);
	   wp_enqueue_script('jquery');
	}
	
	// Clean up the <head>
	function removeHeadLinks() {
    	remove_action('wp_head', 'rsd_link');
    	remove_action('wp_head', 'wlwmanifest_link');
    }
    add_action('init', 'removeHeadLinks');
    remove_action('wp_head', 'wp_generator');
    
	/* ------------------------------------------------------------------------ */
	/* Define Sidebars */
	/* ------------------------------------------------------------------------ */
	
	// Declare sidebar widget zone
		if (function_exists('register_sidebar')) {
		
		/* ------------------------------------------------------------------------ */
		/* Blog Widgets */
	
		register_sidebar(array(
			'name' => __('Right Sidebar','wash' ),
			'id'   => 'right-sidebar',
			'description'   => __( 'These are widgets for the Right sidebar post sidebar.','wash' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s widget__sidebar">',
			'after_widget'  => '</div>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>'
		));
		
		register_sidebar(array(
			'name' => 'Left Sidebar',
			'id'   => 'left-sidebar',
			'description'   => 'These are widgets for the Left Sidebar.',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2>',
			'after_title'   => '</h2>'
		));

	}

	
	/* Navigation Menu*/
	if ( ! function_exists( 'register_wash_menus' ) ) {

	// Register Navigation Menus
	function register_wash_menus() {

		$locations = array(
			'header' => __( 'Header Menu', 'wash' ),
			'footer' => __( 'Footer Menu', 'wash' ),
		);
		register_nav_menus( $locations );

	}

	// Hook into the 'init' action
	add_action( 'init', 'register_wash_menus' );

	}
		
	/* ------------------------------------------------------------------------ */
	/* Post Thumbnails */
	add_theme_support( 'post-thumbnails' );
	/*  Image thumbnail sizes
	/* ------------------------------------ */
	function wash_thumbnail_setup()
	{
		add_image_size( 'thumb-sidebar', 600, 170); // Hard crop to exact dimensions (crops sides or top and bottom)
	}
	add_action( 'after_setup_theme', 'wash_thumbnail_setup' );
	
	
	function wpb_set_post_views($postID) {
		$count_key = 'wpb_post_views_count';
		$count = get_post_meta($postID, $count_key, true);
		if($count==''){
			$count = 0;
			delete_post_meta($postID, $count_key);
			add_post_meta($postID, $count_key, '0');
		}else{
			$count++;
			update_post_meta($postID, $count_key, $count);
		}
	}
	//To keep the count accurate, lets get rid of prefetching
	remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

	
	function wpb_get_post_views($postID){
		$count_key = 'wpb_post_views_count';
		$count = get_post_meta($postID, $count_key, true);
		if($count==''){
			delete_post_meta($postID, $count_key);
			add_post_meta($postID, $count_key, '0');
			return "0 View";
		}
		return $count.' Views';
	}
	
	
	function mr_css_and_js_for_slider() {
		wp_enqueue_style( 'nivoslidercss', get_template_directory_uri() . '/css/nivo-slider.css', '', null );
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'nivosliderjs', get_template_directory_uri() . '/js/jquery.nivo.slider.pack.js', array('jquery'), null, true );
	}
	 
	add_action( 'wp_enqueue_scripts', 'mr_css_and_js_for_slider' );
	
	add_image_size( 'mrslider', 640, 480, true ); 
	
	
	
	
	function revconcept_get_images($post_id) {
    global $post;
 
     $thumbnail_ID = get_post_thumbnail_id();
 
     $images = get_children( array('post_parent' => $post_id, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => 'ASC', 'orderby' => 'menu_order ID') );
 
     if ($images) :
 
         foreach ($images as $attachment_id => $image) :
 
         if ( $image->ID != $thumbnail_ID ) :
 
             $img_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true); //alt
             if ($img_alt == '') : $img_alt = $image->post_title; endif;
 
             $big_array = image_downsize( $image->ID, 'large' );
             $img_url = $big_array[0];
 
             echo '<li>';
             echo '<img src="';
             echo $img_url;
             echo '" alt="';
             echo $img_alt;
             echo '" />';
             echo '</li><!--end slide-->';
 
     endif; endforeach; endif; }
?>
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
	
	
	function mr_css_and_js_for_slider() {
		wp_enqueue_style( 'nivoslidercss', get_template_directory_uri() . '/css/nivo-slider.css', '', null );
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'nivosliderjs', get_template_directory_uri() . '/js/jquery.nivo.slider.pack.js', array('jquery'), null, true );
	}
	 
	add_action( 'wp_enqueue_scripts', 'mr_css_and_js_for_slider' );
	
	add_image_size( 'mrslider', 640, 480, true ); 
	
	
		
?>
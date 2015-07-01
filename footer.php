        </div>
        <div class="page">
            <footer>
			  <nav class="menu_main">
				
                    <?php
					$defaults = array(
						'theme_location'  => 'footer',
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
								<form action="#" method="get">
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
                <div class="border_bottom_white"></div>
                <div class="subscribe">
                    <div>
                        <form action="#" method="post" id="subForm">
                            <p class="inp_txt">join our mailing list</p>
                            <input id="fieldName" name="cm-name" type="text" class="input_reg" placeholder="Name" />
                            <input id="fieldEmail" name="cm-zlkxl-zlkxl" type="email" class="input_reg" required placeholder="Email" />
                            <input type="submit" class="input_smbit" value="Submit">
                        </form>
                    </div>
                </div>
                <ul class="social_footer">
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
                <p class="center copyright_text">&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?></p>
            </footer>
        </div>
    </div>
    <!--End of Wrapper-->
	
    <script async src="<?php echo get_template_directory_uri(); ?>/js/mains.js"></script>
	
	<script type="text/javascript">
		/* $(window).load(function() {	
			$('#slides').nivoSlider({
				effect: 'random',               // slider effects 'fold, fade, sliceDown, sliceDownLeft, sliceUp, sliceUpLeft, sliceUpDown, sliceUpDownLeft, slideInRight, slideInLeft'
				animSpeed: 500,                 // transition speed
				pauseTime: 3000,                // how long each slide will show
				directionNav: true,             // Next & Prev navigation
				controlNav: true,               // 1,2,3... navigation
				pauseOnHover: true,             // stop animation while hovering
				manualAdvance: false,           // force manual transitions
				prevText: 'Prev',               // Prev directionNav text
				nextText: 'Next',               // Next directionNav text
				randomStart: false            // start on a random slide
			});
		});
 */
		</script>

		
		<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    

			

    <script>
     /* // Inject YouTube API script
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		var player;

		function onYouTubePlayerAPIReady() {
		  // create the global player from the specific iframe (#video)
		  player = new YT.Player('yt0', {
			events: {
			  // call this function when player is ready to use
			  'onReady': onPlayerReady
			}
		  });
		}
		
		function onPlayerReady(event) {
  
		  // bind events
		  var playButton = document.getElementById("play-button");
		  playButton.addEventListener("click", function() {
			player.playVideo();
		  });
		  
		  var pauseButton = document.getElementById("pause-button");
		  pauseButton.addEventListener("click", function() {
			player.pauseVideo();
		  });
		  
		}

 */
 
 
 </script>
 







</body>

</html>
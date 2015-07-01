<?php get_header(); ?>
<section class="bg_white2">
                <div class="padd_content">
				<?php get_sidebar('right-sidebar'); ?>
				
				
				
				
	<?php if (have_posts()) : while (have_posts()) : the_post(wpb_get_post_views(get_the_ID())); ?>
	 
		<div class=" post">
                        <div>
						<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
								<div id="player"></div>

								<script>
									var tag = document.createElement('script');

									tag.src = "https://www.youtube.com/iframe_api";
									var firstScriptTag = document.getElementsByTagName('script')[0];
									firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

									var player;
									function onYouTubeIframeAPIReady() {
										player = new YT.Player('player', { // "player" id of youtube player container where video comes using youtube iframe api.
											height: '390',
											width: '640',
											videoId: 'M7lc1UVf-VE',
											events: {
												'onReady': onPlayerReady, // on ready event below callback function "onPlayerReady" will be called.
											}
										});
									}

									function onPlayerReady(event) { // as youtube player will ready
										$('#play_vid').click(function() {  // it will wait to click on overlay/image
											event.target.playVideo();  // as overlay image clicked video plays.
										});
									}

									$(document).ready(function() {
										$('#player').hide(); // on document ready youtube player will be hiden.
										$('#play_vid').click(function() {  // as user click on overlay image.
											$('#player').show();    // player will be visible to user 
											$('#play_vid').hide(); // and overlay image will be hidden.
										});
									});
								</script>

								<div id="player"></div> <!-- Youtube player container -->
								<img id="play_vid" src="YOUR_IMAGE_PATH" /> <!-- overlay image that comes in front of youtube video. when user click on this, image will be hidden and video plays using youtube api.-->

							
                            <h1><?php the_title(); ?></h1>
							<?php next_post_link( '<strong>%link</strong>' ); ?>
                            <div class="clear"></div>

                            <div class="social_content">
                                <p class="txt_social">
									<?php the_category(', '); ?>		
                                </p>

                                <ul class="social_">
                                    <li>
                                        <a href="http://www.facebook.com/" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                    </li>
                                    <li>
                                        <a href="http://twitter.com/" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                    </li>
                                    <li>
                                        <a href="http://instagram.com/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>
                                    </li>
                                </ul>
                            </div>
							
							
                            <div class="date_content">
                                <span class="data_txt data_txt-right"><?php the_time('F j, Y') ?> </span>
                                <div class="clear"></div>

                            </div>
							
                            <div class="clear"></div>
							
                            <div class="section_social">
                                <div>

                                

                                    <?php the_content(); ?>
                                </div>
											
                                <div class="social_share_btn social_share_btn-top">
                                    <a class="btn-facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>">
                                        <i class="fa fa-facebook-official fa-lg btn-upp"></i><span>SHARE THIS VIDEO</span>
                                    </a>
                                    <div class="like_btn btn-upp">
                                        <span>LIKE THIS VIDEO</span>
                                        <div class="fb-like" data-href="//www.facebook.com/" data-width="20" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
                                    </div>
                                </div>
								
								<section>
									<?php
									// Get the video URL and put it in the $video variable
									$videoID = get_post_meta($post->ID, 'video', true);
									// Check if there is in fact a video URL
									if ($videoID) {
										echo '<figure class="embed">';
										// Echo the embed code via oEmbed
										echo wp_oembed_get( $videoID ); 
										echo '</figure>';
									}
									?>
								</section>
					


								
								
                                <div class="social_share_btn social_share_btn-bot">
                                    <a class="btn-facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>">
                                        <i class="fa fa-facebook-official fa-lg btn-upp"></i><span>SHARE THIS VIDEO</span>
                                    </a>
                                   
									<?php
									$next_post = get_adjacent_post(false, '', false);
										if(!empty($next_post)) {
										echo '<a type="button" class="btn_sml btn_lrg" href="' . get_permalink($next_post->ID) . '" title="' . $next_post->post_title . '"><strong>Next Article</strong></a>'; }
									?>
                                </div>
                            </div>
								

                            <div class="postbox">
                               
                                <div class="fb-comments" data-href="<?php the_permalink(); ?>" data-numposts="5" data-colorscheme="light" data-width="100%"></div>

                            </div>
							
							
							<?php endwhile; endif; ?>
                            <div class="clear"></div>
                            <h3 class="title">- RECOMMENDED -</h3>
                            <div>
							
							<?php
								$tags = wp_get_post_tags($post->ID);
								if ($tags) {
								$tag_ids = array();
								foreach($tags as $individual_tag) $tag_ids[] = $individual_tag->term_id;
								 
								$args=array(
								'tag__in' => $tag_ids,
								'post__not_in' => array($post->ID),
								'showposts'=>4,  // Number of related posts that will be shown.
								'caller_get_posts'=>1
								);
								 
								$my_query = new wp_query($args);
								if( $my_query->have_posts() ) {
								//echo '<div id="relatedposts"><h3>Related Posts</h3><ul>';
								while ($my_query->have_posts()) {
								$my_query->the_post();
								?>
								  
								<?php
								if ( has_post_thumbnail() ) { ?>
								
								  <div class="col_2 rec_cnt  gall_item">
                                    <div>
                                        <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail(); ?></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span><?php the_title_attribute(); ?></span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="<?php the_permalink() ?>">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh"><?php the_category(', '); ?></p>
                                </div>							
								<?php } else { ?>
									<div class="col_2 rec_cnt  gall_item">
										<div>

											<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail(); ?></a>
										</div>
										<div class="left col_btm">
											<h4 class="dots"><span><?php the_title_attribute(); ?></span></h4>
										</div>
										<div class="btn right">
											<a href="<?php the_permalink() ?>">read more</a>
										</div>
										<div class="clear"></div>
										<p class="txt_fsh">

											<a href="category/all-the-rage.html">All The Rage</a> ,

											<a href="category/fashion---beauty.html">Fashion & Beauty</a>


										</p>
									</div>	
								<?php }
								?>
								  
								<?php
								}
								//echo '</ul>';
								}
								}
								$post = $backup;
								wp_reset_query();
								?>

                            </div>
                        </div>
						
                    </div>
						
					 </div>
					
            </section>
			
            <dialog>
                <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="" />
                <h2>Thank you for watching!</h2>
                <ul>
                    <li>
                        <a href="#" class="replay"><img src="<?php echo get_template_directory_uri(); ?>/images/replay.png" /> Play again!</a>
                    </li>
                    <li>
                       
						<?php
						$next_post = get_adjacent_post(false, '', false);
							if(!empty($next_post)) {
							echo '<a  href="' . get_permalink($next_post->ID) . '" title="' . $next_post->post_title . '"><img src="' . get_template_directory_uri() . '/images/next.png" />Next story!</a>'; }
						?>
                    </li>
					
					
					
					
                </ul>
                <div class="cf"></div>
                <a class="btn-facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>">
                    <i class="fa fa-facebook-official fa-lg btn-upp"></i><span>SHARE THIS VIDEO</span>
                </a>
                <svg>
                    <filter>
                        <feGaussianBlur stdDeviation="2" />
                    </filter>
                </svg>
            </dialog>
			


<?php get_footer(); ?>
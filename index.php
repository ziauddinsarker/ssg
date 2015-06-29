<?php get_header(); ?>
 <img src="<?php echo get_template_directory_uri(); ?>/images/samheader1.jpg" alt="" class="top-img">
            <div class="bg_white">
			
			<!-- Spotlight -->
                <banner>
                    <aside class="col-inline">
                        <h3 class="title">- spotlight -</h3>
                        <h2><a href="fuller-lips-in-a-snap-at-home-and-for-less-than-a-few-bucks--genius-.html">Fuller Lips In A Snap, At Home and for Less Than a Few Bucks! GENIUS!</a></h2>
                        <p class="text_right">Everyone wants fuller lips, even if it’s just for a minute. They’re full of cute!</p>
                        <div class="border_bottom"></div>
                        <span class="data_txt">Posted June 22, 2015</span>
                        <span class="span_txt">
                            <a href="all-the-rage.html">All The Rage,</a> 
                            <a href="fashion---beauty.html">Fashion & Beauty</a>
                    </span>
                        <div class="clear"></div>
                        <div class="see_more_btn">
                            <a href="fuller-lips-in-a-snap-at-home-and-for-less-than-a-few-bucks--genius-.html">See more</a>
                        </div>
                    </aside>

                    <figure class="col_left feed-page margin_top_25" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/22/lips%20FEAT%20IMG_720x376.jpg')">
                        <a href="fuller-lips-in-a-snap-at-home-and-for-less-than-a-few-bucks--genius-.html"><img src="<?php echo get_template_directory_uri(); ?>/images/sp1.png" alt="spacer" /></a>
                    </figure>
                </banner>
			<!-- Spotlight -->
			
                <div class="clear"></div>
                <div class="border_bottom"></div>

                <?php get_sidebar('left-sidebar'); ?>
				
                <div class="latest-posts">
                    <div>
                        <h3 class="title">- LATEST POSTS -</h3>
						
						
						<?php if (have_posts()) : ?>
							<?php $count = 0; ?>
							<?php while (have_posts()) : the_post(); ?>
							
							
							
							
							<?php $count++; ?>
							  <?php if ($count == 2) : ?>
									 <div class="col_55 col_ item0">
											<div class="img_banner" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/28/swimsuitfeature_600x314.jpg')">
												<?php if ( has_post_thumbnail() ) : ?>
													<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
													<?php the_post_thumbnail(); ?>
													</a>
												<?php endif; ?> 
											</div>

											<div class="btn right">
												<a href="<?php the_permalink(); ?>">read more</a>
											</div>
											<div class="left col_btm">
												<h4 class="dots"><a href="<?php the_permalink(); ?>"><span><?php the_title(); ?></span></a></h4>

											</div>
											<div class="clear"></div>
											<p class="txt_fsh">
											   <?php the_category(', '); ?>
											</p>
										</div>
							   <?php else : ?>
									 <div class="col_40 col_ item1">
										<div class="img_banner" style="background-image:url('<?php echo get_template_directory_uri(); ?>/images/27/momsonFEATIMG_600x314.jpg')">
											<?php if ( has_post_thumbnail() ) : ?>
													<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
													<?php the_post_thumbnail(); ?>
													</a>
												<?php endif; ?> 
										</div>

										<div class="btn right">
											<a href="<?php the_permalink(); ?>">read more</a>
										</div>

										<div class="left col_btm">
											<h4 class="dots"><a href="<?php the_permalink(); ?>"><span><?php the_title_attribute(); ?></span></a></h4>

										</div>

										<div class="clear"></div>
										<p class="txt_fsh">
											<?php the_category(', '); ?>
										</p>
									</div>
									<span class="clear"></span>
									
							  <?php endif;  endwhile; ?>
							<?php endif; ?>
													
						


                    </div>

                </div>
            </div>
			
<?php get_footer(); ?>
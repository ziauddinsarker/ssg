<?php get_header(); ?>
 <img src="<?php echo get_template_directory_uri(); ?>/images/samheader1.jpg" alt="" class="top-img">
            <div class="bg_white">
			
			
			
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
							  <?php if ($count == ($count % 2 == 0)) {?>
									 <div class="col_55 col_ item0">											
							  <?php }else{?>
									 <div class="col_40 col_ item1">										
									
							  <?php }?>
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
									  <?php if ($count == ($count % 2 == 0)) {?>
										<span class="clear"></span>									
										<?php } ?>
							  
							  <?php endwhile; ?>
							<?php endif; ?>
								
                    </div>

                </div>
            </div>
			
<?php get_footer(); ?>
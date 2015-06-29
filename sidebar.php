<aside class="col-inline">
        <!-- All this stuff in here only shows up if you DON'T have any widgets active in this zone -->
    
                        <section class="section_instagram center carousel">
                            <h3 class="title">- POPULAR -</h3>
						        <div class="window">
                                <ul class="clr">

								<?php 
									$popularpost = new WP_Query( array( 'posts_per_page' => 4, 'meta_key' => 'wpb_post_views_count', 'orderby' => 'meta_value_num', 'order' => 'DESC'  ) );
									while ( $popularpost->have_posts() ) : $popularpost->the_post();
								?>
									<li>
										<div class="right-block-inner">
											<?php if ( has_post_thumbnail() ) : ?>
												<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
												<?php the_post_thumbnail(); ?>
												</a>
											<?php endif; ?> 
											<h4 class="dots right-title"><a href="<?php the_permalink(); ?>"><span><?php the_title(); ?> </span></a></h4>
											<div class="read-more">
												<a href="<?php the_permalink(); ?>">Read more</a>
											</div>
										</div>
									</li>
									<?php
										endwhile;
									?>
								
								
								
								
								<?php /*
									$args = array( 'numberposts' => 4, 'order'=> 'ASC', 'orderby' => 'title' );
									$postslist = get_posts( $args );
									foreach ($postslist as $post) :  setup_postdata($post); ?> 
																	
											<li>
												<div class="right-block-inner">
													<?php if ( has_post_thumbnail() ) : ?>
														<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
														<?php the_post_thumbnail(); ?>
														</a>
													<?php endif; ?> 
													<h4 class="dots right-title"><a href="<?php the_permalink(); ?>"><span><?php the_title(); ?> </span></a></h4>
													<div class="read-more">
														<a href="<?php the_permalink(); ?>">Read more</a>
													</div>
												</div>
											</li>
									<?php endforeach; */?>
																	
								
								
					

                                   
                                    
                                </ul>
                            </div>
                        </section>
                        <div class="follow-block">
                            <div class="follow-block-inner">
                                <h3>Follow Paris On SOCIAL MEDIA</h3>
                                <ul class="social">
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

                        </div>


</aside>
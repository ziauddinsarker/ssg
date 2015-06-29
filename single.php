<?php get_header(); ?>
<section class="bg_white2">
                <div class="padd_content">
				<?php get_sidebar('right-sidebar'); ?>
				
				
				
				
	<?php if (have_posts()) : while (have_posts(wpb_get_post_views(get_the_ID()))) : the_post(); ?>
	 
		<div class=" post">
                        <div>
                            <h1><?php the_title(); ?></h1>
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

                                    <div class="gAd">
                                        <script type="text/JavaScript">var OmniPid = '3106';var OmniRC = '';var OmniAd = null;var OmniHttp = null;OmniHttp = new XMLHttpRequest();OmniHttp.open( "GET.html", "http://serve.omni-ads.com/?pid=" + OmniPid + "&rc=" + OmniRC, false );OmniHttp.send( null );OmniAd = OmniHttp.responseText;document.write(OmniAd);</script>
                                    </div>

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


                                <div class="social_share_btn social_share_btn-bot">
                                    <a class="btn-facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=http://blog.parishilton.com/paris-hilton-showcases-several-high-fashion-looks-at-this-year-s-cannes">
                                        <i class="fa fa-facebook-official fa-lg btn-upp"></i><span>SHARE THIS VIDEO</span>
                                    </a>
                                    <a type="button" class="btn_sml btn_lrg" href="paris-really-can-do-it-all-her-hot-new-music-video-has-the-industry-talking.html">next</a>
                                </div>
                            </div>

                            <div class="postbox">

                                <script type="text/JavaScript">var OmniPid = '3107';var OmniRC = '';var OmniAd = null;var OmniHttp = null;OmniHttp = new XMLHttpRequest();OmniHttp.open( "GET.html", "http://serve.omni-ads.com/?pid=" + OmniPid + "&rc=" + OmniRC, false );OmniHttp.send( null );OmniAd = OmniHttp.responseText;document.write(OmniAd);</script>

                                <div class="fb-comments" data-href="http://blog.parishilton.com/paris-hilton-showcases-several-high-fashion-looks-at-this-year-s-cannes" data-numposts="5" data-colorscheme="light" data-width="100%"></div>

                            </div>
                            <div class="clear"></div>
                            <h3 class="title">- RECOMMENDED -</h3>
                            <div>

                                <div class="col_2 rec_cnt  gall_item">
                                    <div>

                                        <a href="fuller-lips-in-a-snap-at-home-and-for-less-than-a-few-bucks--genius-.html"><img alt="Fuller Lips In A Snap, At Home and for Less Than a Few Bucks! GENIUS!" src="images/22/lips%20FEAT%20IMG_600x314.jpg" /></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span>Fuller Lips In A Snap, At Home and for Less Than a Few Bucks! GENIUS!</span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="fuller-lips-in-a-snap-at-home-and-for-less-than-a-few-bucks--genius-.html">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh">

                                        <a href="category/all-the-rage.html">All The Rage</a> ,

                                        <a href="category/fashion---beauty.html">Fashion & Beauty</a>


                                    </p>
                                </div>

                                <div class="col_2 rec_cnt  gall_item">
                                    <div>

                                        <a href="adam-scissorhands--saaks-takes-this-boring-black-bikini-to-the-cutting-edge.html"><img alt="Adam 'Scissorhands' Saaks Takes This Boring Black Bikini To The Cutting Edge" src="images/28/swimsuitfeature_600x314.jpg" /></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span>Adam 'Scissorhands' Saaks Takes This Boring Black Bikini To The Cutting Edge</span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="adam-scissorhands--saaks-takes-this-boring-black-bikini-to-the-cutting-edge.html">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh">

                                        <a href="category/fashion---beauty.html">Fashion & Beauty</a> ,

                                        <a href="category/get-inspired.html">Get Inspired</a>


                                    </p>
                                </div>

                                <div class="col_2 rec_cnt  gall_item">
                                    <div>

                                        <a href="epic-surprise-from-son-to-mom.html"><img alt="Epic Surprise from Son to Mom" src="<?php echo get_template_directory_uri(); ?>/images/27/momsonFEATIMG_600x314.jpg" /></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span>Epic Surprise from Son to Mom</span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="epic-surprise-from-son-to-mom.html">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh">

                                        <a href="category/get-inspired.html">Get Inspired</a>


                                    </p>
                                </div>

                                <div class="col_2 rec_cnt  gall_item">
                                    <div>

                                        <a href="these-are-too-easy-and-totally-genius-number-three-is-definitely-one-to-remember-.html"><img alt="These Are Too Easy And Totally Genius! Number Three Is Definitely One To Remember!" src="<?php echo get_template_directory_uri(); ?>/images/26/cover102_600x314.jpg" /></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span>These Are Too Easy And Totally Genius! Number Three Is Definitely One To Remember!</span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="these-are-too-easy-and-totally-genius-number-three-is-definitely-one-to-remember-.html">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh">

                                        <a href="category/get-inspired.html">Get Inspired</a>


                                    </p>
                                </div>

                                <div class="col_2 rec_cnt  gall_item">
                                    <div>

                                        <a href="paris-is-going-to-rock-it-as-dj-at-summerfest-.html"><img alt="Paris Is Going To Rock It As DJ At Summerfest!" src="<?php echo get_template_directory_uri(); ?>/images/42/ParisDJ_600x314.jpg" /></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span>Paris Is Going To Rock It As DJ At Summerfest!</span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="paris-is-going-to-rock-it-as-dj-at-summerfest-.html">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh">

                                        <a href="category/all-the-rage.html">All The Rage</a> ,

                                        <a href="category/get-inspired.html">Get Inspired</a> ,

                                        <a href="category/the-sound.html">The Sound</a>


                                    </p>
                                </div>

                                <div class="col_2 rec_cnt  gall_item">
                                    <div>

                                        <a href="this-beauty-hack-is-genius-.html"><img alt="This Beauty Hack Is GENIUS! " src="<?php echo get_template_directory_uri(); ?>/images/13/red%20lipstick%20feature_600x314.jpg" /></a>
                                    </div>
                                    <div class="left col_btm">
                                        <h4 class="dots"><span>This Beauty Hack Is GENIUS! </span></h4>
                                    </div>
                                    <div class="btn right">
                                        <a href="this-beauty-hack-is-genius-.html">read more</a>
                                    </div>
                                    <div class="clear"></div>
                                    <p class="txt_fsh">

                                        <a href="category/fashion---beauty.html">Fashion & Beauty</a>


                                    </p>
                                </div>

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
                        <a href="paris-really-can-do-it-all-her-hot-new-music-video-has-the-industry-talking.html"><img src="<?php echo get_template_directory_uri(); ?>/images/next.png" /> Next story!</a>
                    </li>
                </ul>
                <div class="cf"></div>
                <a class="btn-facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=http://blog.parishilton.com/paris-hilton-showcases-several-high-fashion-looks-at-this-year-s-cannes">
                    <i class="fa fa-facebook-official fa-lg btn-upp"></i><span>SHARE THIS VIDEO</span>
                </a>
                <svg>
                    <filter>
                        <feGaussianBlur stdDeviation="2" />
                    </filter>
                </svg>
            </dialog>
			
	<?php endwhile; endif; ?>

<?php get_footer(); ?>
<?php get_header(); ?>
 <div class="bg_white">
  <div class="padd_content">
		<h1>Category Archives: Featured</h1>
                    <div>
						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <div class=" post col_2 rec_cnt  gall_item" id="post-<?php the_ID(); ?>">
                            <div>
								<?php if ( has_post_thumbnail() ) : ?>
									<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
									<?php the_post_thumbnail(); ?>
									</a>
								<?php endif; ?>                               
                            </div>
                            <div class="left col_btm">
                                <h4 class="dots"><span><a href="<?php the_permalink(); ?>"><?php the_title();?></a></span></h4>
                            </div>
                            <div class="btn right">
                                <a href="<?php the_permalink(); ?>">read more</a>
                            </div>
                            <div class="clear"></div>
                            <p class="txt_fsh">
								<?php the_category(', '); ?>								
                            </p>
                        </div>
		<?php // comments_template(); ?>

		<?php endwhile; endif; ?>
	</div>
 </div>

<?php get_footer(); ?>
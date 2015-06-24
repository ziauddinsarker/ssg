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
                <div class="border_bottom_white"></div>
                <div class="subscribe">
                    <div>
                        <form action="http://email.maverick.cm/t/y/s/zlkxl/" method="post" id="subForm">
                            <p class="inp_txt">join our mailing list</p>
                            <input id="fieldName" name="cm-name" type="text" class="input_reg" placeholder="Name" />
                            <input id="fieldEmail" name="cm-zlkxl-zlkxl" type="email" class="input_reg" required placeholder="Email" />
                            <input type="submit" class="input_smbit" value="Submit">
                        </form>
                    </div>
                </div>
                <ul class="social_footer">
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
                <div class="clear"></div>
                <p class="center copyright_text">&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?></p>
            </footer>
        </div>
    </div>
    <!--End of Wrapper-->

    <script async src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

</body>

</html>
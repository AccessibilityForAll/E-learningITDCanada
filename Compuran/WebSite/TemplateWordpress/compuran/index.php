<!-- Header -->
<?php get_header() ?>
<!-- End Header -->
<!--container-post-->
<div class="containerSite">
   <!--Check if exist post-->
   <?php 
      if(have_posts()) : while(have_posts()) : the_post();
      ?>
   <!--List post-->
   <h1><?php the_title(); ?></h1>
   <!--Title post-->
   <?php the_content(); ?> <!--Content Post-->
   <?php
      endwhile;
      else:
      ?>
   <!--No post-->
   <p>No posts found!</p>
   <?php
      endif
      ?>
</div>
<!DOCTYPE html>
<html>
   <head>
      <title><?php  bloginfo('name')?> - <?php bloginfo('description') ?></title>
      <meta name="generator" content="Wordpress <?php bloginfo('version'); ?>" />
      <meta http-equiv="content-type" content="<?php bloginfo('html_type'); ?>; <?php bloginfo('charset'); ?>" />
      <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" media="all" type="text/css" />
      <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
      <link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
      <link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="<?php bloginfo('atom_url'); ?>" />
      <?php wp_head(); ?>
      <!-- Latest compiled and minified CSS Boostrap -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <!-- Google font ROBOTO-->
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
      <!-- Google font css-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
         rel="stylesheet">
      <!-- Shorts css-->
      <link rel="stylesheet" type="text/css" href="css/Shorts.lite.min.css">
   </head>
   <body>
   <!-- Include Top-->
      <div id="top">
         <div class="section">
            <div class="bar-top"></div>
            <div class="container">
               <div class="row">
                  <div class="col-md-3 col-sm-6">
                     <a href="<?php get_option('home') ?>" title="Logo Compuran"><img src="http://localhost:8080/compuran/wp-content/themes/compuran/img/logo.png" class="logo" alt="Logo Compuran"></a>
                  </div>
                  <div class="col-md-9">
                     <!-- Main Menu desktop-->
                     <ul class="list-inline main-menu hidden-sm">
                        <li>
                           <a href="<?php get_option('home') ?>" class="active" title="Home">Home</a>
                        </li>
                        <?php wp_list_pages('title_li=') ?>
                        <!--li>
                           <a href="#" class="triggermenu" title="Services">Services <i class="material-icons">keyboard_arrow_down</i></a>
                        </li>
                        <li>
                           <a href="#" title="Contact us">Contact Us</a>
                        </li>
                        <li>
                           <a href="#" title="Test">Test</a>
                        </li-->
                        <li><a href="#" title="Search"><i class="material-icons">search</i></a></li>
                     </ul>
                     <!--Trigger Menu mobile-->
                     <div class="col-sm-6 hidden-md hidden-lg">
                        <a href="#" class="triggerMenuMobile" title="Menu"><i class="material-icons">reorder</i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Main Menu mobile-->
      <!-- Include Banner-->
      <div id="banner">
         <div class="overflow">
            <div class="section containerSubMenu">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <ul class="list-inline sub-menu hidden-sm">
                           <li><a href="#" title="Network Services">Network Services</a></li>
                           <li><a href="#" title="Servers Support">Servers Support</a></li>
                           <li><a href="#" title="Security Services">Security Services</a></li>
                           <li><a href="#" title="IT Support">IT Support</a></li>
                           <li><a href="#" title="Products">Products</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="section">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <h1>Welcome to Compuran</h1>
                        <p>
                           An Information Technology(IT) development company that creates cost-effective custom solutions based on technical expertise of hardware, software & networking developers.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

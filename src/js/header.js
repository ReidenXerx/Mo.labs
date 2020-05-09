import jQuery from 'jquery';

export default function Header() {

  if(jQuery(document).width() <= 650) jQuery("#menu").hide();

  jQuery(document).ready(function() {

    if(jQuery(document).width() <= 650) jQuery(".menu").hide();

    jQuery("body").on("click", "#list", function (event) { //scroll
      event.preventDefault();
      var idhref  = jQuery(this).attr('href'),
      scrollto = jQuery(idhref).offset().top - 100;
      jQuery('body,html').animate({scrollTop: scrollto}, 1500);
    });

    jQuery("body").on("click", "#list", function (event) {
      if(jQuery(document).width() <= 650) jQuery("#menu").hide();
    });

    jQuery(".hamburger").on("click", function (event) {
      jQuery("#menu").toggle();
    });

  });

}

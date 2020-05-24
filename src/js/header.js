import jQuery from 'jquery';

export default function Header() {

  var breakpoint = document.getElementById('menu').dataset.breakpoint
  if(breakpoint === undefined) breakpoint = 1170

  window.addEventListener("resize", () =>{
    if(jQuery(document).width() <= breakpoint) jQuery("#menu").hide();
    else jQuery("#menu").show();
  });


  jQuery(document).ready(function() {

    if(jQuery(document).width() <= breakpoint) jQuery("#menu").hide();
    else jQuery("#menu").show();
    console.log(breakpoint)

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

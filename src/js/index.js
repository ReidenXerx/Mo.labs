import Header from './header.js';
import Mail from './mail.js';
import lightbox from 'lightbox2';
import Animations from './anima-config.js';
import 'owl.carousel';

Header();
Mail();
Animations();

$(document).ready(function(){
  var photos = $('#photos-carousel')
  photos.owlCarousel({
    loop: false,
    items: 1,
    dotsContainer: '#photos-dots'
  })
  $('.control_next').click(function() {
      photos.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.control_prev').click(function() {
      photos.trigger('prev.owl.carousel');
  })

  lightbox.option({
      'fadeDuration': 0,
      'imageFadeDuration': 0,
      'resizeDuration': 0
  })
});

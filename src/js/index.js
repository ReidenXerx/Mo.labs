import Header from './header.js';
import Mail from './mail.js';
import lightbox from 'lightbox2';
import Animations from './anima-config.js';
import 'owl.carousel';
import Typed from 'typed.js';

Header();
Mail();
Animations();

$(document).ready(function(){
  var photos = $('#photos-carousel')
  photos.owlCarousel({
    loop: false,
    rewind: true,
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

var options = {
  strings: ["<span class=\"red\">&lt;h2&gt;</span>we are<span class=\"red\">&lt;span</span> <span class=\"blue\">style = </span><span class=\"gray\">“color: <span class=\"color\">#5BDCDA</span> ”</span><span class=\"red\">&gt;</span>awesome.<span class=\"red\">&lt;span&gt;&lt;h2&gt;</span>"],
  typeSpeed: 80,
  loop: true
};

var typed = new Typed('#typed-output', options);

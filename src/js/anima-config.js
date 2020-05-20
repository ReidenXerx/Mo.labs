import anime from 'animejs/lib/anime.es.js';
import 'owl.carousel';
import Typed from 'typed.js';
import lightbox from 'lightbox2';

export default function Animations() {
  var arrow_elem = document.querySelector('.arrow')

  function animateArrow(scale, duration, elasticity, translate) {
    anime.remove(arrow_elem)
    anime({
      targets: arrow_elem,
      scale: scale,
      duration: duration,
      elasticity: elasticity,
      translateY: translate

    })
  }

  function enterArrow() { animateArrow(1.0, 800, 400, 20) }
  function leaveArrow() { animateArrow(1.0, 600, 300, 0) }
  arrow_elem.addEventListener('mouseenter', enterArrow, false)
  arrow_elem.addEventListener('mouseleave', leaveArrow, false)

  var deg90 = document.querySelector('.'+CSS.escape('90')+'deg')
  var deg60 = document.querySelector('.'+CSS.escape('60')+'deg')
  var deg45 = document.querySelector('.'+CSS.escape('45')+'deg')

  function animateDegree(duration, elasticity, rotate, elem) {
    anime.remove(elem)
    anime({
      targets: elem,
      duration: duration,
      elasticity: elasticity,
      rotate: rotate
    })
  }

  deg90.addEventListener('mouseenter', ()=>{
    animateDegree(800, 400, 90, deg90)
  }, false)
  deg90.addEventListener('mouseleave', ()=>{
    animateDegree(600, 300, 0, deg90)
  }, false)
  deg60.addEventListener('mouseenter', ()=>{
    animateDegree(800, 400, 60, deg60)
  }, false)
  deg60.addEventListener('mouseleave', ()=>{
    animateDegree(600, 300, 0, deg60)
  }, false)
  deg45.addEventListener('mouseenter', ()=>{
    animateDegree(800, 400, 45, deg45)
  }, false)
  deg45.addEventListener('mouseleave', ()=>{
    animateDegree(600, 300, 0, deg45)
  }, false)

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

  var awesome_arrow = document.querySelector('#text-arrow')
  var is_animated = false

  var options = {
    strings: ["<span class=\"red\">&lt;h2&gt;</span>we are<span class=\"red\">&lt;span</span> <span class=\"blue\">style = </span><span class=\"gray\">“color: <span class=\"color\">#5BDCDA</span> ”</span><span class=\"red\">&gt;</span>awesome.<span class=\"red\">&lt;span&gt;&lt;h2&gt;</span>"],
    typeSpeed: 40,
    backDelay: 1400,
    loop: true,
    onBegin: () => {
      $("#awesome").css("opacity", '0');
      $("#subawesome").css("opacity", '0');
    },
    onComplete: () => {
      $("#awesome").css("opacity", '1');
      $("#subawesome").css("opacity", '1');
      if(!is_animated) {
        is_animated = true
        anime({
          targets: awesome_arrow,
          translateY: -50,
          loop: true,
          easing: 'easeInOutSine'
        })

      }
    }
  };

  var typing = false;
  $(window).scroll(function() {
    if (detect("#slider-section") && typing == false) {
      typing = true;
      var typed = new Typed('#typed-output', options);
    }
  });

  function detect(elem) {
    var b_top = $(elem).offset().top;
    var b_bot = $(elem).offset().top + $(elem).height();
    var hght = $(window).height();
    var current = $(window).scrollTop();
    if (current > b_top - hght && current < b_bot) return true;
    else return false;
  }

}

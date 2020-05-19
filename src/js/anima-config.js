import anime from 'animejs/lib/anime.es.js';

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
}

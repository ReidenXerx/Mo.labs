function parallax(event) {
  this.querySelectorAll('.parallax').forEach(element => {
    var viewportOffset = element.getBoundingClientRect()
    var top = viewportOffset.top
    var h = document.documentElement.clientHeight
    element.style.color = "rgba(91, 220, 218, "+(h - top)/3000+")"
    console.log(top, h, (top - h)/1000)
  })

}

export default function Parallax() {
  document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener('scroll', parallax)
  })
}

function toggleBlog(element, event) {
  var paragraphContainer = element.querySelector('.p-text')
  var togglerContainer = element.querySelector('.container').querySelector('.more')
  var toggler = togglerContainer.firstElementChild
  var arrow = togglerContainer.lastElementChild
  paragraphContainer.querySelectorAll('p').forEach((p) => {
    p.classList.toggle('hidden')
  })
  if(toggler.innerHTML == 'развернуть') {
    toggler.innerHTML = 'свернуть'
    toggler.style.marginRight = '10px'
    arrow.style.transform = 'rotate(180deg)'
  }
  else {
    toggler.innerHTML = 'развернуть'
    toggler.style.marginRight = '0'
    arrow.style.transform = 'rotate(0deg)'
  }



  //this.querySelectorAll('.p-text').forEach(element => {
    //var paragraph = element.firstElementChild
    //console.log(blogData, paragraph)
    //var paragraph = element.firstElementChild
    // if(selElmnt.options[selElmnt.selectedIndex].innerHTML.length > 10) {
    //   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML.substring(0, 10)+"...";
    // }
  //})
}
function createSmallParagraph(element) {
  var length = 255;
  var paragraphContainer = element.querySelector('.p-text')
  var paragraph = paragraphContainer.firstElementChild
  var toggler = element.querySelector('.container').querySelector('.more').firstElementChild
  if(paragraphContainer.querySelectorAll.length == 1) {
    var shortParagraph = document.createElement('p')
    paragraph.classList.add('hidden')
    shortParagraph.innerHTML = paragraph.innerHTML.substring(0, length) +'...'
    paragraph.insertAdjacentElement('afterend', shortParagraph)
  }
}

function enableToggleBlog(event) {

  this.querySelectorAll('.post').forEach(element => {
    createSmallParagraph(element)
    var paragraph = element.querySelector('.p-text').firstElementChild
    var toggler = element.querySelector('.container').querySelector('.more').firstElementChild
    toggler.addEventListener('click', (event) => { toggleBlog(element) })
    //console.log(toggler)
  })
  //console.log(blogData)
}
document.addEventListener("DOMContentLoaded", enableToggleBlog)

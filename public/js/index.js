var navLinks = [].slice.call(document.querySelectorAll('header ul li a'));
var mainDiv = document.querySelector('main');
var headerElem = document.querySelector('header');
var sitePar = [].slice.call(document.querySelectorAll('.text-container p'));

let breakRegex = /\n/g;
//let siteParBreak = sitePar.filter(i => i.innerHTML.match(breakRegex));
let siteParInner = sitePar.map(i => i.innerHTML);
let siteParBreak = siteParInner.filter(i => i.match(breakRegex));
let siteParBreakLine = siteParBreak.map(i => i.replace(/\n/g, '<br />'));
// sitePar[1].innerHTML = siteParBreakLine;

for(i=0;i<navLinks.length;i++){
  navLinks[i].addEventListener('click',openLink);
}

function openLink(){
  var target = event.target.innerHTML;
  mainDiv.classList = ''
  switch(target) {
  case 'About':
    mainDiv.classList.add('about');
    break;
  case 'Home':
    mainDiv.classList.add('home');
    break;
  case 'Product':
    mainDiv.classList.add('products');
    break;
  default:
    mainDiv.classList.add('home');
  } 
}

window.addEventListener('scroll',fixedHeader);

function fixedHeader(){
  if(window.scrollY > 30){
    headerElem.classList.add('fixed')
  }else{
    headerElem.classList.remove('fixed')
  }
}

// function appearing(){
//   text.classList.add('visible');
// }

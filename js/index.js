var navLinks = [].slice.call(document.querySelectorAll('header ul li a'));
var mainDiv = document.querySelector('main');
var headerElem = document.querySelector('header');

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
  case 'Products':
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
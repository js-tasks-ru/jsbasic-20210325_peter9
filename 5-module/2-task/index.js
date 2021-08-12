function toggleText() {
  const btn = document.querySelector('.toggle-text-button') ;
  const text = document.querySelector('#text') ;

let textMagic = () => text.hidden = !text.hidden ;

btn.addEventListener('click' ,textMagic) ;

}

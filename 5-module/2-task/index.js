function toggleText() {
  const btn = document.querySelector('.toggle-text-button') ;
  const text = document.querySelector('#text') ;

let textMagic = () => text.classList.toggle('textHidden') ;

btn.addEventListener('click' ,textMagic) ;

}

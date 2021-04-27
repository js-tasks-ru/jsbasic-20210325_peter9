

function initCarousel() {
  const rightButton = document.querySelector('.carousel__arrow_right') ;
  const leftButton = document.querySelector('.carousel__arrow_left') ;
  const picture = document.querySelector('.carousel__inner') ;
  let step = 0 ;
  const maxLength = picture.children.length -1 ;
  leftButton.style.display = 'none' ;

  function nextBtn() {
    picture.style.transform += `translateX(-${picture.offsetWidth}px)`;
    step++ ;
    leftButton.style.display = ''
    if (step === maxLength ) {
      rightButton.style.display = 'none'
        }
	} 

  function prevBtn() {
    picture.style.transform += `translateX(${picture.offsetWidth}px)`;
    step-- ;
    rightButton.style.display = ''
    if (step === 0 ) {
      leftButton.style.display = 'none'
    }
}

  rightButton.addEventListener('click', nextBtn) ;

  leftButton.addEventListener('click', prevBtn)
}
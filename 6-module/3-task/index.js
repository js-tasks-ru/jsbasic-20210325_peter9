import createElement from '../../assets/lib/create-element.js';

import escapeHtml from '../../assets/lib/escape-html.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render() ;
  }

     render () {
      this.elem = createElement(`
    <div class="carousel">
     <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" 
       alt="icon">
     </div>
        <div class="carousel__arrow carousel__arrow_left" style = "display : none ">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div>      
      `
      ) ;
            
     for (let prop of this.slides) {
      this.one = `
       <div class="carousel__slide"  
           data-id="${prop.id}">
        <img src="/assets/images/carousel/${prop.image}" 
         class="carousel__img" 
         alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${prop.price.toFixed(2)}</span>
          <div class="carousel__title">${prop.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg"
             alt="icon">
          </button>
        </div>
      </div>
    `
  
    this.elem.lastElementChild.insertAdjacentHTML('beforeEnd' , this.one) ;
  }
  
  
let step = 0 ;

let productAddEvent = new CustomEvent("product-add", { 
  detail: this.slides.id , 
  bubbles: true ,
}) ;
  
function carouselBTN (event) {
  const rightButton = document.querySelector('.carousel__arrow_right') ;
  const leftButton = document.querySelector('.carousel__arrow_left') ;
  const picture = document.querySelector('.carousel__inner') ;
  const maxLength = picture.children.length -1 ;
  
    
    if(event.target.closest('.carousel__arrow_right')){
        step++ ;
        picture.style.transform += `translateX(-${picture.offsetWidth}px)`;
        leftButton.style.display = '' ;
         if (step === maxLength ) {
           rightButton.style.display = 'none' ;
         }
      } else if (event.target.closest('.carousel__arrow_left') ){
        picture.style.transform += `translateX(${picture.offsetWidth}px)`;
        step-- ;
        rightButton.style.display = ''
        if (step === 0 ) {
          leftButton.style.display = 'none' ;
        }
      } else if (event.target.closest('.carousel__button')) {
        document.querySelector('.carousel').dispatchEvent("productAddEvent") ;    
    }else {
      return ;
    }
  }
      
  this.elem.addEventListener('click' , carouselBTN);


  return this.elem ;
    

  
  }
} 
  




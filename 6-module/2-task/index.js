import createElement from '../../assets/lib/create-element.js';

import escapeHtml from '../../assets/lib/escape-html.js';

export default class ProductCard {
  constructor(product) {
  this.data = product ;
  this.render () ;
    
  } ;
  
  render() {   
    
    
    if (!this.elem) {
      this.elem = createElement(`
      <div class = "card" >
      <div class="card__top">
      <img src="/assets/images/products/${this.data.image} " class="card__image" alt="product"> 
      <span class="card__price">€${this.data.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
      <div class="card__title">${this.data.name}</div>
      <button type="button" class="card__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
      </div>
      
      </div>
      `
      )
    } 
    
    let productAddEvent = new CustomEvent("product-add", { 
      detail: this.data.id , 
      bubbles: true
    }) ;
    
    
     function btnClick(event) {
      if (event.target.closest('.card__button')) {
          document.querySelector('.card').dispatchEvent(productAddEvent) ;    
      }else {
        return ;
      }
    }
    
    this.elem.addEventListener('click' , btnClick)
    
    
    return this.elem ;
  } 
  
}


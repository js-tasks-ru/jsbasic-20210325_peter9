import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
  this.render() ;
  }
    
  
  render() {
      this.elem = createElement ( `  
      <div class="modal">
      
      <div class="modal__overlay"></div>
  
      <div class="modal__inner">
        <div class="modal__header">
          
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title">
          </h3>
        </div>
  
        <div class="modal__body">
          
        </div>
      </div>
  
    </div>
      `
      ) 
         return this.elem ;
    } ;
    

    closeEvent(event) {
      const modal = document.querySelector('.modal') ;
      if (event.target.closest('.modal__close')) {
        this.close() ;
        // document.body.classList.remove ('is-modal-open') ;
        // modal.remove() ;
        };
        if (event.code === 'Escape') {
          this.close() ;
          // document.body.classList.remove ('is-modal-open') ;
          // modal.remove() ;
       }

    }
        
    setTitle(string) {
      const title = this.elem.querySelector('.modal__title') ;
      title.innerHTML = string ;

    } ;

    setBody(html) {
      const body = this.elem.querySelector('.modal__body') ;
      body.innerHTML = html.innerHTML ;
} ;



    close () {
      const modal = document.querySelector('.modal') ;
      document.body.classList.remove ('is-modal-open') ;
      modal.remove() ;
    }

    open () {
      document.body.children[1].append( this.elem ) ;
      document.body.classList.add ('is-modal-open') ;
      document.body.addEventListener( 'click', this.closeEvent.bind(this) ) ; 
      document.addEventListener( 'keydown', this.closeEvent.bind(this) ) ;
      }



  }// class

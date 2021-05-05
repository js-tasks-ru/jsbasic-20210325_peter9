import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render() ;
  }
  ribbonItems = document.querySelector('ribbon__item') ;
    
    render() {
      this.elem = document.createElement( "div" );
      this.elem.classList = "ribbon" ;
      
      this.prevBtn = document.createElement( "button" ) ;
      this.prevBtn.classList ="ribbon__arrow ribbon__arrow_left" ;
      
      this.nextBtn = document.createElement( "button" ) ;
      this.nextBtn.classList ="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible" ;
      
      this.ribbonInner = document.createElement( "nav" ) ;
      this.ribbonInner.classList = "ribbon__inner" ;
      
      this.prevBtn.insertAdjacentHTML('beforeEnd' , '<img src="/assets/images/icons/angle-icon.svg" alt="icon"></img>') ;
      this.nextBtn.innerHTML='<img src="/assets/images/icons/angle-icon.svg" alt="icon"> '  ;

      this.elem.append(this.prevBtn) ;

      for (const {id , name} of this.categories ) {
        let item = `
        <a href="#" 
        class = "ribbon__item" 
        data-id=${id} >${name}
        </a>` ;
        
        this.ribbonInner.insertAdjacentHTML('beforeEnd' , item) ;
      }
       
      this.ribbonInner.firstElementChild.classList.add("ribbon__item_active") ;

      this.elem.append(this.ribbonInner) ;
      
      this.elem.append(this.nextBtn) ;

      
      this.elem.addEventListener('click' , this.scrollBTN.bind(this) ) ; 
      this.ribbonInner.addEventListener('scroll' , this.hideUnhideBTN.bind(this) ) ;
      this.ribbonInner.addEventListener('click' , this.ribbonSelect.bind(this) ) ;
      
    
       
       
       return this.elem ;
       
    } //render
      
      

          scrollBTN(ev) {      
      
            if (ev.target.closest('.ribbon__arrow_left')) {
              this.ribbonInner.scrollBy(-350, 0) ;
              this.nextBtn.classList.add('ribbon__arrow_visible')
            }
            
            if ( ev.target.closest('.ribbon__arrow_right') ) {
              this.ribbonInner.scrollBy(350, 0) ;
              this.prevBtn.classList.add('ribbon__arrow_visible') ;
            }
        
        }
          
          hideUnhideBTN () {
            let scrollLeft = this.ribbonInner.scrollLeft ;
            let clientWidth = this.ribbonInner.clientWidth ;
            let scrollWidth = this.ribbonInner.scrollWidth ;
            let scrollRight = scrollWidth - clientWidth - scrollLeft ;
            
            if (scrollLeft === 0){
              this.prevBtn.classList.remove('ribbon__arrow_visible') ;
            }
            
            if (scrollRight < 1 ){
              
              this.nextBtn.classList.remove('ribbon__arrow_visible') ;
            }
          } ;

          
          
          
          ribbonSelect (ev) {
            let ribbonItems = this.ribbonInner.children ;
            if (ev.target.closest('.ribbon__item') ) {
              ev.preventDefault() ;
              for (const i of ribbonItems ) {
                i.classList.remove('ribbon__item_active')  ;
              }
              console.log(ev.target) ;
              console.log(ev.target.dataset.id) ;
              ev.target.classList.toggle('ribbon__item_active') ;
              
              const ribbonSelect = new CustomEvent('ribbon-select', { 
                detail: ev.target.dataset.id, 
                bubbles: true ,
              })
              
              this.elem.dispatchEvent(ribbonSelect) ;
           }
          }
} // class
    











export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps ;
    this.value = value ;
    this.render() ;
  }
 
  render () {
    this.elem = document.createElement('div') ;
    this.elem.classList.add('slider') ;

    const startPosition = this.value*(100/(this.steps-1)) ;

    const sliderThumb = document.createElement('div') ;
    sliderThumb.classList.add('slider__thumb') ;
    sliderThumb.style.left = `${startPosition}%` ;
    
    const sliderValue = document.createElement('span') ;
    sliderValue.classList.add('slider__value') ;
    sliderValue.innerText = this.value ;
       
    const sliderProgress = document.createElement('div') ;
    sliderProgress.classList.add('slider__progress') ;
    sliderProgress.style.width = `${startPosition}%` ;


    const sliderSteps = document.createElement('div') ;
    sliderSteps.classList.add('slider__steps') ;

    for (let i=0 ; i< this.steps ;i++) {
     let steps = document.createElement('span') ;
      sliderSteps.append(steps) ;
      }

    sliderSteps.children[this.value].classList.add('slider__step-active') ;


  sliderThumb.append(sliderValue)
  this.elem.append(sliderThumb ,sliderProgress ,sliderSteps )
  

  // this.elem.addEventListener( 'click' , this.select.bind(this) ) ;
  this.elem.addEventListener( 'pointerdown' , this.select.bind(this) ) ;

  return this.elem ;
  } // render
  
  
  select(event) {
    let elem=this.elem ;
    let steps = this.elem.querySelector('.slider__steps') ;
    let sliderValue = this.elem.querySelector('.slider__value') ;
    let thumb = this.elem.querySelector('.slider__thumb') ;
    let sliderProgress  = this.elem.querySelector('.slider__progress');
    
    for (let i of steps.children) {
      i.classList.remove('slider__step-active') ;
    }    
    
    const stepsLength = steps.children.length -1 ;
    let segmentProgress =  100 / stepsLength ;
    let shiftX = event.clientX - thumb.getBoundingClientRect().left ;
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let approximateValue = leftRelative * stepsLength ;
    let currentStep = Math.round(approximateValue);
    
        
    if (event.target.closest('span') ) {
      const span =  event.target.closest('span') ;
      span.classList.add('slider__step-active') ;
      sliderValue.innerText = this.value =  currentStep ;
      thumb.style.left = `${segmentProgress*currentStep}%`;
      sliderProgress.style.width = `${segmentProgress*currentStep}%`;
      
      const sliderChange =  new CustomEvent('slider-change', { 
        detail: this.value,
        bubbles: true,
      }) ;
      
      elem.dispatchEvent (sliderChange)  ;
    } 
    else if (event.target.closest('.slider__steps')){
      const span =  event.target.children[currentStep] ;
      span.classList.add('slider__step-active') ;
      sliderValue.innerText = this.value =  currentStep ;
      thumb.style.left = `${segmentProgress*currentStep}%`;
      sliderProgress.style.width = `${segmentProgress*currentStep}%`;
      
      const sliderChange =  new CustomEvent('slider-change', { 
        detail: this.value,
        bubbles: true,
      }) ;
      
      elem.dispatchEvent (sliderChange)  ;
      
    } 
    else if (event.type ==='pointerdown') {
        event.preventDefault(); 
        
        document.addEventListener('pointermove', pointerMove);
        document.addEventListener('pointerup', pointerUp);
        
        function pointerMove(event) {
          let newLeft = event.clientX - shiftX - steps.getBoundingClientRect().left ;
          
          if (newLeft < 0) {
            newLeft = 0;
              }
              let rightEdge = steps.offsetWidth;
              if (newLeft > rightEdge) {
                newLeft = rightEdge;
              }
              thumb.style.left = newLeft + 'px';
            }
            
            function pointerUp (event) {
              let newLeft = event.clientX - shiftX - steps.getBoundingClientRect().left ;
              let leftRelative = newLeft / steps.offsetWidth;              
              let approximateValue = leftRelative * stepsLength ;
              let currentStep = Math.round(approximateValue);
              const span =  steps.children[currentStep]   ;
              span.classList.add('slider__step-active') ;
              sliderValue.innerText = this.value =  currentStep ;
              thumb.style.left = `${segmentProgress*currentStep}%`;
              sliderProgress.style.width = `${segmentProgress*currentStep}%`;
              document.removeEventListener('pointermove', pointerMove);
              document.removeEventListener('pointerup', pointerUp);
          
          const sliderChange =  new CustomEvent('slider-change', { 
            detail: this.value,
            bubbles: true,
          }) ;
          
          elem.dispatchEvent(sliderChange)  ;
        }
        
      }
      
      
      
    } //select
    
}// class

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
  

  this.elem.addEventListener( 'click' , this.select.bind(this) ) ;
  return this.elem ;
  } // render
  
  
  select(ev) {
    let steps = this.elem.querySelector('.slider__steps') ;
    let sliderValue = this.elem.querySelector('.slider__value') ;
    let thumb = this.elem.querySelector('.slider__thumb') ;
    let sliderProgress  = this.elem.querySelector('.slider__progress');
    const sliderLength = steps.children.length -1 ;
    
    let segmentProgress =  100 / sliderLength;
    
    
    for (let i of steps.children) {
      i.classList.remove('slider__step-active') ;
    }    
    
    let left = ev.clientX - this.elem.getBoundingClientRect().left;

    let leftRelative = left / this.elem.offsetWidth;
    
    let approximateValue = leftRelative * sliderLength ;

    let currentStep = Math.round(approximateValue);

    if (ev.target.closest('span') ) {

      const span =  ev.target.closest('span') ;
     
      span.classList.toggle('slider__step-active') ;
      
      sliderValue.innerText = this.value =  currentStep ;
      
      thumb.style.left = `${segmentProgress*currentStep}%`;
  
      sliderProgress.style.width = `${segmentProgress*currentStep}%`;
    } else {
      const span =  ev.target.children[currentStep] ;
     
      span.classList.toggle('slider__step-active') ;
      
      sliderValue.innerText = this.value =  currentStep ;
      
      thumb.style.left = `${segmentProgress*currentStep}%`;
  
      sliderProgress.style.width = `${segmentProgress*currentStep}%`;

    }

      const sliderChange =  new CustomEvent('slider-change', { 
      detail: this.value,
      bubbles: true
    }) ;

    this.elem.dispatchEvent (sliderChange)  ;
     
}
  

} // class

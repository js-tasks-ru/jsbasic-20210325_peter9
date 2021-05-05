export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps ;
    this.value = value ;
    this.render() ;
  }
 
  render () {
    this.elem = document.createElement('div') ;
    this.elem.classList.add('slider') ;

    const sliderThumb = document.createElement('div') ;
    sliderThumb.classList.add('slider__thumb') ;

    const sliderValue = document.createElement('span') ;
    sliderValue.classList.add('slider__value') ;
    sliderValue.innerText = this.value ;

    const sliderProgress = document.createElement('span') ;
    sliderProgress.classList.add('slider__progress') ;

    const sliderSteps = document.createElement('div') ;
    sliderSteps.classList.add('slider__steps') ;

    
    for (let i=0 ; i< this.steps ;i++) {
        sliderSteps.append( document.createElement('span') ) ;
    }

sliderThumb.append(sliderValue)
this.elem.append(sliderThumb , sliderThumb ,sliderProgress ,sliderSteps )
  


  return this.elem ;
  } // render

  

} // class

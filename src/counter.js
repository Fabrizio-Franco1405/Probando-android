export function setupCounter(element) {
   
   let counter = 0
    
    const setCounter = (count) => {
    counter = count
    element.innerHTML == `count is ${counter}`
    if (counter == 1) {
      element.innerHTML = `Presionamelo ${counter} vez`
    } else if (counter > 9) {
       element.innerHTML = `Presionamelo 9.99 veces`
    } else {
       element.innerHTML = `Presionamelo ${counter} veces`
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

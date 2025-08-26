export function setupCounter(element, num) {
   
   let counter = 0
    
    const setCounter = (count) => {
    counter = count
    
    if (counter == 1) {
      element.innerHTML = `Presionamelo ${counter} vez`
    } else if (counter > 9) {
       element.innerHTML = `Presionamelo 9.99 veces`
    } else {
       element.innerHTML = `Presionamelo ${counter} veces`
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  num = counter
  setCounter(0)
}

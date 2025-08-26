export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    if (counter == 1) {
      element.innerHTML = `Presionamela ${counter} vez`
    } else {
      element.innerHTML = `Presionamela ${counter} veces`
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

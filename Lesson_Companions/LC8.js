// Lesson Companion (js-8-working-with-browser-events)


// Exercise 5: Listening for Events
// Add an Event Listener to 'header' below, so that when double clicked 'I was double-clicked!' is logged.


let header = document.createElement('h1')
header.textContent = 'Hello World'
document.body.append(header)

header.addEventListener("dblclick", ()=>{
  console.log('I was double-clicked')
}) 
// Lesson Companion (js-8-creating-dynamic-content)



// 4. Creating HTML Elements
// Use JavaScript to create a new 'section' tag variable named 'mainSection.'
let mainSection
mainSection = document.createElement('section')


// 5. Using .appendChild
// Use JavaScript to create a new 'section' tag variable named 'mainSection' and append an h1 header with the text of your choice.
let mainSection
mainSection = document.createElement('section')
mainSection.innerHTML = '<h1>WhirlWind<h1>'
document.body.appendChild(mainSection); 


// 6. Adding a Class
// Use JavaScript to add a class named 'dynamic' to a section element named 'mainSection.'
let mainSection
mainSection = document.createElement('section')
mainSection.className = 'dynamic'


// 7. Removing DOM Elements
// Remove from the page an element named 'paragraph' (referenced below).

/*
Output:
This is a paragraph that needs to be removed.
*/

let element
element = document.getElementsByTagName('p')
element.remove('paragraph')










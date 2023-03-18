// Lesson Companion (js-8-the-dom-tree)

// Exercise 3: Selecting a Single Element with JavaScript
// Define paraGraphTag by selecting the paragraph from the HTML below:
//--------------------------
// <html>
//    <body>
//        <p>Good day!</p>
//        <p>Hello World!</p>
//    </body>
// </html>
//--------------------------
let paraGraphTag = document.querySelector('p')


// Exercise 4: Selecting Multiple Elements with JavaScript
// Define paraGraphTags as a list of both 'p' tags from the HTML below:
//--------------------------
// <html>
//    <body>
//        <p>Good day!</p>
//        <p>Hello World!</p>
//    </body>
// </html>
//--------------------------
let paraGraphTags = document.querySelectorAll('p')


// Exercise 5: Changing an Element's Styles
// Make pageHeader's background color green.

let pageHeader = document.querySelector('.page-header')
pageHeader.style.backgroundColor = 'green'



// Exercise 6: Changing an Element's Styles
// Make pageHeader's color yellow.

let pageHeader = document.querySelector('.page-header')
pageHeader.style.backgroundColor = 'green'
pageHeader.style.color = 'yellow'
















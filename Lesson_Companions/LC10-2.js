// Lesson Companion (js-10-sending-data-to-a-server)
// Sending Data to a Server


// Exercise 3: Using Fetch with Options
// Use 'fetch' to make an HTTP request in the function below. Pass 'http://books.example.com/api/books/1' as the URL, and 'DELETE' as the method. Use '.json()' to parse the raw response and log it using console.log.

async function deleteBook(){
	let response = await fetch('http://books.example.com/api/books/1', {method:'DELETE'})
    let x = await response.json()
    console.log(x)
}


// Exercise 4: Sending Data with Fetch
// Use 'fetch' to make an HTTP request in the function below. Pass 'http://books.example.com/api/books/1' as the URL and 'PATCH' as the method. For the body of the request, provide an object with a title property that has the value of 'The Shinobi Initiative'. Remember to use 'JSON.stringify' to convert the body of your request into a string, and to include the 'Content-Type': 'application/json' header so the server can convert it back into an object. Use '.json()' to parse the raw response and log it using console.log.

async function changeBookName(){
	let response = await fetch('http://books.example.com/api/books/1', {
        method:'PATCH', 
        body: JSON.stringify({
            title: 'The Shinobi Initiative'
        }), 
      	headers: {
            'Content-Type': 'application/json'
        }
    })
    let x = await response.json()
    console.log(x)
}




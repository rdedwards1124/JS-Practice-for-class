// Lesson Companion (js-10-fetching-data-from-a-server)
// Fetching Data from a Server


// Exercise 4: Using Fetch
// Use 'fetch' to make an HTTP request in the function below. Pass 'https://hackerusa-ce.github.io/example-site/json' as the URL. Use '.text()' to parse the raw response, and log it using console.log.
async function getWebPage(){
	let response = await fetch('https://hackerusa-ce.github.io/example-site/json')
	let Respn = await response.text()
    console.log(Respn)
}


// Exercise 5: Retrieving JSON with Fetch
// Use 'fetch' to make an HTTP request in the function below. Pass 'https://hackerusa-ce.github.io/example-site/json' as the URL. Use '.json()' to parse the raw response and log it using console.log.
async function getJSON(){
	let response = await fetch('https://hackerusa-ce.github.io/example-site/json')
	let x = await response.json()
    console.log(x)
}

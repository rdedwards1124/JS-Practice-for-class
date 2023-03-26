// Activity (js-10-fetching-data-from-a-server)
// Activity: Building a Shared Counter Part I


// This is the solution to this activity
let response = await fetch('http://localhost:9001/counter')
let x = await response.json() // x is now an object
console.log(x)           // use this to find what is in this object
let countValue = x.value // value was shown when countValue was 0



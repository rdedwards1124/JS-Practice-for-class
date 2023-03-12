// Lesson Companion (js-6-asynchrony-with-promises) //

// Exercise 1: Creating Promises
// Define an asynchronous function named 'inFiveSeconds'. It should return a new     promise that resolves after 5,000 milliseconds.
function inFiveSeconds(){
	return new Promise (function(resolve){
        setTimeout(() => {
            resolve ()
        }, 5000);
    })
}


// Exercise 2: 'typeof' Promise
/*Use 'console.log' and the 'typeof' keyword to inspect the data type of the variable 'promise'.*/

let promise = new Promise(function(){})

console.log(typeof promise)


// Exercise 4: Using '.then'
/*Invoke 'inFiveSeconds' to create a promise. Next, use '.then' to log 'Hello World' after the promise has resolved.*/

inFiveSeconds()
	.then(function(){
		console.log('Hello World')
	})


// Exercise 5: Using '.then'
//In the exercise below, 'getUser' is returning a promise, which will resolve after it has retrieved a user. Use '.then' to wait until the user has been retrieved and then log 'user.name'.

getUser()
	.then((user)=> {console.log(user.name)})


// Exercise 6: Chaining '.then'
// Use 'inFiveSeconds' to log 'Hello World' after five seconds and then chain '.then' to log 'Goodbye World' after five more seconds have passed. Be sure to watch the test output for guidance on how to do the chaining.

inFiveSeconds()
.then(()=>{console.log('Hello World')}, 5000)
.then(()=>{console.log('Goodbye World'), 5000})     

// the right way!!!
inFiveSeconds()
.then(()=>{
    console.log('Hello World')
	return inFiveSeconds()
})
.then(()=>console.log('Goodbye World'))
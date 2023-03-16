// Concurrency with Promise.all
// LESSON COMPANION //


// Exercise 3: Using 'Promise.all'
// In the exercise below, a function named 'countTo' has already been defined. It accepts a number of seconds and creates a counter in the DOM that counts from 0 to the number you pass. The function returns a promise that resolves once the counter is finished. Use 'countTo' to create two counters (pass whatever numbers you like) and then utilize 'Promise.all' to wait until both counters have finished before logging 'All done!'

function startCounters(){

}

function startCounters(){
	Promise.all([
    	countTo(10),
      	countTo(25)
    ])
  	.then(()=>{console.log('All Done')})
}

// Exercise 4: Making Breakfast
// 'cookBacon', 'cookEggs', and 'makeTea' have each been defined in the code exercise below. Each returns a promise. Invoke each inside 'makeBreakfast' and then use 'Promise.all' to wait until all promises have finished before logging 'Breakfast is served!'

function makeBreakfast(){
	Promise.all([
    	cookBacon(),
      	cookEggs(),
      	makeTea()
    ])
  	
  	.then(()=>{console.log('Breakfast is served!')})
}

// Exercise 5: Making Breakfast with 'async' & 'await'
// As in the previous exercise, use 'Promise.all' to wait until 'cookBacon', 'cookEggs', and 'makeTea' are finished before logging 'Breakfast is served!' This time, use 'async' and 'await' instead of '.then'.

async function makeBreakfast(){
	await Promise.all([
    	cookBacon(),
      	cookEggs(),
      	makeTea()
    ])
  
  	console.log('Breakfast is served!')
}


// Exercise 6: Promise.all Results
// As in the previous exercise, use 'Promise.all' to wait until 'cookBacon', 'cookEggs', and 'makeTea' are finished, using 'async' and 'await'. This time, assign the result of 'await Promise.all([...' to a variable and log it after 'Promise.all' is complete.

async function makeBreakfast(){
	let results = await Promise.all([
    	cookBacon(),
      	cookEggs(),
      	makeTea()
    ])
  
  	console.log(results)
}





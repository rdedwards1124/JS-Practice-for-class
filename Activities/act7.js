// Activity (js-7-concurrency-with-promise-all)


///////////////////////////////////////////////////////////////////

let greenCharacter = createCharacter({ color: 'green', x: 10, y: 100 });

async function timeGreenCharacter(){
	let start = new Date().getTime()
    await greenCharacter.runFeetEast(150)
  	await greenCharacter.runFeetSouth(100)
  	await greenCharacter.runFeetWest(150)
  	await greenCharacter.runFeetNorth(100)
  	let end = new Date().getTime()
    return end - start
}

timeGreenCharacter()

///////////////////////////////////////////////////////////////////

let redCharacter = createCharacter({ color: 'red', x: 25, y: 120 })

async function timeRedCharacter(){
	let start = new Date().getTime()
    await redCharacter.runFeetEast(120)
  	await redCharacter.runFeetSouth(130)
  	await redCharacter.runFeetWest(120)
  	await redCharacter.runFeetNorth(130)
  	let end = new Date().getTime()
    return end - start
}

timeRedCharacter()

//////////////////////////////////////////////////////////////////

let resultsContainer = document.querySelector('.results-container')

async function conductRace(){
	await Promise.all([
    	timeGreenCharacter(),
      	timeRedCharacter()
    ])
    if (timeGreenCharacter>timeRedCharacter) {
        console.log('Green character wins!')
    } else {
        console.log('Red character wins!')
    }
}
///////////////////////   OR    ///////////////////////////
let resultsContainer = document.querySelector('.results-container')

async function conductRace(){
	let results = await Promise.all([
    	timeGreenCharacter(),
      	timeRedCharacter()
    ])
  	if (results[0]<results[1]) { // DONT FORGET:
        resultsContainer.textContent = "Green character wins!"
    } else {
        resultsContainer.textContent = "Red character wins!"
    }
}

// DONT FORGET: results is an array, so the results of timegreencharacter and red is results[0] and results[1]

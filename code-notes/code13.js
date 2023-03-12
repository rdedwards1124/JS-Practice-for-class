// Activity: Moving a Character with Asynchronous Code //


//////////////////////////////////////////////// My code
const character = createCharacter(10, 10, 'assets/green-character')

setTimeout(()=>{
	character.walkEast()
}, 0)

setTimeout(()=>{
	character.walkNorth()
},500)

setTimeout(()=>{
	character.walkEast()
},1000)

setTimeout(()=>{
	character.stop()
},1500)

//////////////////////////////////////////////////// Alma's Code

const character = createCharacter(10, 10, 'assets/green-character')

character.walkEast()

setTimeout(() => {

    character.walkNorth()

    setTimeout(() => {

        character.walkEast()

        setTimeout(() => {

            character.stop()

        },500)

    }, 500)

}, 500)





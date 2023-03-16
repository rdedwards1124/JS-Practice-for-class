
let x = [ 1, 2, 3 ]


function forEach(array, action){
    array.forEach(action)
}

forEach(x, function(number){
    console.log('iteration', number)
})


/*------------------------
- is this the callback function????

function(number){
    console.log('iteration', number)
}

--------------------------*/


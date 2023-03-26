function forEach(array, callback){
	for(let i=0; i<array.length; i++){
        callback(array[i])
    }
}

forEach([ 1, 2, 3 ], function(number){
    console.log('iteration', number)
})
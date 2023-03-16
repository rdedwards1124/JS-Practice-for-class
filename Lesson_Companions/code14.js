// Asynchrony with Callback Functions//
//     Lesson Companion    //

//////////////////////////////////////////////
function threeTimes(callback){
    callback()
  	callback()
  	callback()
}

function logHello(){
    console.log('Hello!')
}

threeTimes(logHello)
////////////////////////////////////////////////////

function inFiveSeconds(callback){
    callback()
}

setTimeout(()=>{
    inFiveSeconds()
},5000)

// the correct way:
function inFiveSeconds(callback){
    setTimeout(()=>{
      callback()
  },5000)
}





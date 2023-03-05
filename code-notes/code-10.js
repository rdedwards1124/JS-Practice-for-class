//    .forEach     //

let numbers = [1,2,3]

function theNumber(x) {
    console.log(`From function: ${x}`)
}

numbers.forEach(number => theNumber(number))

numbers.forEach(function(number){
    console.log(`From inline: ${number}`)
})

numbers.forEach((number) => {
    console.log(`From arrow: ${number}`)
})


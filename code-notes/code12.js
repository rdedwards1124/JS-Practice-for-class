// Activity: Array Iterator Practice  //

let users = [
    { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
    { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
    { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
    { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
]

function getTeenagers(users){
	return users.filter(function(teen){
        return teen.age > 13 && teen.age <= 18
    })
}

console.log(getTeenagers(users))






//     Arrays     //

let meats = ['fish','chicken','beef','steak','turkey','salmon']
let plants = ['broccoli','lettuce','greens','carrots']
let deserts = ['cake','cookies','brownies','ice-cream','candy']

meats.pop()
plants.pop()

console.log(plants)

let string1 = deserts[2]
console.log(string1)

let meatPlant = meats.concat(plants)
let mondayMenu = meatPlant.concat(deserts)
console.log(mondayMenu)

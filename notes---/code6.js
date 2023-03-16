
// While loop example, also for loop

let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]


let x = 0
while (x < newInventoryCarModels.length) {
    console.log(newInventoryCarModels[x], newInventoryCarTypes[x], newInventoryYearBuilt[x])
    x++
}

let typeS1Count = 0
let y = 0
while (y < newInventoryCarModels.length) {
    if (newInventoryCarModels[y] === 'S1') {
        typeS1Count++
    }
    y++
}

console.log(`number of s1 cars is: ${typeS1Count}`)


// this needs more work!!! EDIT: its solved now :)
let lorrieCount = 0
for (let index = 0; index < newInventoryCarTypes.length; index++) {
    if (newInventoryCarTypes[index] === 'Lorrie') {
        lorrieCount++
    }
}

console.log(`number of lorries is: ${lorrieCount}`)
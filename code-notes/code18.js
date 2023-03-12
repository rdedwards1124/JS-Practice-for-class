// Activity (js-7-asynchrony-with-async-await)


// 1. Ordering Each Step
let stepsForBacon = [
    fry, serve
]

let stepsForEggs = [
    fry, season, serve
]

let stepsForTea = [
    boil, steep, sweeten, serve
]


// 2. Identifying Synchronous & Asynchronous Tasks

let asynchronous = [
    // Your code here
    steep, fry, boil
]

let synchronous = [
    // Your code here
    season, sweeten, serve
]


// 3. Time to Cook!

async function cookBacon(){
    let rawBacon = 'ðŸ¥©'
    let friedBacon = await fry(rawBacon)
    serve(friedBacon)

}

async function cookEggs(){
    let rawEgg = 'ðŸ¥š'
    let cookedEggs = await fry(rawEgg)
    let seasonedEggs = season(cookedEggs)
    serve(seasonedEggs)
    
}

async function makeTea(){
    let water = 'ðŸ’§'
    let hotWater = await boil(water)
    let tea = await steep(hotWater)
    let sweetTea = sweeten(tea)
    serve(sweetTea)
    
}    

cookBacon()
makeTea()
cookEggs()


//4. Bonus: Reflect

async function makeBreakfast(){
	await cookBacon()
  	await cookEggs()
  	await makeTea()
}

makeBreakfast()










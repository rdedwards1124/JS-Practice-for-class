//   Activity: Building a Monthly Profit Report  //


// #1: .forEach  //
let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')

// for(let i = 0; i < monthlyProfitLabels.length; i++){
//     let label = monthlyProfitLabels[i]
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// }

monthlyProfitLabels.forEach((label)=>{
    let monthLi = document.createElement('li')
    monthLi.textContent = label
    monthList.append(monthLi)
})











// #2: .map  //
let selectedMonths = [ 
    { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
    { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
    { name: 'March', revenue: 15, expenses: 3, quarter: 1 } 
]

// let monthlyProfitLabels2 = []
// for(let i = 0; i < selectedMonths.length; i++){
//     let month = selectedMonths[i]
//     let label = `${month.name}: ${month.revenue - month.expenses}`
//     monthlyProfitLabels2.push(label)
// }

// console.log(monthlyProfitLabels2)

let monthlyProfitLabels2 = selectedMonths.map((i)=>{
    let month = selectedMonths[i]
    let label = `${month.name}: ${month.revenue - month.expenses}`
    monthlyProfitLabels2.push(label)
})

console.log(monthlyProfitLabels2)











// #3: .filter   //
let allMonths = [ 
    { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
    { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
    { name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
    { name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
    { name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
    { name: 'June', revenue: 19, expenses: 18, quarter: 2 },
    { name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
    { name: 'August', revenue: 19, expenses: 20, quarter: 3 },
    { name: 'September', revenue: 21, expenses: 23, quarter: 3 },
    { name: 'October', revenue: 21, expenses: 20, quarter: 4 },
    { name: 'November', revenue: 21, expenses: 20, quarter: 4 },
    { name: 'December', revenue: 18, expenses: 20, quarter: 4 } 
]

let selectedQuarter = 1
// let selectedMonths3 = []
// for(let i = 0; i < allMonths.length; i++){
//     let month = allMonths[i]
//     if(month.quarter === selectedQuarter){
//         selectedMonths3.push(month)
//     }
// }

// console.log(selectedMonths3)

let selectedMonths3 = allMonths.filter((month)=>{
    return month.quarter === selectedQuarter
})

console.log(selectedMonths3)

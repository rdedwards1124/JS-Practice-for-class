let amounts = [ 100, 200, 350, 400 ];
let expenses = document.querySelector('ul.expenses');

function listExpenses(){
    amounts.forEach( amount => {
        let expenseItem = document.createElement('li');
        expenseItem.textContent = amount;
        expenses.append(expenseItem)
    })
}

function clearExpenses(){
    expenses.innerHTML = ''
}
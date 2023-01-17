document.getElementById('calculate-btn').addEventListener('click', function () {
    // get income
    const income = document.getElementById('income')
    const newIncomeString = income.value;
    const newIncome = parseInt(newIncomeString);

    // get expenses

    const foodCost = document.getElementById('food-cost')
    const newFoodCostString = foodCost.value;
    const newFoodCost = parseInt(newFoodCostString);

    const rentCost = document.getElementById('rent-cost')
    const newRentCostString = rentCost.value;
    const newRentCost = parseInt(newRentCostString);

    const clothesCost = document.getElementById('clothes-cost')
    const newClothesCostString = clothesCost.value;
    const newClothesCost = parseInt(newClothesCostString);

    const totalCost = newFoodCost + newRentCost + newClothesCost;

    //update total expenses

    const netExpense = document.getElementById('total-cost')
    const netExpenseText = netExpense.innerText;
    const previousExpense = parseInt(netExpenseText)
    const newTotalCost = previousExpense + totalCost;
    netExpense.innerText = newTotalCost;

    //update balance

    const currentBalance = document.getElementById('total-balance');
    const currentBalanceText = currentBalance.innerText;
    const previousBalance = parseInt(currentBalanceText);
    const netIncome = previousBalance + newIncome;
    const newBalance = netIncome - newTotalCost
    currentBalance.innerText = newBalance;



    document.getElementById('save-btn').addEventListener('click', function () {
        // get save
        const saveAmount = document.getElementById('save');
        const saveAmountText = saveAmount.value;
        const savePercentage = parseInt(saveAmountText);

        // get saving amount
        const savingAmount = document.getElementById('save-amount')
        const savingAmountText = savingAmount.innerText;
        const previousSavingAmount = parseInt(savingAmountText)
        const newSavingAmount = previousSavingAmount + (newIncome * (savePercentage / 100));
        savingAmount.innerText = newSavingAmount;

        // get & update remaining balance

        const remainingBalance = document.getElementById('remaining-balance');
        const remainingBalanceText = remainingBalance.innerText;
        const previousRemainingBalance = parseInt(remainingBalanceText);
        const newRemaningBalance = previousRemainingBalance + (newBalance - newSavingAmount);
        remainingBalance.innerText = newRemaningBalance;


    })
})

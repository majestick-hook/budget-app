var expenses = 0 ;
var balance = 0;
var budget = 0;
var balanceDom = document.querySelector("#balance");
var mainExpenseDom = document.querySelector("#expenses");


const addBudget = () => {
    var budgetValue = document.querySelector("#setBudget");
    budget = budgetValue.value;
    // console.log("budget value", budgetValue);

    if (budgetValue.value !== "")
    {
    var budgetDom = document.querySelector("#budget");
    budgetDom.innerHTML = "$" + budgetValue.value;

    balance = budget - expenses;
    console.log(balance)
    balanceDom.innerHTML = "$" + balance;
    budgetValue.value = null;
    }
    else
    {
        alert("please enter the budget")
    }
}



  var category = {
    outing: {
        date: null,
        amount: 0,
        description: null,

    },
    shopping: {
        date: null,
        amount: 0,
        description: null,
    },
    installment: {
        date: null,
        amount: 0,
        description: null,
    },
    grocery: {
        date: null,
        amount: 0,
        description: null,
    },
    others: {
        date: null,
        amount: 0,
        description: null,
    },      
}

  const addExpense = () => {
    var cate = document.querySelector("#ctg").value;
    var date = document.querySelector("#dueDate").value;
    var amount = parseFloat(document.querySelector("#amt").value);
    var description = document.querySelector("#des").value;
    var form = document.querySelector("#form");
    console.log(amount)


    if (cate !== "select")
    {
        if (cate === "Restaurant")
        {
            category.outing.date = date;
            category.outing.amount += amount;
            category.outing.description = description;
            var expenseValueDom = document.querySelector("#outing-expense");
            console.log(expenseValueDom)
            expenseValueDom.innerHTML = category.outing.amount;
            expenses = expenses + amount;
            balance = budget - expenses;
        }
        if (cate === "Shopping")
        {
            category.shopping.date = date;
            category.shopping.amount += amount;
            category.shopping.description = description;
            var expenseValueDom = document.querySelector("#shopping-expense");
            console.log(expenseValueDom)
            expenseValueDom.innerHTML = category.shopping.amount;
            expenses = expenses + amount;
            balance = budget - expenses;
        }
        
        if (cate === "Installments")
        {
            category.installment.date = date;
            category.installment.amount += amount;
            category.installment.description = description;
            var expenseValueDom = document.querySelector("#installment-expense");
            console.log(expenseValueDom)
            expenseValueDom.innerHTML = category.installment.amount;
            expenses = expenses + amount;
            balance = budget - expenses;
        }

        if (cate === "Grocery")
        {
            category.grocery.date = date;
            category.grocery.amount += amount;
            category.grocery.description = description;
            var expenseValueDom = document.querySelector("#grocery-expense");
            console.log(expenseValueDom)
            expenseValueDom.innerHTML = category.grocery.amount;
            expenses = expenses + amount;
            balance = budget - expenses;
        }

        if (cate === "Others")
        {
            category.others.date = date;
            category.others.amount += amount;
            category.others.description = description;
            var expenseValueDom = document.querySelector("#others-expense");
            console.log(expenseValueDom)
            expenseValueDom.innerHTML = category.others.amount;
            expenses = expenses + amount;
            balance = budget - expenses;
        }

        // console.log(category.outing.date)
        // console.log(category.outing.amount)
        // console.log(category.outing.description);
    }
    else
    {
        console.log("select category")
    }

    mainExpenseDom.innerHTML = expenses;

    balanceDom.innerHTML = balance;
    if (budget < expenses)
    {
        alert("You exceed the budget")
    }

    form.reset();
  }


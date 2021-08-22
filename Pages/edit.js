let editIndex = JSON.parse(localStorage.editData);
let arr = JSON.parse(localStorage.clientData);

function ObjectFunction(id, date, naration, income, expense) {
    this.id = id;
    this.date = date;
    this.naration = naration;
    this.income = income;
    this.expense = expense;
}

function properWords(stringWords) {
    let strArr = stringWords.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }

    const converted = strArr.join(" ");
    return converted;
}

function showTrans() {
    date = document.getElementById("date");
    date.value = arr[editIndex]["date"];

    naration = document.getElementById("naration");
    naration.value = arr[editIndex]["naration"];

    amount = document.getElementById("amount");

    type = document.getElementById("type");

    const income = arr[editIndex]["income"];

    if (income === 0) {
        amount.value = arr[editIndex]["expense"];
        type.value = "Expense";
    } else {
        amount.value = arr[editIndex]["income"];
        type.value = "Income";
    }
}

function handleSubmit() {
    const date = document.getElementById("date").value;
    const naration = properWords(document.getElementById("naration").value);
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;

    let income = 0
    let expense = 0
    if (type === "Income") {
        income = amount;
    }
    else {
        expense = amount;
    }

    var obj = new ObjectFunction(arr[editIndex]["id"],date,naration,income,expense);
    // console.log(obj);
    // console.log(obj)
    arr.splice(editIndex,1,obj)

    console.log(arr)
    // arr[editIndex] = obj;
    // console.log(obj)

    localStorage.clientData = JSON.stringify(arr);
    localStorage.removeItem("editData");
    window.location.replace('./transactions.html')
}

function editTrans() {
    window.location.replace('./edit.html')
}
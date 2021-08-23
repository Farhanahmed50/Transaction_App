try {
    JSON.parse(localStorage.clientData);
    var titleName = "Add Transactions - Trasaction App"
    document.title = titleName;
    // document.getElementById('ClientName').innerText = JSON.parse(localStorage.Information);
}
catch (error) {
    window.location.replace('./signup.html')
}


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

var localData = JSON.parse(localStorage.clientData);
let arr = localData;

function handleSubmit() {
    var date = document.getElementById("date").value;
    var naration = document.getElementById("naration").value;
    var amount = document.getElementById("amount").value;
    var type = document.getElementById("type").value;

    var income = 0;
    var expense = 0;
    if (type === 'Income') {
        income = parseInt(amount);
        income.toFixed(2);
    }
    else {
        expense = parseInt(amount);
        expense = expense.toFixed(2);
    }
    var warn = document.getElementById("warn");
    var data = JSON.parse(localStorage.clientData);
    var id = arr.length;

    naration = properWords(naration);


    if (amount === 0 || amount === "") {
        warn.innerText = "* Amount field is required";
        document.getElementById("amount").focus()
    }
    if (amount < 0) {
        warn.innerText = "* You can't add negative amount";
        document.getElementById("amount").focus()
    }


    if (naration === "") {
        warn.innerText = "* Naration field is required";
        document.getElementById("naration").focus();
    }

    if (date === "") {
        warn.innerText = "* Date field is required";
        document.getElementById("date").focus();
    }

    if (date !== "" && data[0]['naration'] === "Opening Balance") {
        if (data[0]['date'] > date) {
            warn.innerText = "* Please enter above date from Opening Balance Date"
            document.getElementById("date").focus();
        }

    }
    if (date !== '' && naration !== '' && amount !== '' && amount !== 0) {
        var obj = new ObjectFunction(id, date, naration, income, expense);
        arr.push(obj);

        localStorage.setItem("clientData", JSON.stringify(arr))
        document.getElementById("date").value = '';
        document.getElementById("naration").value = '';
        document.getElementById("amount").value = '';
        document.getElementById("warn").innerText = '';

    }

}

function homeIcon() {
    window.location.replace('../')
}

function seeTrans() {
    window.location.replace('./transactions.html')
}

function addTrans() {
    window.location.replace('./add.html')
}
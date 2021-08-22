let arr;
let temp;
let tempName;

try {
    console.log(JSON.parse(localStorage.Information));
    temp = JSON.parse(localStorage.clientData);
    temp.length === 0
    window.location.replace('../');
    
} catch (error) {
}
// if (tempName === null) {
//     window.location.replace('http://transaction-app.surge.sh/');
// }

// if () {
    
// }
console.log(tempName);


function ObjectFunction(id, date, naration, income, expense) {
    this.id = id;
    this.date = date;
    this.naration = naration;
    this.income = income;
    this.expense = expense;
}

function handleSumbit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let balance = document.getElementById("openingBalance").value;
    let openingDate = document.getElementById("openingDate").value;
    
    let warn = document.getElementById("warn");
    if (name === "") {
        // warn.classList.remove('grey');
        warn.classList.replace('grey', 'red');
        warn.innerText = "* Name field is required."
        document.getElementById("name").focus();
    }
    else if (email === "") {
        warn.classList.replace('grey', 'red');
        warn.innerText = "* Email field is required."
        document.getElementById("email").focus();
    }
    else if (balance === '') {
        warn.classList.replace('grey', 'red');
        warn.innerText = "* Opening Balance field is required";
        document.getElementById("openingBalance").focus();
    }
    else if (balance < 0) {
        warn.classList.replace('grey', 'red');
        warn.innerText = "* You can't sign up with negative balance";
        document.getElementById("openingBalance").focus();
    }
    else if (openingDate === "") {
        warn.classList.replace('grey', 'red');
        warn.innerText = "* Date of Opening Balance is required";
    }
    else {
        // var today = Date();
        let obj = new ObjectFunction(0, openingDate, "Opening Balance", balance, 0);
        console.log(obj);
        arr = [obj];
        localStorage.clientData = JSON.stringify(arr);
        localStorage.Information = JSON.stringify(name);
        window.location.replace("../");
    }
}



// window.addEventListener("load", () => {
//   registerSW();
// });

// async function registerSW() {
//   if ('serviceWorker' in navigator) {
//       try {
//           await navigator.serviceWorker.register('./sw.js');
//       } catch (e) {
//           console.log("SW registration failed");
//       }
//   }
// }


// window.onload = () => {
//   'use strict';
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//       .register('./sw.js');
//   }
// }


var arr;
var totalIncome = 0;
var totalExpense = 0;


try {
  arr = JSON.parse(localStorage.clientData);
  let clientName = JSON.parse(localStorage.Information);
  let titleName = clientName + " - Transaction App";
  document.getElementById('ClientName').innerText = clientName;
  document.title = titleName;

}
catch (error) {
  window.location.replace('./Pages/signup.html')
}

// console.log(localStorage.Information)



// console.log(localStorage.clientData === 0)

if (arr.length === 0) {
  window.location.replace('./Pages/signup.html')
}


function progressBar(progressVal, totalPercentageVal = 100) {
  var strokeVal = (4.64 * 100) / totalPercentageVal;
  document.getElementById('progress_circle_prog').style.strokeDasharray = progressVal * (strokeVal) + ' 999';

  let counter = 0;
  setInterval(() => {
    if (counter === progressVal) {
      clearInterval();
    } else {
      if (counter >= progressVal) {
        counter = progressVal;
        clearInterval();
      }
      else {
        counter += 1;
        document.getElementById("progress_txt").innerText = counter + "%";
      }

    }
  }, 10);
};


let newExpense = arr.map(person => ([
  person["expense"]
]))


let newIncome = arr.map(person => ([
  person["income"]
]))

newExpense.map(i => {
  totalExpense = totalExpense + parseInt(i);
})

newIncome.map(i => {
  totalIncome = totalIncome + parseInt(i);
})

var totalBalance = totalIncome - totalExpense;

document.getElementById('incomeAmount').innerText = totalIncome.toFixed(2);
document.getElementById('expenseAmount').innerText = totalExpense.toFixed(2);
document.getElementById('balanceAmount').innerText = totalBalance.toFixed(2);

var per = (totalBalance / totalIncome) * 100;

if (per <= 0) {

}
else if (per !== isNaN) {
  progressBar(per, 100);
}
else {
  progressBar(per, 100);
}

function addTrans() {
  window.location.replace('./Pages/add.html')
}

function seeTrans() {
  window.location.replace('./Pages/transactions.html')
}

function homeIcon() {
  window.location.replace('./')
}



var arr = JSON.parse(localStorage.clientData);

var titleName = "Transactions - Transaction App"
document.title = titleName;

function seeTransaction() {
    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var newVar = 0;
    for (let i = 0; i < arr.length; i++) {

        var insert = table.insertRow();

        var cell1 = insert.insertCell();
        cell1.innerText = arr[i]["id"];

        var cell2 = insert.insertCell();
        cell2.innerText = arr[i]["date"];

        var cell3 = insert.insertCell();
        cell3.innerText = arr[i]["naration"];

        var cell4 = insert.insertCell();
        cell4.innerText = arr[i]["income"];

        var cell5 = insert.insertCell();
        cell5.innerText = arr[i]["expense"];


        var cell6 = insert.insertCell();
        cell6.innerText = newVar + arr[i]["income"] - arr[i]["expense"];
        newVar = newVar + arr[i]["income"] - arr[i]["expense"];

        var cell7 = insert.insertCell();
        cell7.innerText = "Delete";
        cell7.style.color = '#1D62FC';
        cell7.style.textDecoration = 'underline';
        cell7.style.cursor = 'pointer';
        // cell7.setAttribute('onclick', "deleteCell()");

        var cell8 = insert.insertCell();
        cell8.innerText = "Edit";
        cell8.style.color = '#1D62FC';
        cell8.style.textDecoration = 'underline';
        cell8.style.cursor = 'pointer';

        deleteSelectedRow();
        editSelectedRow()
    }
}

function deleteSelectedRow() {
    var rIndex, table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[6].onclick = function () {
            rIndex = table.rows[i].rowIndex;
            if (confirm("Are you sure, You wanna delete it?")) {
                arr.splice(rIndex - 1, 1);
                localStorage.clientData = JSON.stringify(arr);
                window.location.replace('./transactions.html')
            }
        }
    }
}



function editSelectedRow() {
    var rIndex, table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[7].onclick = function () {
            rIndex = table.rows[i].rowIndex;

            if (confirm("Are you sure, You wanna edit it?")) {
                const editIndex = rIndex - 1;
                localStorage.setItem("editData", JSON.stringify(editIndex))
                window.location.replace('./edit.html');
            }
        }
    }
}

function addTrans() {
    window.location.replace('./add.html')
}

function seeTrans() {
    window.location.replace('./transactions.html')
}

function homeIcon() {
    window.location.replace('../')
}
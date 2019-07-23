/*
 *   Created by: Ederson Cardoso - Created on: May 23, 2019
 *	 Assignment_2 : Create a dynamic html table
*/
function createTableObjectOriented() {
    var tbl = document.createElement("table");
    var rows = document.getElementById("row").value;
    var cols = document.getElementById("col").value;

    for (var r = 1; r <= rows; r++)
    {
        var tr = document.createElement("tr");

        for (var c = 1; c <= cols; c++)
        {
            var td = document.createElement("td");
            var tdID = document.createTextNode("[" + (r) + "," + (c) + "]");
            tr.appendChild(td).appendChild(tdID);
        }
        tbl.appendChild(tr);
    }
    document.getElementById("tableID").innerHTML = "";
    document.getElementById("tableID").appendChild(tbl);
}

function resetForm() {
    document.getElementById("row").value = 1;
    document.getElementById("col").value = 1;
    createEventListeners();
}

function createEventListeners() {
    document.getElementById("btnGenerateTable").addEventListener("click", createTableObjectOriented, false);
}

window.addEventListener("load", resetForm, false);
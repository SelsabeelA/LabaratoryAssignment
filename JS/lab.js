const addLabButton = document.querySelector('#Add');


const titleInput = document.querySelector('#title');
let IDInput = 1;
const buildInput = document.querySelector('#buildNum');
const floorInput = document.querySelector('#floorNum');
const capacityInput = document.querySelector('#capacity');
const chairInput = document.querySelector('#chairNum');
const pcInput = document.querySelector('#pcNum');
const statusInput = document.querySelector('#status');


function validateInput() {
    // checks if any of the input fields was empty
    if (
        titleInput.value.trim() === '' ||
        buildInput.value.trim() === '' ||
        floorInput.value.trim() === '' ||
        capacityInput.value.trim() === '' ||
        chairInput.value.trim() === '' ||
        pcInput.value.trim() === '' ||
        statusInput.value.trim() === ''
    ) {
        alert('Please fill in all the fields');
        return false;
    }

    // checks if capacity, chair and pc numbers are positive integers
    if (
        parseInt(capacityInput.value) < 0 ||
        parseInt(chairInput.value) < 0 ||
        parseInt(pcInput.value) < 0) {
        alert('Please enter valid positive numbers for number of capacity, chairs and PCs');
        return false;
    }

    return true;
}

let labs;
if (localStorage.Lab != null) {
    labs = JSON.parse(localStorage.Lab);
}
else {
    labs = [];
}


function addLabToLocalStorage() {
    let lab = {
        title: titleInput.value,
        ID: IDInput++,
        buildNumber: buildInput.value,
        floorNumber: floorInput.value,
        capacityAmount: capacityInput.value,
        chairNumber: chairInput.value,
        pcNumber: pcInput.value,
        status: statusInput.value,
    };
    labs.push(lab);
    localStorage.setItem("Lab", JSON.stringify(labs));
    console.log(labs);
    // titleInput.value = '';
    // IDInput.value = '';
    // buildInput.value = '';
    // floorInput.value = '';
    // capacityInput.value = '';
    // chairInput.value = '';
    // pcInput.value = '';
    // statusInput.value = '';

}


addLabButton.addEventListener('click', function () {
    if (validateInput()) {
        addLabToLocalStorage();
        showTable();
    }
}); 



function showTable() {
    let table = `
        <table>
            <tr>
                <th>
                    <div id="tableName">name</div>
                </th>
                <th>building number</th>
                <th>floor number</th>
                <th>capacity</th>
                <th>number of pc,s</th>
                <th>number of chairs</th>
                <th>Status</th>
            </tr>
    `;
    for (let i = 0; i < labs.length; i++) {
        if(labs[i].status === "inactive") {
            table += `<tr>
                <td><div id="tableID">${labs[i].ID}</div></td>
                <td><div id="tableName">${labs[i].title}</div></td>
                <td><div id="tableBld">${labs[i].buildNumber}</div></td>
                <td><div id="tableFlr">${labs[i].floorNumber}</div></td>
                <td><div id="tableCp">${labs[i].capacityAmount}</div></td>
                <td><div id="tablePc">${labs[i].pcNumber}</div></td>
                <td><div id="tableCh">${labs[i].chairNumber}</div></td>
                <td><div id="tableSt"><b class="inact">.</b>${labs[i].status}</div></td>
                <td><button id="btnEdit">Edit</button></td>
                <td><button id="btnDelete">Delete</button></td>
            </tr>`;
        }
        else{
            table += `<tr>
                <td><div id="tableID">${labs[i].ID}</div></td>
                <td><div id="tableName">${labs[i].title}</div></td>
                <td><div id="tableBld">${labs[i].buildNumber}</div></td>
                <td><div id="tableFlr">${labs[i].floorNumber}</div></td>
                <td><div id="tableCp">${labs[i].capacityAmount}</div></td>
                <td><div id="tablePc">${labs[i].pcNumber}</div></td>
                <td><div id="tableCh">${labs[i].chairNumber}</div></td>
                <td><div id="tableSt"><b id="light">.</b>${labs[i].status}</div></td>
                <td><button id="btnEdit">Edit</button></td>
                <td><button id="btnDelete">Delete</button></td>
            </tr>`;
        }
    }
    table += `</table>`;
    document.getElementById("table").innerHTML = table;
}


let del = document.getElementById("delete");

del.addEventListener("click", function() {
    let ans = prompt("Are You sure?");
    if (ans === 'yes') {
        location.reload();
        showTable();
        localStorage.clear();
    }
});

showTable();
//--------------------------------------------------
function searchLab() {    
    var searchTerm = document.getElementById("search").value.toLowerCase(); // Get search term from input and convert to lowercase for case-insensitive search
    var labTable = document.getElementById("labTable");
    var labTableBody = labTable.getElementsByTagName("tbody")[0]; // Get table body element
    labTableBody.innerHTML = ""; // Clear existing table body
    document.getElementById("table").disabled = true;
    for (var i = 0; i < labs.length; i++) {
        var labName = labs[i].title.toLowerCase() ; // Convert lab name to lowercase for case-insensitive comparison
  
        if (labName.includes(searchTerm)) {
            // If lab name contains search term
            var newRow = labTableBody.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            var cell7 = newRow.insertCell(6);
            var cell8 = newRow.insertCell(7);
            cell1.innerHTML = labs[i].ID;
            cell2.innerHTML = labs[i].title;
            cell3.innerHTML = labs[i].buildNumber;
            cell4.innerHTML = labs[i].floorNumber;
            cell5.innerHTML = labs[i].capacityAmount;
            cell6.innerHTML = labs[i].pcNumber;
            cell7.innerHTML = labs[i].chairNumber;
            cell8.innerHTML = labs[i].status;
       
        }
    }
  }

// -------------------------------------------------------

const EditButton = document.querySelector('#btnEdit');

// load the data into the input boxes
function loadInfo(){

  document.getElementById("idd").disabled = true;
  document.getElementById("title").disabled = true;

  var bld = document.getElementById("tableBld").value; //to be updated
  var bld = labs[i].buildNumber; //right one 
  document.getElementById("buildNum").value = bld;

  var flr = document.getElementById("tableFlr").value;
  document.getElementById("floorNum").value = flr;

  var cp = document.getElementById("tableCp").value;
  document.getElementById("capacity").value = cp;
	
  var ch = document.getElementById("tableCh").value;
  document.getElementById("chairNum").value = ch;

  var pc = document.getElementById("tablePc").value;
  document.getElementById("pcNum").value = pc;
  
  var st = document.getElementById("tableSt").value;
  document.getElementById("status").value = st;

}

//
function removeInfo(){

  document.getElementById("tableId").value = '';

  document.getElementById("tableName").value = '';

  document.getElementById("tablebld").value = '';

  document.getElementById("tableFlr").value = '';

  document.getElementById("tableCp").value = '';
	
  document.getElementById("tableCh").value = '';

  document.getElementById("tablePc").value = '';
  
  document.getElementById("tableSt").value = '';

  for (let k = i; k < labs.length - 1; k++) {
        
                <td>${labs[k].ID = labs[k + 1].ID}</td></div>
                <td>${labs[k].title = labs[k + 1].title}</td></div>
                <td>${labs[k]buildNumber = labs[k + 1].buildNumber}</td></div>
                <td>${labs[k].floorNumber = labs[k + 1].floorNumber}</td></div>
                <td>${labs[k].capacityAmount = labs[k + 1].capacityAmount}</td></div>
                <td>${labs[k].pcNumber = labs[k + 1].pcNumber}</td></div>
                <td>${labs[k].chairNumber = labs[k + 1].hairNumber}</td></div>
                <b class = "inact" >.</b>${labs[i].status = labs[k + 1].status}</td></div>
                <td><button id="btnEdit">Edit</button></td>
                <td><button id="btnDelete">Delete</button></td>
   }
}

// Edits the data in the input feilds
function editInfo (){
  loadInfo(); 
  removeInfo();
}

EditButton.addEventListener('click', function () {
  editInfo();
});


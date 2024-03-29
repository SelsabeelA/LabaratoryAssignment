const addLabButton = document.querySelector('#Add');


let titleInput = document.querySelector('#title');
let IDInput = 1;
let buildInput = document.querySelector('#buildNum');
let floorInput = document.querySelector('#floorNum');
let capacityInput = document.querySelector('#capacity');
let chairInput = document.querySelector('#chairNum');
let pcInput = document.querySelector('#pcNum');
let statusInput = document.querySelector('#status');


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
    titleInput.value = ' ';
    IDInput.value = ' ';
    buildInput.value = ' ';
    floorInput.value = ' ';
    capacityInput.value = ' ';
    chairInput.value = ' ';
    pcInput.value = ' ';
    statusInput.value = ' ';

}


addLabButton.addEventListener('click', function () {
    if (validateInput()) {
        addLabToLocalStorage();
        showTable();
    }
}); 



function showTable() {

    let table = '';
    for (let i = 0; i < labs.length; i++) {
        if(labs[i].status === "inactive") {
            table += `<tr>
            <td>${labs[i].ID}</td>
            <td>${labs[i].title}</td>
            <td>${labs[i].buildNumber}</td>
            <td>${labs[i].floorNumber}</td>
            <td>${labs[i].capacityAmount}</td>
            <td>${labs[i].pcNumber}</td>
            <td>${labs[i].chairNumber}</td>
            <td><b class = "inact" >.</b>${labs[i].status}</td>
            <td><button id="btnEdit" data-index = "${i}">Edit</button></td>
            <td><button id="btnDelete">Delete</button></td>
        </tr>`
        }
        else{
            table += `<tr>
            <td>${labs[i].ID}</td>
            <td>${labs[i].title}</td>
            <td>${labs[i].buildNumber}</td>
            <td>${labs[i].floorNumber}</td>
            <td>${labs[i].capacityAmount}</td>
            <td>${labs[i].pcNumber}</td>
            <td>${labs[i].chairNumber}</td>
            <td><b id= "light" >.</b>${labs[i].status}</td>
            <td><button id="btnEdit" data-index = "${i}">Edit</button></td>
            <td><button id="btnDelete">Delete</button></td>
            </tr>`
        }

    document.getElementById("table").innerHTML = table;
    }
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
function loadInfo(index){
  
  document.getElementById("title").value = labs[index].title;
  document.getElementById("title").disabled = true;
  
  document.getElementById("buildNum").value  = labs[index].buildNumber;

  document.getElementById("floorNum").value = labs[index].floorNumber;

  document.getElementById("capacity").value = labs[index].capacityAmount;
	
  document.getElementById("pcNum").value = labs[index].pcNumber;

  document.getElementById("chairNum").value = labs[index].chairNumber;
  
  document.getElementById("status").value = labs[index].status;
}

// //Removes editable row
function removeInfo(index){

 labs[index].buildNumber = ' ';

labs[index].floorNumber = ' ';

labs[index].capacityAmount = ' ';

labs[index].pcNumber = ' ';

 labs[index].chairNumber = ' ';
	
labs[index].status = ' ';

labs[index].title = ' ';
  
labs[index].ID = ' ';

   for (let k = index; k < labs.length - 1; k++) {
        
    {labs[k].ID = labs[k + 1].ID}
    {labs[k].title = labs[k + 1].title}
    {labs[k].buildNumber = labs[k + 1].buildNumber}
    {labs[k].floorNumber = labs[k + 1].floorNumber}
    {labs[k].capacityAmount = labs[k + 1].capacityAmount}
    {labs[k].pcNumber = labs[k + 1].pcNumber}
    {labs[k].chairNumber = labs[k + 1].chairNumber}
    {labs[k].status = labs[k + 1].status}
    
   }
  showTable();
}

// Edits the data in the input feilds
function editInfo (index){
  loadInfo(index); 
  removeInfo(index);
}

EditButton.addEventListener('click', function () {
  var index = parseInt(this.getAttribute('data-index'));
  editInfo(index);
  alert(index);
});

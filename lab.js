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
                <td><button id="btnEdit">Edit</button></td>
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
            <td><button id="btnEdit">Edit</button></td>
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


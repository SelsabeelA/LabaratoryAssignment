let addpc = document.getElementById("add");

let infopc = document.getElementById("con-addlab");
let rep = document.getElementById("con-addlab2");

function AddPc(){
    infopc.style.display = "grid";
};


function Report(){
    rep.style.display = "grid";
    infopc.style.display = "none" ;
    console.log(rep);
};

function none(){
    infopc.style.display = "none" ;
    rep.style.display = "none" ;
    console.log(infopc);
};


var stud = {
    name : "Mohamed",
    id : 123,
}

localStorage.setItem("Student", JSON.stringify(stud));
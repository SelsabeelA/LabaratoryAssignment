const addLabButton = document.querySelector('#Add');


const titleInput = document.querySelector('#title');
const IDInput = document.querySelector('#idd');
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
    IDInput.value.trim() === '' ||
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
    parseInt(pcInput.value) < 0)
  ) {
    alert('Please enter valid positive numbers for number of capacity, chairs and PCs');
    return false;
  }

  return true;
}

function addLabToLocalStorage() {
  const lab = {
    title: titleInput.value,
    ID: IDInput.value,
    buildNumber: buildInput.value,
    floorNumber: floorInput.value,
    capacityAmount: capacityInput.value,
    chairNumber: chairInput.value,
    pcNumber: pcInput.value,
    status: statusInput.value,
  };

  let labs = JSON.parse(localStorage.getItem('labs')) || [];
  labs.push(lab);
  localStorage.setItem('labs', JSON.stringify(labs));
  
  titleInput.value = '';
  IDInput.value = '';
  buildInput.value = '';
  floorInput.value = '';
  capacityInput.value = '';
  chairInput.value = '';
  pcInput.value = '';
  statusInput.value = '';
}


addLabButton.addEventListener('click', function () {
  if (validateInput()) {
    addLabToLocalStorage();
  }
});

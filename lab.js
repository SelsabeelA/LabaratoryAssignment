// Get references to the HTML elements
const addLabButton = document.querySelector('#Add');
const titleInput = document.querySelector('#title');
const IDInput = document.querySelector('#idd');
const buildInput = document.querySelector('#buildNum');
const floorInput = document.querySelector('#floorNum');
const capacityInput = document.querySelector('#capacity');
const chairInput = document.querySelector('#chairNum');
const pcInput = document.querySelector('#pcNum');
const statusInput = document.querySelector('#status');

// Define a function to validate the input
function validateInput() {
  // Check if any of the input fields are empty
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

  // Check if the capacity, chair and pc numbers are positive integers
  if (
    parseInt(capacityInput.value) < 0 ||
    parseInt(chairInput.value) < 0 ||
    parseInt(pcInput.value) < 0 ||
    isNaN(parseInt(capacityInput.value)) ||
    isNaN(parseInt(chairInput.value)) ||
    isNaN(parseInt(pcInput.value))
  ) {
    alert('Please enter valid numbers for capacity, chairs and PCs');
    return false;
  }

  return true;
}

// Define a function to add the lab to local storage
function addLabToLocalStorage() {
  // Get the lab information from the input fields
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

  // Get the existing labs from local storage
  let labs = JSON.parse(localStorage.getItem('labs')) || [];

  // Add the new lab to the array of labs
  labs.push(lab);

  // Save the updated list of labs to local storage
  localStorage.setItem('labs', JSON.stringify(labs));

  // Clear the input fields
  titleInput.value = '';
  IDInput.value = '';
  buildInput.value = '';
  floorInput.value = '';
  capacityInput.value = '';
  chairInput.value = '';
  pcInput.value = '';
  statusInput.value = '';
}

// Add an event listener to the "Add Laboratory" button
addLabButton.addEventListener('click', function () {
  // Validate the input
  if (validateInput()) {
    // Add the lab to local storage
    addLabToLocalStorage();
  }
});

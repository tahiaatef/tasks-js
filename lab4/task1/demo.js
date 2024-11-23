
let studentId = 1;

document.getElementById('addButton').addEventListener('click', function () {

    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // /////////////////////////////////////////////////////////

    let isValid = true;

    if (name.length <= 3) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (isNaN(age) || age <= 18) {
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageError.style.display = 'none';
    }

  // /////////////////////////////////////////////////


    const table = document.getElementById('studentTable');
    const existingRows = table.getElementsByTagName('tr');

    for (let row of existingRows) {
    const rowName = row.cells[1]?.textContent.trim();

    if (rowName === name) {
        alert('This student already exists in the table!');
        isValid = false;
    
    break;
    }
}

  // //////////////////////////////////////////////////


if (isValid) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${studentId}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td> <button class="deleteButton">Delete Student</button> </td> `
    ;

    table.appendChild(row);

    // /////////////////////////////////////////////////

    
    row.querySelector('.deleteButton').addEventListener('click', function () {
    row.remove();
    });

    studentId++;
    nameInput.value = '';
    ageInput.value = '';
}
});

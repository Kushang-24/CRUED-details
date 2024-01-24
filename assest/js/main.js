var records = [
    { name: 'Kushang Tanawala', age: 18, email: 'kushangtanawala@gmail.com' },
];
window.onload = function () {
    records.push();
    updateTable();
}
var edit_id;

function addRecord() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "" || age === "") {
        document.getElementById('completeError').innerHTML = 'complete the Information !';
        return;
    } else if (age <= 0) {
        document.getElementById('ageError').innerHTML = 'Invalid age!';
        return;
    } else if (records.some(record => record.email === email)) {
        document.getElementById('emailError').innerHTML = 'Record with the same email already exists !';
        return;
    }

    const record = { name, age, email };
    records.push(record);

    updateTable();
    saveToLocalStorage();
    clearForm();
}
function updateInfo() {
    let Username = document.getElementById('name').value;
    let Userage = document.getElementById('age').value;
    let Useremail = document.getElementById('email').value;

    let recordObject = { Username, Userage, Useremail };

    records[edit_id].name = Username;
    records[edit_id].age = Userage;
    records[edit_id].email = Useremail;
    updateTable();
    saveToLocalStorage();
}
function updateTable() {
    const tableBody = document.getElementById('recordsTableBody');
    tableBody.innerHTML = '';

    records.forEach((record, id) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
                    <td>${record.name}</td>
                    <td>${record.age}</td>
                    <td>${record.email}</td>
                    <td>
                         <button type="button" class="btn btn-warning btn-sm" onclick="editRecord(${id})">Edit</button>
                         <button type="button" class="btn btn-danger btn-sm" onclick="deleteRecord('${record.email}')">Delete</button>
                    </td>`;
    });

}
function editRecord(id) {
    console.log(id)
    edit_id = id
    const record = records[id];

    document.getElementById('name').value = record.name;
    document.getElementById('age').value = record.age;
    document.getElementById('email').value = record.email;

    updateTable();
    saveToLocalStorage();
}
function deleteRecord(email) {
    records = records.filter(record => record.email !== email);

    updateTable();
    saveToLocalStorage();
}
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('completeError').innerHTML = '';
    document.getElementById('ageError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

}
function saveToLocalStorage() {
    localStorage.setItem('records', JSON.stringify(records));
}
function loadFromLocalStorage() {
    const storedRecords = localStorage.getItem('records');
    if (storedRecords) {
        records = JSON.parse(storedRecords);
        updateTable();
    }
}
loadFromLocalStorage();

class Record {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

let records = [];

function addRecord() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    if (!name || !age || !email) {
        alert('Please enter all fields.');
        return;
    }
    if (name == age == email) {
    } else {
        alert("Username already exists.")
        clearForm()
        deleteRecord(index)

    }

    const newRecord = new Record(name, age, email);
    records.push(newRecord);

    displayRecords();
    clearForm();
}
window.onload = function () {
    records.push({ name: "Kushang Tanawala", age: 18, email: "kushangtanawal@gmail.com" });
    displayRecords();
};
function displayRecords() {
    const tableBody = document.getElementById('recordTableBody');
    tableBody.innerHTML = '';

    records.forEach((record, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
                 <td>${record.name}</td>
                 <td>${record.age}</td>
                 <td>${record.email}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editRecord(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Delete</button>
            </td>
`;
    });
}

function editRecord(index) {
    const record = records[index];
    document.getElementById('name').value = record.name;
    document.getElementById('age').value = record.age;
    document.getElementById('email').value = record.email;

    records.splice(index, 1);
    displayRecords();
}

function deleteRecord(index) {
    records.splice(index, 1);
    displayRecords();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
}


// Table Responsive Code //

$(document).ready(function () {
    $('.table-responsive-stack').each(function (i) {
        var id = $(this).attr('id');
        $(this).find("th").each(function (i) {
            $('#' + id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ':</span> ');
            $('.table-responsive-stack-thead').hide();
        });
    });

    $('.table-responsive-stack').each(function () {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        $(this).find("th, td").css('flex-basis', rowGrow);
    });

    function flexTable() {
        if ($(window).width() < 768) {

            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").show();
                $(this).find('thead').hide();
            });
        } else {
            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").hide();
                $(this).find('thead').show();
            });
        }
    }

    flexTable();

    window.onresize = function (event) {
        flexTable();
    };
});




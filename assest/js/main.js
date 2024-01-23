let records = [
    { name: 'Kushang Tanawala', age: 18, email: 'kushangtanawala@gmail.com' },
];

function displayRecords() {
    const tableBody = document.getElementById('recordsTableBody');
    tableBody.innerHTML = '';

    records.forEach(record => {
        const row = `<tr>
                        <td>${record.name}</td>
                        <td>${record.age}</td>
                        <td>${record.email}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editRecord('${record.email}')">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteRecord('${record.email}')">Delete</button>
                        </td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
}

function addOrUpdateRecord() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    const existingRecord = records.find(record => record.email === email);

    if (!name || !age || !email) {
        alert('All Fields Are Required.');
        return;
    } else if (age <= 0) {
        alert('You Enter Wrong Age')
        return;
    } else if (existingRecord) {
        alert('Record Already Exists.');
    } else {
        const newRecord = { name, age, email };
        records.push(newRecord);
        displayRecords();
    }
    clearForm()
}

function editRecord(email) {
    const recordToEdit = records.find(record => record.email === email);

    if (recordToEdit) {
        document.getElementById('name').value = recordToEdit.name;
        document.getElementById('age').value = recordToEdit.age;
        document.getElementById('email').value = recordToEdit.email;

        records = records.filter(record => record.email !== email);

        displayRecords();
    }
}

function deleteRecord(email) {
    records = records.filter(record => record.email !== email);
    displayRecords();
}

displayRecords();







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

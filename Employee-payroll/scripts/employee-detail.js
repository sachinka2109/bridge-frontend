
function displayData() {
    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'GET',
        success: function (data) {
            // console.log(data);
            for(let i = 0; i < data.length; i++) {
                let employee = data[i];
                // console.log(employee);
                let departments = JSON.parse(employee.department);
                const newRow = document.createElement('tr');
                newRow.id = employee.id;
                newRow.innerHTML = `
                <td style="text-align: right; width: 35px;"><img src="${employee.imageUrl}"></td>
                <td>${employee.name}</td>
                <td>${employee.gender}</td>
                <td>
                    <span class='department-data'>
                        ${departments.map(department => `<span>${department}</span>`).join(' ')}
                    </span>
                </td>
                <td>${employee.salary}</td>
                <td>${employee.startDate}</td>
                <td>
                    <div class="actions">
                        <i class="fa-solid fa-trash-can" onclick="deleteItem(${employee.id})"></i>
                        <i class="fa-solid fa-pen" style="margin-left: 15px;" onclick="editEmployee(${employee.id})"></i>
                    </div>
                </td>
                `
                const tableBody = document.getElementById('employeeData');
                tableBody.appendChild(newRow);
            }
        },
        // error: function (error) {
        //     console.log(error);
        // }
    });
}
displayData();

function deleteItem(id) {
    $.ajax({
        url: `http://localhost:3000/employees/${id}`,
        type: 'DELETE',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function editEmployee(id) {
    localStorage.setItem('employee', id);
    window.location.href = 'http://127.0.0.1:5500/Employee-payroll/pages/payroll-form.html';
}
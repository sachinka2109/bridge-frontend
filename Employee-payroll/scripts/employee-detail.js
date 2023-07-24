let data;
function displayData() {
    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'GET',
        success: function (data) {
            for(let i = 0; i < data.length; i++) {
                let employee = data[i];
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                <td style="text-align: right; width: 35px;"><img src="${employee.imageUrl}"></td>
                <td>${employee.name}</td>
                <td>${employee.gender}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.startDate}</td>
                <td></td>
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
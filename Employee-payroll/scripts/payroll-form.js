let id = localStorage.getItem('employee');
let name = document.getElementById('name');
let img = document.getElementsByName('image');
let gender1 = document.querySelector('#male');
let gender2 = document.querySelector('#female');
let checkbox = document.getElementsByName('department');
let salary = document.getElementById('select-salary');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let notes = document.getElementById('notes');
let gender;
let imageUrl;
let selectedDepartment = [];
let submitButton = document.getElementsByClassName('submit-btn')[0];
let updateButton = document.getElementsByClassName('update-btn')[0];
let form = document.getElementById('form');

if(localStorage.getItem('employee')) {
    getData();
    submitButton.style.display = 'none';
    updateButton.style.display = 'block';
} else {
    submitButton.style.display = 'block';
    updateButton.style.display = 'none';
}

updateButton.addEventListener('click',updateData);

function onSubmit(event) {
    event.preventDefault();
    name = name.value;
    salary = salary.value;
    day = day.value;
    month = month.value;
    year = year.value;
    notes = notes.value;
    console.log(name + ' ' + salary + ' ' + day + ' ' + month + ' ' + year + ' ' + notes)
    for (let i = 0; i < img.length; i++) {
        if (img[i].checked) {
            imageUrl = img[i].value;
            break;
        }
    }

    let gender;
    if(gender1.checked) {
        gender = gender1.value;
    } else {
        gender = gender2.value;
    }
    
    let selectedDepartment = [];
    for(let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked) {
            selectedDepartment.push(checkbox[i].value);
        }
    }
    selectedDepartment.sort().reverse();
    
    const data = {
        name: name,
        imageUrl: imageUrl,
        gender:gender,
        department:JSON.stringify(selectedDepartment),
        salary: salary,
        startDate: `${day} ${month} ${year}`, 
        notes:notes
    }
    console.log(data);
    
    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'POST',
        data: data,
        success: function (data) {
            console.log(data);
            onReset();
        },
        // error: function (error) {
        //     console.log(error);
        // }
    });
}

function getData() {
    $.ajax({
        url: `http://localhost:3000/employees/${id}`,
        type: 'GET',
        success: function (data) {
            setTimeout(() => {               
                name.value = data.name;
                for(let i = 0; i < img.length; i++) {
                    if(data.imageUrl === img[i].value) {
                        img[i].checked = true;
                        break;
                    }
                }           
                if(data.gender === 'Male') {
                    gender1.checked = true;
                } else { 
                    gender2.checked = true;
                }
                let depart = JSON.parse(data.department);
                for(let i = 0; i < depart.length; i++) {
                    for(let j = 0; j < checkbox.length; j++) {
                        if (depart[i] === checkbox[j].value) {
                            checkbox[j].checked = true;
                            break;
                        }
                    }
                }
                // salary.value = data.salary;
                salary.value = data.salary;
                day.value = data.startDate.split(' ')[0];
                month.value = data.startDate.split(' ')[1];
                year.value = data.startDate.split(' ')[2];
                notes.innerHTML = data.notes;
            }, 200);
        },
        // error: function (error) {
        //     console.log(error);
        // }
    });
}

function updateData(event) {
    event.preventDefault();
    for (let i = 0; i < img.length; i++) {
        if (img[i].checked) {
            imageUrl = img[i].value;
            break;
        }
    }  

    if(gender1.checked) {
        gender = gender1.value;
    } else {
        gender = gender2.value;
    }
    for(let i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked && !selectedDepartment.includes(checkbox[i].value)) {
            selectedDepartment.push(checkbox[i].value);
        }
    }
    selectedDepartment.sort().reverse();
    const data = {
        name: name.value,
        imageUrl: imageUrl,
        gender:gender,
        department:JSON.stringify(selectedDepartment),
        salary: salary.value,
        startDate: `${day.value} ${month.value} ${year.value}`, 
        notes:notes.value,
        id:id,
    }
    console.log(data);
    $.ajax({
        url: `http://localhost:3000/employees/${id}`,
        type: 'PUT',
        data: data,
        success: function (data) {
            console.log(data);
            localStorage.removeItem('employee');
            onReset();
            window.location.href = 'http://127.0.0.1:5500/Employee-payroll/pages/employee-detail.html'
        },
        // error: function (error) {
        //     console.log(error);
        // }
    });
}


function onCancel() {
    window.history.go(-1);
}

function onReset(event) {
    let form = document.getElementById('form');
    form.reset();
}



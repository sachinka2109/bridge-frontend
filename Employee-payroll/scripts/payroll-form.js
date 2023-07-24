let oddMonth = document.getElementById('oddMonth'); 
let month = document.getElementById('month').value;
let imageUrl;

// document.getElementById('day').addEventListener('change', function() {
//     var selectedDay = this.value;
//     if(selectedMonth && selectedDay === '31') {

//     }
// });

// document.getElementById('month').addEventListener('change', function() {
//     var selectedMonth = this.value;
//     if (selectedMonth === 'January' || selectedMonth === 'March' || selectedMonth === 'May' || selectedMonth === 'July' || selectedMonth === 'August' || selectedMonth === 'October' || selectedMonth === 'December') {
//         oddMonth.style.display = 'none';
//     } else {
//         oddMonth.style.display = 'block';
//     }
// });

// document.getElementById('year').addEventListener('change', function() {
//     var selectedMonth = this.value;
//     console.log('Selected month:', selectedMonth);
// });


function onSubmit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let img = document.getElementsByName('image');
    let gender1 = document.querySelector('#male');
    let gender2 = document.querySelector('#female');
    let checkbox = document.getElementsByName('department');
    let salary = document.getElementById('select-salary').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let notes = document.getElementById('notes').value;
    
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

    if(selectedDepartment.length > 0) {
        selectedDepartment.join(',');
    }
    console.log(selectedDepartment)
    const data = {
        name: name,
        imageUrl: imageUrl,
        gender:gender,
        department:selectedDepartment,
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
        },
        // error: function (error) {
        //     console.log(error);
        // }
    });
}

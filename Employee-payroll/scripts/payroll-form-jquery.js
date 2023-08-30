let id = localStorage.getItem('employee');

$(function(){
    if(localStorage.getItem('employee')) {
        getData();
        $('.submit-btn').hide();
        $('.update-btn').show();
    } else {
        $('.submit-btn').show();
        $('.update-btn').hide();
    }
}) 

$('.update-btn').on('click', updateData);
$('#form').on('submit',onSubmit);



function onSubmit() {
    $(function() {
        let imageUrl;
        let gender;
        let selectedDepartment = [];
        // console.log(name + ' ' + salary + ' ' + day + ' ' + month + ' ' + year + ' ' + notes)
        // $("input[name='image']").each(function() {
        //     if($(this).is(':checked')) {
        //         imageUrl = $(this).val();
        //         return false;
        //     }
        // })
        imageUrl = $("input[name='image']:checked").val();
    
        if($('#male').is(':checked')) {
            gender = $('#male').val();
        } else {
            gender = $('#female').val();
        }
        
        $("input[name='department']").each(function () {
            if($(this).is(':checked')) {
                selectedDepartment.push($(this).val());
            }
        })
        selectedDepartment.sort().reverse();
    
        const data = {
            name: $('#name').val(),
            imageUrl: imageUrl,
            gender:gender,
            department:JSON.stringify(selectedDepartment),
            salary:  $('#select-salary').val(),
            startDate: `${$('#day').val()} ${$('#month').val()} ${$('#year').val()}`, 
            notes:$('#notes').val()
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
    })
}


function getData() {
    $.ajax({
        url: `http://localhost:3000/employees/${id}`,
        type: 'GET',
        success: function (data) {
            $('#name').val(data.name);
            $("input[name='image']").each(function () {
                if(data.imageUrl === $(this).val()) {
                    $(this).prop('checked', true);;
                    return false;
                }
            })        

            if(data.gender === 'Male') {
                $('#male').prop('checked', true);
            } else {
                $('#female').prop('checked', true);
            }
            let depart = JSON.parse(data.department);

            for(let i = 0; i < depart.length; i++) {
                $("input[name='department']").each(function() {
                    if(depart[i] === $(this).val()) {
                        $(this).prop('checked', true);
                        return false;
                    }
                })
            }
            // salary.value = data.salary;
            $('#select-salary').val(data.salary);
            $('#day').val(data.startDate.split(' ')[0]);
            $('#month').val(data.startDate.split(' ')[1]);
            $('#year').val(data.startDate.split(' ')[2]);
            $('#notes').val(data.notes);
        },
        // error: function (error) {
        //     console.log(error);
        // }
    });
}

function updateData() {
        let imageUrl;
        let gender;
        let selectedDepartment = [];
        $("input[name='image']").each(function() {
            if($(this).is(":checked")) {
                imageUrl = $(this).val();
                return false;
            }
        })

        if($('#male').is(':checked')) {
            gender = $('#male').val();
        } else {
            gender = $('#female').val();
        }
    
        $("input[name='department']").each(function() {
            if($(this).is(":checked") && !selectedDepartment.includes($(this).val())) {
                selectedDepartment.push($(this).val());
            }
        })
        selectedDepartment.sort().reverse();
        const data = {
            name: $('#name').val(),
            imageUrl: imageUrl,
            gender:gender,
            department:JSON.stringify(selectedDepartment),
            salary: $('#select-salary').val(),
            startDate: `${$('#day').val()} ${$('#month').val()} ${$('#year').val()}`, 
            notes:$('#notes').val(),
            id:id,
        }
        console.log(data);
    $(function() {
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
    })
}


function onCancel() {
    localStorage.removeItem('employee');
    window.history.go(-1);
}

function onReset() {
    $('#form')[0].reset();
}
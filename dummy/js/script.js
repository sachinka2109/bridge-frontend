// let myForm = document.getElementById('myForm');


// myForm.addEventListener('submit', function() {
//     let fname = document.getElementById('firstname').value;
//     let lname = document.getElementById('lastname').value;
//     console.log(fname,lname);

//     const data = {
//         firstname : fname,
//         lastname : lname,
//     }
//     console.log(data);

//     $.ajax({
//         url: 'http://localhost:3000/employees',
//         type: 'POST',
//         data: data,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (error) {
//             console.log(error);
//         }
//     });
// })

function onSubmit(event) {
    event.preventDefault();
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;
    console.log(fname,lname);
    
    const data = {
        firstname : fname,
        lastname : lname,
    }
    console.log(data);
    
    setTimeout(() => {
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
    },2000)
}
// let container = document.getElementById('container');
// let button = document.getElementsByClassName('button')[0];
// let text = document.getElementsByClassName('text')[0];

// text.style.display = 'none';

// button.addEventListener('click',function() {
//     if(text.style.display == 'block') {
//         text.style.display = 'none';
//         container.style.border = '1px solid black';
//     } else {
//         text.style.display = 'block';
//         container.style.border = '1px solid red';
//     }
// });

$('.text').hide();

$('.button').on('click', function() {
    $('.text').toggle();
    // $('#container').toggle(function() {
    //     $('#container').css('border','1px solid red')
    // },
    // function() {
    //     $('#container').css('border','1px solid black')
    // })
    $('.container').toggleClass('border');
})


document.getElementById('day').addEventListener('change', function() {
    var selectedMonth = this.value;
    console.log('Selected month:', selectedMonth);
});

document.getElementById('month').addEventListener('change', function() {
    var selectedMonth = this.value;
    console.log('Selected month:', selectedMonth);
});

document.getElementById('year').addEventListener('change', function() {
    var selectedMonth = this.value;
    console.log('Selected month:', selectedMonth);
});

function select(callback) {
    callback();
}

function select1() {
    console.log(select1);
}

select(select1);
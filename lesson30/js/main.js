var x = 5;

if (x>2){
    console.log("x is greater than 2");
} else{
    console.log("x is less than 2");
}


var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');


button.onclick = function() {
    text.innerHTML = input.value;
}

var input1 = document.getElementById('input_id1')
var input2 = document.getElementById('input1_id')
var button = document.getElementById('btn1_id')
var text = document.getElementById('txt_1')

button.onclick = function() {
    text.innerHTML = input1.value+input2.value;
}

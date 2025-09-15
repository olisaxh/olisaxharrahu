var v_button = document.getElementById("btn1");
var v_button2 = document.getElementById("btn2");
var v_text = document.getElementById("btn3");

var v_circle = document.getElementById("circle");
var v_rectangle = document.getElementById("rectangle");
var v_triangle = document.getElementById("triangle");

v_button.onclick = function() {
    v_circle.setAttribute("class", "circle")
}

v_button2.onclick = function() {
    v_rectangle.setAttribute("class", "rectangle")
}

v_text.onclick = function() {
    v_triangle.setAttribute("class", "triangle")
}
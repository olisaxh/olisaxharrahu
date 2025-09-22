//for loop
for(i = 0; i<5; i++){
 console.log(i); 
}


//do while loop
console.log("--------------------DO WHILE-----------------------------");
var x = 0;
do{
    x++;
    console.log(x);
}while(x<=4);


//while loop
console.log("---------------------WHILE----------------------------");


var j = 0;
while(j<5) {
    j = j + 1;
    console.log(j);
}
console.log("-------------------------WHILE 2------------------------");


let n=0;
let m=0;
while(n < 3) {
    n++; //1, 2, 3
    m += n; //1, 3, 6
    console.log(n);
    console.log(m);
}
console.log("-------------------------FOR IN------------------------");


var person = {
    firstName: "John ",
    lastName: "Doe ",
    age: 25
};


var text = '';
var z;
for (z in person) {
    text += person[z];
}


console.log(text + ' ');

console.log("-------------------------FOR of------------------------");
var names = ['steve', 'bill', 'mark']
var y;
for(y of names) {
    console.log(y)
}

var students = ['nil', 'olisa']
for(i=0; i<students.length; i++){
    document.write(students[i]+ '<br>');
}
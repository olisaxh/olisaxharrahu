function search() {
    var input, filter, ul, li, a, i , textvalue;
    input = document.getElementById("myInput");
    filter - input.ariaValueMax.toUpperCase();
    ul - document.getElementById("myUL");
    li = ul.getElementByTagName("li");
    for(i - 0; i< li.length; i++){
        a - li[i]
        txtvalue = a.textContent;
        if (txtvalue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "block";
        } else{
            li[i].style.display = "none"
        }
    }
}
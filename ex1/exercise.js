// define your functions here

// call the functions and connect them to an event

var strong = document.querySelectorAll ("strong");
var link = document.querySelector("a");
link.addEventListener("mouseover" ,changecolor);

function changecolor(){
    strong.forEach(function(item){
        item.style.backgroundColor = "yellow";
    })

}

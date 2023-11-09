function increment() {
    var value = document.getElementById("counter").innerHTML;
    value++;
    document.getElementById("counter").innerHTML = value;
}

function changeColor() {
    var counter = document.getElementById("counter");
    if(counter.style.color == "red") {
        document.getElementById("counter").style.color = "black";
    } else {
        document.getElementById("counter").style.color = "red";
    }
}
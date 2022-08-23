var car = localStorage.getItem("car")
var model = localStorage.getItem("model")
var year = localStorage.getItem("year")
var fname = localStorage.getItem("fname")
var lname = localStorage.getItem("lname")
var phone = localStorage.getItem("phone")
var address = localStorage.getItem("add")
var expecteddate = localStorage.getItem("ed")

document.getElementById("car-choose").innerHTML = car;
document.getElementById("model-choose").innerHTML = model;
document.getElementById("year-choose").innerHTML = year;
document.getElementById("firstname").innerHTML = fname;
document.getElementById("lastname").innerHTML = lname;
document.getElementById("phone").innerHTML = phone;
document.getElementById("add").innerHTML = address;
document.getElementById("ed").innerHTML = expecteddate;
document.getElementById("cd").innerHTML = new Date().toDateString();
document.getElementById("print").onclick = function(){
    window.print()
}
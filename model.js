
var selectedCar = localStorage.getItem("car")

var progressBar = document.createElement("div")
progressBar.setAttribute("style", "background-color:yellow; width:50%; height:1rem; margin:.5rem")
document.getElementById("modelBody").append(progressBar);

if(selectedCar == "audi"){
    document.getElementById("audi-model").style.display = "flex";
    document.getElementById("bmw-model").style.display = "none";
    document.getElementById("honda-model").style.display = "none";

}else if(selectedCar == "bmw"){
    document.getElementById("audi-model").style.display = "none";
    document.getElementById("bmw-model").style.display = "flex";
    document.getElementById("honda-model").style.display = "none";

}else if(selectedCar == "honda"){
    document.getElementById("audi-model").style.display = "none";
    document.getElementById("bmw-model").style.display = "none";
    document.getElementById("honda-model").style.display = "flex";
}

document.getElementById("camry").onclick = function(){
    localStorage.setItem("model", "camry");
    window.location.href = "/year.html"
}
document.getElementById("Lexus").onclick = function(){
    localStorage.setItem("model", "lexus");
    window.location.href = "/year.html"
}
document.getElementById("rav4").onclick = function(){
    localStorage.setItem("model", "rav4");
    window.location.href = "/year.html"
}

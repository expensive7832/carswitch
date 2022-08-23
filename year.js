var progressBar = document.createElement("div")


var selectedmodel = localStorage.getItem("model")

if(selectedmodel == "camry"){
    document.getElementById("camry-year").style.display = "flex";
    document.getElementById("lexus-year").style.display = "none";
    document.getElementById("rav4-year").style.display = "none";

}else if(selectedmodel == "rav4"){
    document.getElementById("camry-year").style.display = "none";
    document.getElementById("rav4-year").style.display = "flex";
    document.getElementById("lexus-year").style.display = "none";

}else if(selectedmodel == "lexus"){
    document.getElementById("camry-year").style.display = "none";
    document.getElementById("rav4-year").style.display = "none";
    document.getElementById("lexus-year").style.display = "flex";
}

document.getElementById("first").onclick = function(){
    localStorage.setItem("year", 2000)
    window.location.href = "/form.html"
}
document.getElementById("second").onclick = function(){
    localStorage.setItem("year", 2005)
    window.location.href = "/form.html"
}
document.getElementById("third").onclick = function(){
    localStorage.setItem("year", 1998)
    window.location.href = "/form.html"
}
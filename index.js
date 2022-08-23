//console.log(document.getElementById("year").children[0].children[0].nextElementSibling.innerHTML)
//console.log(document.getElementById("toyota").children[0].innerHTML)

//document.getElementById("click").onclick = function(){
//    document.getElementById("firstp").innerHTML = 100000;
//   
//}
//
//
//document.getElementById("secondp").onmouseenter = function(){
//    document.getElementById("secondp").style.transition = "all 3s ease-in-out";
//    document.getElementById("secondp").style.transform = "scale(1.09)";
//    document.getElementById("secondp").style.outline = "2px groove green";
//}
//
//document.getElementById("secondp").onmouseleave = function(){
//    
//    document.getElementById("secondp").style.transform = "scale(1)";
//    document.getElementById("secondp").style.outline = "none";
//}
//
//document.getElementById("click").onclick = function(e){
//    //document.getElementById("show").innerHTML = document.getElementById("name").value
//
//    e.preventDefault()
//    window.location.href = "/index.html"
//}

document.getElementById("audi").onclick = function(){
    localStorage.setItem("car", "audi")
    window.location.href = "/model.html"
}

document.getElementById("bmw").onclick = function(){
    localStorage.setItem("car", "bmw")
    window.location.href = "/model.html"
}

document.getElementById("honda").onclick = function(){
    localStorage.setItem("car", "honda")
    window.location.href = "/model.html"
}





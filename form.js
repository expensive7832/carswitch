document.getElementById("submit").onclick = function(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var add = document.getElementById("add").value;
    var phone = document.getElementById("phone").value;
    var ed = document.getElementById("ed").value;

    var namepattern = /^[a-z]+$/
    var phonepattern = /^\+?[0-9]+\-?[0-9]+$/

    if(fname === ""){
        alert("firstname cannot be empty")
 
    }else if(!namepattern.test(fname)){
        alert("invalid firstname");

    }else if(lname === ""){
        alert("lastname cannot be empty")

    }else if(!namepattern.test(lname)){
        alert("invalid lastname")

    }else if(phone === ""){
        alert("phone nummber cannot be empty");

    }else if(!phonepattern.test(phone)){
        alert("phone nummber not valid");
        
    }else if(add === ""){
        alert("address cannot be empty");

    }else if(ed === ""){
        alert("expected date canoot be empty")
    }
    else{
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("add", add);
        localStorage.setItem("phone", phone);
        localStorage.setItem("ed", ed);
        window.location.href = "/details.html"
     }
}

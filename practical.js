function check() {
var fname = document.getElementById('fname').value;
var mname = document.getElementById('mname').value;
var lname = document.getElementById('lname').value;
var male = document.getElementById('m').checked;
var female = document.getElementById('f').checked;
var std = document.getElementById('std').value;
var num = document.getElementById('num').value;
if (fname=='' || mname==null || mname=='' || lname==null || lname=='' || fname==null) {
   alert("Please, check your name details. They can't be empty.");
   return false;   
}
else if (male==false && femal==false){
     alert("Please select your gender.")
     return false;
}
else if (num.length<10 || num.length>10) {
    alert("Please, check your number and try again.");
    return false;
}
else {
     document.write("as per your given details :");
     document.writeln("Your name is "+fname+" "+mname+" "+lname+".");
     document.writeln("Your current standard is "+std+".");
     document.writeln("Your Contact number is "+num+".");
     document.writeln("Thank you for visiting our school.");
     document.writeln("Our authority will check your details and conform your admission in our school.");
}
}
var open= "no";
function burger() {
if (open=="no") {
document.getElementById('stick1').style.transform = "rotate(45deg) translate(9px, 13px)";
 document.getElementById('stick3').style.transform = "rotate(-45deg) translate(9px, -10px)";
document.getElementById('stick2').style.visibility = "hidden";  
document.getElementById('menu').style.height = "5%";
document.getElementById('menu').style.width = "80%";
document.getElementById('menu').style.visibility = "visible";
 open = "yes";
 }
else if (open=="yes") {
document.getElementById('stick1').style.transform = "rotate(0deg) translate(0px)";
 document.getElementById('stick3').style.transform = "rotate(0deg) translate(0px)";
document.getElementById('stick2').style.visibility = "visible";  
 document.getElementById('menu').style.height = "0%";
document.getElementById('menu').style.width = "0%";
document.getElementById('menu').style.visibility = "hidden";
 open = "no";
}
}

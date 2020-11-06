 //Display value
 function dis(val) 
 { 
     document.getElementById("result").value+=val 
 } 
   
 //Calculate value
 function solve() 
 { 
     let x = document.getElementById("result").value 
     let y = eval(x) 
     document.getElementById("result").value = y 
 } 
   
 //Clear value
 function clr() 
 { 
     document.getElementById("result").value = "" 
 } 

 //Event lister: Enter
 var output = document.getElementById("result");
output.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("equal").click();
  }
});
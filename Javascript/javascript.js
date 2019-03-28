//Display the sum of 10 + 5, using two variables x and y.



function myJavahead(){
    document.getElementById("jeta").innerHTML = "It is also javascript.";
}        
        
        
        
        
        
function myValidity(){
    var x, text;
        
    // Get the value of the input field with id="numb"
    
x = document.getElementById("numb").value;
        
// If x is Not a Number or less than one or greater than 5

if (isNaN(x) || x < 1 || x > 5){
    text = "Input Invalid";
}        
else
    {
        text = "Input Valid";
    }
document.getElementById("gemo").innerHTML = text;
}
        
     
        
function myFunction() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px";           
    x.style.color = "red"; 
}

function changeImage() {
    var image = document.getElementById('myImage');
    if
        (image.src.match("bulbon")) {
            image.src = "img/pic_bulboff.gif";
        } 
    else
        {
            image.src = "img/pic_bulbon.gif";
        }
}
    
   var x = 5;
   var y = "Funke";
   var z = x + y;
   document.write(z);
    
        var num1 = 5;
        var num2 = 8;
        
       document.write(num1 + num2);
        var subtract = num1 - num2;
        var multiply = num1 * num2;
        var divide = num1/num2;
        
        document.write("<br>" + subtract + "<br>" + multiply + "<br>" + divide);

        num1++;
        document.write("<br>" + num1);
        
        num2--;
        documnent.write("<br>" + num2);


function myAlert(){
  window.alert(30 + 50);  
}

// Testing codebyter conditionals
<!--
    var g = 7;

if (g === 5){
    'Correct';
    }
else if (g === 7){
        'else if was executed';
        }
else {
    'else statement was executed';
}
-->
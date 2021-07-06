   
function div(a,b) 
{
      return a/b;
}
function plus(a,b) 
{
      return a+b;
}
function minus(a,b) 
{
      return a-b;
}
function mul(a,b) 
{
      return a*b;
}
function mathOperation(a, b, operation) 
{
     switch (operation) {
                 
                    case "addition": 
                    case 1: return  alert(" A + B = "+plus(a,b));
                    case "subtraction":
                    case 2: return alert(" A - B = "+minus(a,b));
                    case "multiplication":
                    case 3: return alert(" A X B = "+mul(a,b));
                    case "division" :
                    case 4: return alert(" A / B = "+div(a,b));
                        }
}

do {
var a = prompt("Enter the variable A :");
}while  (isNaN(a));
do {
var b = prompt("Enter the variable B :");
}while  (isNaN(b) || (b==0) ) ;

var operation = prompt("Select math function : \r\n1 - Addition \r\n2 - Subtraction \r\n3 - Multiplication \r\n4 - Division  \r\n");

if  (isNaN(operation)) operation = operation.toString().trim().toLowerCase();
else  operation = parseInt(operation);

a = parseInt(a);
b = parseInt(b);

mathOperation(a, b, operation);

// end of file

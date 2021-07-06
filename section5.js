do {
var a = prompt("Enter the variable A :");
}while  (isNaN(a));
do {
var b = prompt("Enter the variable B :");
}while  (isNaN(b) || (b==0) ) 
    
a = parseInt(a);
b = parseInt(b);

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

var joke =  parseInt(Math.random()*(4-1) + 1);

    switch (joke) {
                    case 1: alert(" A - B = "+minus(a,b));
                            break;
                    case 2: alert(" A + B = "+plus(a,b));
                            break;
                    case 3: alert(" A X B = "+mul(a,b));
                            break;
                    case 4: alert(" A / B = "+div(a,b));
                            break;
}
/* end of file */
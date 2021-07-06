function power(val, pow) 
{
    
    let temp;
    if (pow == 0) 
            return  1;
    if (val  == 0) 
            return 0;
        
    temp = power (val , parseInt (pow /2));
    
    if (pow % 2 ==0) 
            return temp * temp;
    else {
            if (pow > 0) 
                    return val * temp * temp ;
            else 
                    return ( temp * temp ) / val ;
         }
}

var a = prompt("Enter the variable A :");
var b = prompt("Enter the variable B :");
a = parseInt(a);
b = parseInt(b);
var result = power( a,b);
document.write(" <br />" );
document.write(" <br />" );
document.write(" <br />" );
document.write(" <h1>" );
                    document.write(" A");
                    document.write("<sup>");
                    document.write("B");
                    document.write("</sup>");
                    document.write(" = " +result );
document.write(" </h1>" );
/* end of file */
var busket = [];	

var price = [];

busket.push('Fluoxetine HCl');
busket.push('Metoprolol Succinatee');
busket.push('Omeprazole (Rx)'); 
busket.push('Triamcinolone Acetonide');
busket.push('Risperidone');

function priceAdd(array1,array2) {

    for(var i = 0; i < array1.length; i++) {
             var val=parseInt(Math.random()*(4500 - 400)+400);
                    array2[i]=val;
        }
}
 
function showIt(busket) {
 for(var i = 0, str =''; i < busket.length; i++) {
        str =(i +1) + ") "+busket [i]; 
        document.write(str);
        document.write("<br />");
        str = '';
}
}
   priceAdd(busket,price);
   document.write(" <p> In cart now:  </p>");
   showIt(busket);
   document.write(" <p> The cost of each item in the cart:  </p>");
   showIt(price);
   document.write("<br />");
/* end of file */
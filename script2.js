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

function countBasketPrice( busket) {
    var sum=0;
    for(var i = 0; i < busket.length; i++) {
        sum = sum + parseInt(busket[i]); 
    }
 return sum;      
}

function unionArrays(arr,arr2){
     arr4 =[];
	for(var i = 0; i<arr.length; i++){
	    arr4.push({arr: arr[i], arr2: arr2[i]});
}
  return arr4;
}

var  cart = [];
priceAdd(busket,price);
cart = unionArrays(busket,price);
document.write(" <p> In cart now:  </p>");
showIt(busket);
document.write("<br />");
alert( "All items will cost : " + countBasketPrice( price));
/* end of file */

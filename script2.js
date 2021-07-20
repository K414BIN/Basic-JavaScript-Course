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
  var str = "  =  ";
  for(var i = 0; i < busket.length; i++) {
  document.write(i+1+")  ");
  document.write(busket[i].Items);
  document.write(str);
  document.write(busket[i].Price);
  document.write("<br />");
}
  busket.forEach((element) => { console.log(element)});  

}
function countBasketPrice( busket) {
    var sum=0;
    for(var i = 0; i < busket.length; i++) {
        sum = sum + parseInt(busket[i].Price);
    }
return sum;     
}

function unionArrays(arr,arr2){
     arr4 =[];
for(var i = 0; i<arr.length; i++){
    arr4.push({Items: arr[i], Price: arr2[i]});
}
  return arr4;
}

var  cart = [];
priceAdd(busket,price);
cart = unionArrays(busket,price);

const  ShoppingCart = Object.assign(cart);

document.write(" <p> In cart now:  </p>");
showIt(cart); 
document.write("<br />");

alert( "All items will cost : " + countBasketPrice( ShoppingCart));
/* end of file */

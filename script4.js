var megaCounter=-1;

function makeCounter(x) {
  var i = x;
  var fine = i + 1;
  return function() { 
    for (  ; i<fine; i +=1 )  { /* this is empty  */};
    return i;
    };
}
while (megaCounter < 9) {
 var counter  = makeCounter(megaCounter);
 alert (counter());
 megaCounter+=1;
}
/*end of file */
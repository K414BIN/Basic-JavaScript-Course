var megaCounter=-1;

for ( megaCounter=0 ; megaCounter <10 ; alert(megaCounter++)) { /* тут пусто  */ }
/* Я ни за что не догадался бы до такого ! */
megaCounter=-1;
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
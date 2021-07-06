var a = 2;
var x = 1 + ( a *= 2);
/* Это еще можно записать вот так:  var x = 1 + ( a = a * 2 ) => 5 */
alert("x = "+x);
/* end of file */
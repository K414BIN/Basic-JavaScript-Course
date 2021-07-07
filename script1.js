function multIsHave( num ) {
    let result = " ";
    let counter =0;
    for ( let i=2; i<=5;i++) {
        
    if (i===4) {
       continue;
    }
    if ( num % i === 0) {
        counter = counter + 1;
    }
    }
    if (num ===3 || num ===5 ) {
        counter =0;
    }
    if (num ===1 ) {
        counter =num;
    }
    if ( counter ===0) 
            return result= result+num;
    else return result;
}

var val=1;
while (val<100) {
   
    document.write (multIsHave(val));
    document.write (" ");
    val = val + 1;
}
 
 
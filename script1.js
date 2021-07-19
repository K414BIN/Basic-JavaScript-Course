/*   Begin of file */
const maxVlue =999;
class Stack {
		constructor(){
				this.elements = [];
		}
		push(element){
		this.elements.push(element)
		}
		pop(){
		if (this.elements.length === 0) return "Underflow situation";
                else return this.elements.pop();
		}
		isEmpty(){
		if (this.elements.length > 0) return false;
                else return true;
		}
}

function createObj(x){
  let num= Math.abs(parseInt(x));
  
if (typeof(bagOfNumbers) == 'undefined') {
  var bagOfNumbers ={};
}

  if (num>maxVlue) {
console.log("The number is greater, than the allowed value!");
return bagOfNumbers;
}
   let i=0;
   let str="";
   str =num+str;
   let stack = new Stack();
   while (i!== str.length){
   stack.push(str.charAt(i));
   i=i+1;
}
   str="";
   i=0;
   while (!stack.isEmpty()){
   str =   stack.pop(); 
   i=i+1;
   switch (i){
   case 1: bagOfNumbers.units = str;
			   break;
   case 2: bagOfNumbers.dozens = str;
			   break;
   case 3: bagOfNumbers.hundreds  = str;
			   break;
	}
}
return bagOfNumbers;
}

var y =+prompt("Enter the variable: ");
  
if (typeof(box) == 'undefined') {
 var box = {};
}

box = createObj(y);
/* End of file */

const ITEM_NEXT='right';
const ITEM_PREV='left';

  function init() {
       const buyButton = document.getElementById('add-to-cart');
       const forgetItButton = document.getElementById('del-from-cart');
       const gallery = document.getElementById('itemImg');
       const itemName = document.getElementById('itemName');
       gallery.alt = itemName.value.toString();
       forgetItButton.addEventListener('click', () => cart.removeFromCart());
       buyButton.addEventListener('click', () => cart.addToCart());
       window.addEventListener('keydown',(event) => {warehouse.getNextItem(event) });
}
 const warehouse = {  
                    
                    getElement() {
                                    return document.getElementById('merchandise');
                    },
                    amount: 5,
                    getNextItem(){
                                        var position = this.amount;
                       
                                        switch (event.keyCode){
                                        case 39:
                                  
                                                position += 1;
                                                break;
                                        case 37:
                                            
                                                position -= 1;
                                                break;
                                        default : 
                                                  return
                                        }           
                                        if (position === -1) {
                                        position = this.amount - 1;
                                        } else if (position > this.amount - 1) {
                                          position = 0;
                                        }
                                      
                    },
 }
 const cart = {  
        move() {
                    let item = null;
                    switch (event.keyCode){
                    case 39:
                             item = ITEM_NEXT;
                             break;
                     case 37:
                             item  = ITEM_PREV;
                             break;
                    
                    default :
                                return
      }          
    },
        shoppingCart: [],    
        addToCart(item) {
                    this.shoppingCart.push(item);
        },
        removeFromCart(item) {
                                let index = this.shoppingCart.indexOf(item);
                                if (index > -1) {this.shoppingCart.splice(index,1);
                                }
                    
        }
 }
 
   window.addEventListener('load',init);
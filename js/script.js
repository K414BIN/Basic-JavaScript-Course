var cart ={};
$('document').ready(function() {
    loadGoods();
    checkCart();
    showCart();
});
   
   function showCart(){
       // что в корзине 
       var out='';
       
       const goods=  document.body.getElementsByClassName('name');
       for (var item in cart) {
          // if (item == goods.attr('data-key') {
              // не работает !!!!
           out +=item+ '---' + cart[item] +' = '+ goods[parseInt(item)] +'<br />';
                     
       }
       $('#cart').html(out);
   }
       
   function loadGoods(){
    //загрузка списка товаров
   $.getJSON('goods.json', function(data) {
       console.log(data);
        var out="";
       for ( var key in data) {
              out += '<span class="single-goods" id="' + data[key]['Code']+ '">';
              out += '<h3 class ="name" data-key="'+key+'">' +  data[key]['Name'] +'</h3>';
              out += '<p>Description: ' +  data[key]['Description'] +'</p>';
              out += '<img class="image" src="'+data[key]['Image'] +'" alt="'+  data[key]['Name'] +'"/>';
              out += '<p>Price: ' +  data[key]['Price'] +'</p>';
              out += '<button class="add-to-cart" data-art="'+key+'">Buy</button>';
              out += '<button class="del-from-cart" data-art="'+key+'">Cancel</button>'; 
              out += '</span>';
       }
        $('#merchandise').html(out);
          $('button.add-to-cart').on('click',addToCart);
          $('button.del-from-cart').on('click',delFromCart);
   });
}
   function delFromCart(){
       // удаляем из корзины товар
       let articul = $(this).attr('data-art');
       if (cart[articul] === 0 ) return;
       if (cart[articul] != undefined  )   {
           cart[articul]--;
   }
       console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart));
            showCart();
   }
   function addToCart(){
       //  добавляем товар в корзину
       let articul = $(this).attr('data-art');
       if (cart[articul] != undefined )   {
           cart[articul]++;
       } else {
           cart[articul] = 1;
       }
       console.log(cart);
       localStorage.setItem('cart',JSON.stringify(cart));
           showCart();
   }
   function checkCart(){
       // проверяю наличие заполненной корзины
           if (localStorage.getItem('cart')!=null) {
             cart =  JSON.parse(localStorage.getItem('cart'));
           } 
   }

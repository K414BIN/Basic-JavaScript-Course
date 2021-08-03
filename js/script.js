$('document').ready(function() {
    loadGoods();
});

function loadGoods() {
    //загрузка списка товаров
   $.getJSON('goods.json', function(data) {
       console.log(data);
        var out="";
       for ( var key in data) {
              out += '<div class="single-goods" id="' + data[key]['Code']+ '">';
              out += '<h3>' +  data[key]['Name'] +'</h3>';
              out += '<p>Description: ' +  data[key]['Description'] +'</p>';
              out += '<img class="image" src="'+data[key]['Image'] +'" alt="'+  data[key]['Name'] +'"/>';
              out += '<p>Price: ' +  data[key]['Price'] +'</p>';
              out += '<button id="add-to-cart">Buy</button>';
              out += '<button id="del-from-cart">Cancel</button>';
              out += '</div>';
       }
        $('#merchandise').html(out);
       
   })
}
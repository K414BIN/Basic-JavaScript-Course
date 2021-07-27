
function openImage(event) {
    console.log(event);
    const gallery = document.getElementsByClassName("gallery")[0];

    const target = event.target;
    const seed = target.getAttribute("data-seed");
    gallery.innerHTML = storage[seed -1 ].Medicine;
    if (!seed) {
        return;       
    }
    
    const image = document.createElement("img"); 

    image.id = 'image-'+seed;
    image.src = 'imgs/'+seed+'.jpg';
    image.alt = 'Medicine '+seed;
    gallery.appendChild(image);
}
   
function sumItems(){
    let sum=0;
    sum = sum + buyItem();
    cart=[];
    cart.push(sum);
    return cart;
}
   
function buyItem(){
    
    let item=event.target.getAttribute("data-seed");
    let newAppendChildLi=document.createElement("li");
    newAppendChildLi.innerHTML = storage[item -1 ];
    list.appendChild(newAppendChildLi);      
    return newAppendChildLi;
}
function forgetItem(){
   
    let newRemoveChildLi=document.createElement("li");
    if (newRemoveChildLi.parentNode) {
        newRemoveChildLi.parentNode.removeChild(newRemoveChildLi);
    } else  newRemoveChildLi.removeChild(newRemoveChildLi);
    
}

function addToWarehouse(){
   item1 = Object.create({}, {
        Price: {
                    value: 1420,
                    writable: true,
                    enumerable: true,
                    configurable: true
               },
        Medicine: {  value: 'Risperidone',
                    writable: true,
                    enumerable: false,
                    configurable: false
                    }
});
    item2 = Object.create({}, {
        Price: {
                    value: 1300,
                    writable: true,
                    enumerable: true,
                    configurable: true
               },
        Medicine: {  value: 'Metoprolol Succinatee',
                    writable: true,
                    enumerable: false,
                    configurable: false
                    }
});
    item3 = Object.create({}, {
        Price: {
                    value: 2087,
                    writable: true,
                    enumerable: true,
                    configurable: true
               },
        Medicine: {  value: 'Ibuprofen (Rx)',
                    writable: true,
                    enumerable: false,
                    configurable: false
                    }
});
    item4 = Object.create({}, {
        Price: {
                    value: 2760,
                    writable: true,
                    enumerable: true,
                    configurable: true
               },
        Medicine: {  value: 'Alprazolam',
                    writable: true,
                    enumerable: false,
                    configurable: false
                    }
});
    item5 = Object.create({}, {
        Price: {
                    value: 2009,
                    writable: true,
                    enumerable: true,
                    configurable: true
               },
        Medicine: {  value: 'Lisinopril',
                    writable: true,
                    enumerable: false,
                    configurable: false
                    }
});
 
     temp = [];
     temp.push(item1);
     temp.push(item2);
     temp.push(item3);
     temp.push(item4);
     temp.push(item5);
     return  temp;
}
function init() {
    const images = document.querySelectorAll(".thumbnails > img");
    var  list = document.getElementById("list");
        for ( let image of images) {
        image.addEventListener('click', openImage);}
}
     var storage = addToWarehouse();
     console.log ( storage);
  

     window.addEventListener('load',init);  

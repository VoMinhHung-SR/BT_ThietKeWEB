
var products = document.querySelector(".products")
var item = Array.from(products.children)
let arr = []
let choose = document.getElementById('select')

// for(var i = 0; i <item.length; i++){
//     console.log(item[i])
// }

// Mang san pham co phan tu la cac doi tuong child cua Node products 
// (value = default)
for (var i in item){
    arr.push(item[i])
}

choose.onchange = sortingValue;

function sortingValue(){
    if (this.value === 'default'){
        while(products.firstChild){
            products.removeChild(products.firstChild);
        }
        products.append(...arr)
    }
    if(this.value ==='HighToLow'){
        descSorting(products, item)
    }if(this.value ==='LowToHigh'){
        ascSorting(products, item)
    }
}

function  ascSorting(products, item){
    let d, sortProduct;
    sortProduct = item.sort((a,b) =>{
        
        const p1 = Number(a.getAttribute('data-price'));
        // console.log(p1)
        const p2 = Number(b.getAttribute('data-price'));
        // console.log(p2)

        return p1 > p2 ? 1 : -1;
    })
    while(products.firstChild){
        products.removeChild(products.firstChild); 
    }
    products.append(...sortProduct)
}
function  descSorting(products, item){
    let d, sortProduct;
    sortProduct = item.sort((a,b) =>{
        const p1 = Number(a.getAttribute('data-price'));
        // console.log(p1)
        const p2 = Number(b.getAttribute('data-price'));
        // console.log(p2)

        return p1 < p2 ? 1 : -1;
    }) 
    while(products.firstChild){
        products.removeChild(products.firstChild);
    }
    products.append(...sortProduct)
}
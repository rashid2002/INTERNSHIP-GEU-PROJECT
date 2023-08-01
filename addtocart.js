const product=[             //data structure for displaying the products
{
    id:0,
    image:'image1.jpg',
    title:'food',
    price:120,
},
{
    id:1,
    image:'new/Internship-GEU-main/img/products/image5.jpg',
    title:'food1',
    price:2000,
}
];

const categories = [...new Set(product.map((item)=>
{return item}))]

// for display button for inputting in the cart as a test    
let q=0;
document.getElementById('btn').innerHTML = categories.map((item)=>
{
var{image,title,price}=item;
return(
    `<div class='box'>`+
        `<h4>${title}</h4>   <i class="fa fa-rupee"></i>  ${price}       ${image}`+
    "<button id='item1' onclick='addtocart("+(q++)+")'>add to cart</button>"+
    `</div>`

)
}
).join('')

var cart=[];

//push to the cart or display
function addtocart(a){
cart.push({...categories[a]});
displaycart();
}
// remove from the cart
function delElement(a){
cart.splice(a,1);
displaycart();
}

// function to explain how to display the item in class item-set

function displaycart(a){
let j=0,total=0;
document.getElementById('count').innerHTML=cart.length;
if(cart.length==0){
    document.getElementById('addcart').innerHTML="<center>Your cart is empty</center>";
    document.getElementById("total").innerHTML=""+0+".00";
}
else{
    document.getElementById('addcart').innerHTML=cart.map((items)=>
   {
    var{image,title,price}=items;
    total=total+price;
    document.getElementById("total").innerHTML="<i class='fa fa-rupee'></i>"+total+".00";
    return(
        `<div class='list-item'>
        <div class='row-img'>
            <img class='images' src=${image}>
            </div>
            <p>${title}</p>
            <h2><i class="fa fa-rupee"></i> ${price}.00</h2>`+
            "<button id='buy'>Buy </button>"+
            "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i>"+
           ` </div>
            </div>
        `

    );
   } 
    ).join('');
}
} 
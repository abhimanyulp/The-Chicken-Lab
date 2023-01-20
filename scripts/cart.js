let LSCart = JSON.parse(localStorage.getItem("cart"));
let cartEL = document.getElementById("cart");
let totalValue = document.getElementById("total");

if(LSCart==null){
    LSCart=[];
};

Display(LSCart)

function Display(data){
    cartEL.innerHTML=null;
    data.forEach((element, index)=>{
        let card = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.image;

        let name = document.createElement("h2");
        name.innerText = element.name;

        let price = document.createElement("h4");
        price.innerText = element.price+"$";

        let button = document.createElement("button");
        button.innerText = "Delete";

        totalValue.innerText = Number(totalValue.innerText) + Number(element.price);

        button.addEventListener("click",()=>{
            LSCart = LSCart.filter((el,i)=>{
                if(index===i){
                    return false;
                }else{
                    return true;
                }
            });
            totalValue.innerText = 0;
            localStorage.setItem("cart",JSON.stringify(LSCart));
            Display(LSCart);
        })

        card.append(image, name, price, button)
        cartEL.append(card);
    })
}
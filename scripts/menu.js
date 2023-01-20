//Cathing 

let btnOpen = document.getElementById("btn-open");
let btnClose = document.getElementById("btn-close");
let sidebar = document.getElementById("sidebar")

//Event Listeners

//Open
btnOpen.addEventListener("click",()=>{
    sidebar.style.display = "block";
    btnOpen.style.display = "none"
    btnClose.style.display = "block"
    })

//Close
btnClose.addEventListener("click",()=>{
    sidebar.style.display = "none";
    btnClose.style.display = "none"
    btnOpen.style.display = "block"
    })


//Catching & Appending Menu Data to Menu element.

let menuEl = document.getElementById("menu");
let cartData = JSON.parse(localStorage.getItem("cart"))
if(cartData==null){
    cartData=[];
}

let menuData = [{image:"./media/2PieceMeal.png", name:"2 Piece Meal", price:"69"},
{image:"./media/3PieceMeal.png", name:"3 Piece Meal", price:"69"},
{image:"./media/4PieceMeal.png", name:"4 Piece Meal", price:"69"},
{image:"./media/ChickenBreast.png", name:"Fire-Grilled Chicken Breast", price:"69"},
{image:"./media/ChickenWing.png", name:"Fire-Grilled Chicken Wing", price:"69"},
{image:"./media/ChickenThigh.png", name:"Fire-Grilled Chicken Thigh", price:"69"},
{image:"./media/ChickenLeg.png", name:"Fire-Grilled Chicken Leg", price:"69"}]


Display(menuData);

//Display function

function Display(data){
    menuEl.innerHTML=null;
    data.forEach((element)=>{
        let card = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.image;

        let name = document.createElement("h2");
        name.innerText = element.name;

        let price = document.createElement("h4");
        price.innerText = element.price+"$";

        let button = document.createElement("button")
        button.innerText = "ADD";

        button.addEventListener("click",()=>{
            cartData.push(element);
            localStorage.setItem("cart",JSON.stringify(cartData))
        })

        card.append(image, name, price, button)
        menuEl.append(card);
    })
}
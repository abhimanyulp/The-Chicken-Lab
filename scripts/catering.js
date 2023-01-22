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

let menuEl = document.getElementById("cat-menu");
let cartData = JSON.parse(localStorage.getItem("cart"))
if(cartData==null){
    cartData=[];
}

let menuData = [{image:"./media/Catering24Piece.png", name:"24 Piece Meal", price:"75"},
{image:"./media/CateringChickenMeals_48PcMeal.png", name:"48 Piece Meal", price:"120"},
{image:"./media/Catering24PieceMixedChickenTortillas.png", name:"24 Piece Chicken & Tortillas", price:"85"},
{image:"./media/3CourseCatering_24PC.png", name:"3-Course 24 Piece Meal", price:"90"},
{image:"./media/Catering48 PieceChicken.png", name:"3-Course 48 Piece Meal", price:"140"}];


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
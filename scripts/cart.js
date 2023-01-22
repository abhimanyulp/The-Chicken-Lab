//Fetching from local storage and appending 
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

//Switching Login & Cart
let cartbox = document.getElementById("cart-box");
let loginbox = document.getElementById("login-box");
let loginBtn = document.getElementById("login-btn");
let cartBtn = document.getElementById("cart-btn")
let heading = document.getElementById("heading");
let logoutBtn = document.getElementById("logout-btn");
let cartBtn2 = document.getElementById("cart-btn2");
let logged_display = document.getElementById("logged");

function display_login(){
    cartbox.style.display = "none";
    loginbox.style.display = "flex";
    loginBtn.style.display = "none"
    cartBtn.style.display = "block";
    heading.innerText = "login";
}

function display_cart(){
    cartbox.style.display = "flex";
    loginbox.style.display = "none";
    loginBtn.style.display = "block"
    cartBtn.style.display = "none";
    heading.innerText = "cart";
}

function display_cart2(){
    cartbox.style.display = "flex";
    loginbox.style.display = "none";
    logoutBtn.style.display = "block"
    cartBtn2.style.display = "none";
    heading.innerText = "cart";
}

function display_logout(){
    
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
    logged_display.innerText = "";
    logged_display.style.display = "none";
    
}

//Sign-up
let userIn = document.getElementById("user");
let passIn = document.getElementById("pass");

let Data = JSON.parse(localStorage.getItem("userdata"));
if(Data==null){
    Data=[];
}

function save(){

    let formData = {
        username : userIn.value,
        password : passIn.value
    }

    Data.push(formData);
    localStorage.setItem("userdata", JSON.stringify(Data));
}

//Sign-in


function match(){
    for(let i=0; i<Data.length; i++){
        if(Data[i].username==userIn.value && Data[i].password==passIn.value){
            heading.innerText = "login Successful!"
            logged_display.innerText = "User:"+Data[i].username;
            logged_display.style.display = "block";
            cartBtn2.style.display = "block";
            cartBtn.style.display = "none";
            
            return true;
        }
    }
    heading.innerText = "Wrong Credentials!";
    return false;
}

//Order Now function

function ordering(){
    if(logged_display.innerText==""){
        alert("Please Login First!")
    }else{
        window.location.href = "placed.html"
    }
}
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



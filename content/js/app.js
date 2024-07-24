let scrollIcon = document.querySelector(".scroll-icon");
let scrollBar = document.querySelector(".scroll-bar")
let links = document.querySelectorAll(".nav-link")

// links.forEach(function (item) {
//     item.addEventListener("click" , function (e) {
//         e.preventDefault();
//         let targetElement = document.getElementById(item.dataset.target);
//         window.scrollTo({
//             top : targetElement.offsetTop - 150, 
//             behavior: "smooth",
//         });
//     });
// });


window.addEventListener("scroll" , function(){

    let navScroll =
    document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        scrollBar.style.width = `${navScroll *100}%`;
    
    if ( window.scrollY > 200){
        scrollIcon.style.display = "block";
    }else{
        scrollIcon.style.display = "none";

    }
});

scrollIcon.addEventListener("click", function(){
    window.scrollTo({
        top : 0,
    });
});

let overLay = document.querySelector(".overlay")
let products = document.querySelectorAll(".img-product")
let overLayImg = document.querySelector("#overlayImg")
let closeBtn =document.querySelector(".closeBtn")
console.log(overLayImg.src);

for(let i = 0 ; i < products.length ; i++){
    console.log(products[0]);
    products[i].addEventListener("click" , function(e){
        overLay.classList.replace("d-none" , "d-flex")
        console.log(e.target.src);
        overLayImg.src = e.target.src
    })
}

closeBtn.addEventListener("click" , function(){
    overLay.classList.replace("d-flex" , "d-none")
})
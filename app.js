const headerEl = document.getElementById("header")

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos>50){
        headerEl.classList.add("header_mini")
    }else{
        headerEl.classList.remove("header_mini")
    }
})

let navToggle = $("#navToggle");
let nav = $("#nav");

$(function() {
    navToggle.on("click", function(event) {
        event.preventDefault();
    
        nav.toggleClass("show");
    });
})


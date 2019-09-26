document.getElementById("continueButton").onclick = continueHandler;
document.getElementById("continue").onclick = continueHandler;
function continueHandler(){
   var continueElem = document.getElementById("start-page");
   var mainPageElem = document.getElementById("main-page");
        if(continueElem.className === "start-page"){
            continueElem.style.display = "none";
            mainPageElem.style.display = "grid";
        } else {
            continueElem.className = "start-page";
        };
    } 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {   loop:true,
            margin:10,
            items : 1
        });
});

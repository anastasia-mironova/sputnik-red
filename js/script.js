document.getElementById("continueButton").onclick = continueHandler;
document.getElementById("continue").onclick = continueHandler;
function continueHandler(){
   var continueElem = document.getElementById("grid");
        if(continueElem.className === "grid"){
            continueElem.style.display = "none";
        } else {
            continueElem.className = "grid";
        };
    } 

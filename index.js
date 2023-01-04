let scoreH = document.getElementById("scoreH")
let scoreG = document.getElementById("scoreG")

let scoreHome = 0;
let scoreGuest = 0;

function pointsHome(num) {  
    scoreHome += num;
    scoreH.textContent = scoreHome;
}

function pointsGuest(num) {
    scoreGuest += num;
    scoreG.textContent = scoreGuest;
}

function resetScore(){
    scoreGuest = 0
    scoreHome = 0
    
    scoreG.textContent = scoreGuest;
    scoreH.textContent = scoreHome;
}

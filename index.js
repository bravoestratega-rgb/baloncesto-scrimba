let result = 0;
let resultGuest = 0;
let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");
// home 
function addPoint1(){
  result = result + 1
  homePoints.textContent = result
  
  console.log(result)
}

function addPoint2(){
  result = result + 2
  homePoints.textContent = result
  
  console.log(result)
}

function addPoint3(){
  result = result + 3
  homePoints.textContent = result
  
  console.log(result)
}

// guest

function addPoint1Guest(){
  resultGuest = resultGuest + 1
  guestPoints.textContent = resultGuest

}

function addPoint2Guest(){
  resultGuest = resultGuest + 2
  guestPoints.textContent = resultGuest
}

function addPoint3Guest(){
  resultGuest = resultGuest + 3
  guestPoints.textContent = resultGuest
  
}

//restart

function restartGame(){
  result = 0;
  resultGuest = 0;
  homePoints.textContent = result
  guestPoints.textContent = resultGuest
}
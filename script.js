
function displayStaticClock() {
 var todaydate = new Date();
 //var month = todaydate.getMonth() + 1;
 //var day = todaydate.getDate();
 //var year = todaydate.getFullYear();
 //var datestring = month + "/" + day + "/" + year;
 if(typeof elem !== 'undefined' && elem !== null) {
   elem.innerHTML = "Today is " + todaydate;
 }
}

function displayClock(){
  var display = new Date().toLocaleTimeString();
  if(typeof elem !== 'undefined' && elem !== null) {
   elem.innerHTML = display;
  }
  setTimeout(displayClock, 1000); 
}
var elem = document.getElementById("date");
window.onload = displayStaticClock();




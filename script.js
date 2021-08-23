
function displayStaticClock() {
 var todaydate = new Date();
 var month = todaydate.getMonth() + 1;
 var day = todaydate.getDate();
 var year = todaydate.getFullYear();
 var datestring = month + "/" + day + "/" + year;
 document.getElementById("date").innerHTML = "Today is " + todaydate;
}

function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.getElementById("date").innerHTML = display;
  setTimeout(displayClock, 1000); 
}

window.onload = displayClock();




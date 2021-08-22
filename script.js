 var todaydate = new Date();
 var month = todaydate.getMonth() + 1;
 var day = todaydate.getDate();
 var year = todaydate.getFullYear();
 var datestring = month + "/" + day + "/" + year;
 window.onload = function(){
 //document.getElementById("date").value = todaydate;
  document.getElementById("date").innerHTML = "Today is " + todaydate;
 }

window.onload = displayClock();

function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.getElementById("date").innerHTML = display;
  setTimeout(displayClock, 1000); 
}



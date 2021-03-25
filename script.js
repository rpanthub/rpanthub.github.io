 var todaydate = new Date();
 var month = todaydate.getMonth();
 var day = todaydate.getDate();
 var year = todaydate.getFullYear();
 var datestring = month + "/" + day + "/" + year;
 window.onload = function(){
 document.getElementById("date").value = datestring;
 }



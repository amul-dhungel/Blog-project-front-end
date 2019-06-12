function dateTime() {

    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    m = checkTime(m);
    
    s = checkTime(s);
    document.getElementById("time").innerHTML =  h + ":" + m + ":" + s;//Showing time  with Hour Minute and Second
    var t = setTimeout(dateTime, 500);
    
    var d=new Date();
    var year = d.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];//Setting Arraylist of months
    var month=months[d.getMonth()];
    var date=d.getDate();
    document.getElementById("date").innerHTML =  year + "/" + month + "/" + date;//Showing date with Year Month and Date

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

dateTime();

var interval = setInterval(function () {
    var eidDate = new Date("July-20-2021").getTime();
    var currentDate = new Date().getTime();
    var result = eidDate - currentDate;
    console.log(result)


    var days = Math.floor(result / (1000 * 60 * 60 * 24));

    var hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var min = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));

    var sec = Math.floor((result % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days + " " + "Days"
    document.getElementById("hours").innerHTML = hours + " " + "Hours"
    document.getElementById("minutes").innerHTML = min + " " + "Minutes"
    document.getElementById("sec").innerHTML = sec + " " + "Seconds"
}, 1000)
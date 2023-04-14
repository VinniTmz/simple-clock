const Hours = document.getElementById("hours")
const Minutes = document.getElementById("minutes")
const Seconds = document.getElementById("seconds")

const Relogio = setInterval(function time () {
    let dateToday = new Date ()
    let Hr = dateToday.getHours()
    let Min = dateToday.getMinutes()
    let Sec = dateToday.getSeconds()

    if(Hr < 10) Hr = "0" + Hr
    if(Min < 10) Min = "0" + Min
    if(Sec< 10) Sec = "0" + Sec 


          Hours.textContent = Hr
          Minutes.textContent = Min
          Seconds.textContent = Sec
})
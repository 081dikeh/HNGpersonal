/* const currentDay = document.querySelector("#currentDay");
 */
const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]') ;
const currentTimeInMilliseconds = document.querySelector('[data-testid="currentUTCTime"]')
const localTime = document.querySelector("#localTime")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")
const ampmEl = document.getElementById("ampm")


function updateTime() {
    var today = new Date();
    var day = today.getDay();
    var milliseconds = today.getTime() /* getUTCMilliseconds */;
    var dayList = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hourEl.innerText = h + " :";
    minuteEl.innerText = m + " :";
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    currentDay.innerHTML = "Day: " + dayList[day];
    currentTimeInMilliseconds.innerHTML = "UTC Time(ms): </br>" + milliseconds;

    setTimeout(()=>{
        updateTime()
    }, 100)

}

updateTime();



/* const currentDay = document.querySelector('[data-testid="currentUTCTime"]') ; */

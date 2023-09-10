const currentDay = document.querySelector("#currentDay");
const currentTimeInMilliseconds = document.querySelector("#timeInMilliseconds")


function updateTime() {
    var today = new Date();
    var day = today.getDay();
    var milliseconds = today.getUTCMilliseconds();
    var dayList = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    currentDay.innerHTML = dayList[day];
    currentTimeInMilliseconds.innerHTML = "UTC Time: " + milliseconds;

    setTimeout(()=>{
        updateTime()
    }, 100)

}

updateTime();







console.log("Today is " + dayList[day] + ".");


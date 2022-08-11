



window.onload = function(){

    setInterval(timeNow, 1000)
    todayDate()
}

function timeNow(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = hour < 10 ? '0' + hour:  hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second:  second

    let currentTime = hour + ': ' + minute + ':' + second;
    
    document.querySelector('.time-now').innerHTML = currentTime;
}

function todayDate(){
    let time = new Date();

    document.querySelector('.today_date').innerHTML = time.toDateString()

}

var min = 0;
var sec = 0;
var mili_sec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var milisecHeading = document.getElementById('mili_sec');

var interval;
function timer() {
    mili_sec++;
    milisecHeading.innerHTML = mili_sec;
    if (mili_sec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        mili_sec = 0
    }
    else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;

    }
}
function start() {

    document.getElementById("start_btn").disabled = true;
    interval = setInterval(timer, 10);

}

function stop() 
{
    document.getElementById("start_btn").disabled = false;
    clearInterval(interval);
}
function reset() {
    min = 0;
    sec = 0
    mili_sec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    milisecHeading.innerHTML = mili_sec;
    clearInterval(interval);
}
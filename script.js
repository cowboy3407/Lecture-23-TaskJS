let countdown;
let time = 10;
let isTimerunning = false;

const start = document.getElementById('start');
const stopTime = document.getElementById('stopTime');
const reset = document.getElementById('reset');
const timertime = document.getElementById('timertime')

function timeRunning() {
    timertime.textContent = `${time}`
    timertime.style.color = 'red';
}

function startTimer() {
    if (isTimerunning) return;
    isTimerunning = true;
    stopTime.disabled = false;
    start.disabled = true;
    countdown = setInterval(() => {
        time--;
        timeRunning();
        if (time <= 0) {
            clearInterval(countdown);
            start.disabled = false;
            stopTime.disabled = true; 
            alert('Time Is Up!!!')
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(countdown);
    start.disabled = false;
    stopTime.disabled = true;
    isTimerunning = false;
    alert(`Time is stopped at ${time} seconds`)
}

function resetTimer() {
    clearInterval(countdown);
    time = 10;
    timeRunning();
    isTimerunning = false;
    stopTime.disabled = true;
    start.disabled = false;
}

start.addEventListener('click', startTimer);
stopTime.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
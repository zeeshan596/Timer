let time = 0;
let interval = null;
let isRunning = false;

function showTime() {
    let m = Math.floor(time / 60);
    let s = time % 60;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    document.getElementById("display").innerText = m + ":" + s;
}

function start() {
    if (isRunning) return;

    let minutes = parseInt(document.getElementById("min").value) || 0;
    let seconds = parseInt(document.getElementById("sec").value) || 0;

    if (time === 0) {
        time = minutes * 60 + seconds;
    }

    isRunning = true;

    interval = setInterval(function () {
        if (time > 0) {
            time--;
            showTime();
        } else {
            clearInterval(interval);
            isRunning = false;
            alert("Time is up!");
        }
    }, 1000);
}

function pause() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    clearInterval(interval);
    time = 0;
    isRunning = false;
    document.getElementById("min").value = "";
    document.getElementById("sec").value = "";
    showTime();
}

showTime();
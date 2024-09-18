let batteryLevel = 100;
let alarms = [];
let brightness = 100;

// 시계 업데이트 함수
function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const dateString = `${year}-${month}-${day}`;
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    // 배터리가 0이면 시간 부분만 검정색 배경으로
    if (batteryLevel > 0) {
        dateElement.textContent = dateString;
        timeElement.textContent = timeString;
        timeElement.classList.remove('off');
    } else {
        timeElement.classList.add('off');
    }

    checkAlarms(hours, minutes, seconds);
}

// 배터리 감소 함수
function updateBattery() {
    if (batteryLevel > 0) {
        batteryLevel--;
        document.getElementById("battery").textContent = batteryLevel + "%";
    }
}

// 알람 추가 함수
function addAlarm() {
    if (alarms.length < 3) {
        const hour = document.getElementById('alarm-hour').value.padStart(2, '0');
        const minute = document.getElementById('alarm-minute').value.padStart(2, '0');
        const second = document.getElementById('alarm-second').value.padStart(2, '0');
        const alarmTime = `${hour}:${minute}:${second}`;
        alarms.push(alarmTime);
        updateAlarmList();
    } else {
        alert("알람은 최대 3개까지 설정 가능합니다.");
    }
}

// 알람 목록 업데이트 함수
function updateAlarmList() {
    const alarmList = document.getElementById('alarm-list');
    alarmList.innerHTML = '';
    alarms.forEach((alarm, index) => {
        const li = document.createElement('li');
        li.textContent = alarm;
        alarmList.appendChild(li);
    });
}

// 알람 확인 함수
function checkAlarms(hours, minutes, seconds) {
    const currentTime = `${hours}:${minutes}:${seconds}`;
    if (alarms.includes(currentTime)) {
        alert("알람 시간이 되었습니다!");
        alarms = alarms.filter(alarm => alarm !== currentTime);
        updateAlarmList();
    }
}

// 화면 밝기 조절 함수 (배경색 조절)
function changeBrightness(direction) {
    const body = document.body;
    if (direction === 'up' && brightness < 150) {
        brightness += 10;
    } else if (direction === 'down' && brightness > 50) {
        brightness -= 10;
    }

    // 밝기에 따라 배경색을 밝게 또는 어둡게 변경
    const brightnessPercentage = brightness / 100;
    const newColor = Math.floor(255 * brightnessPercentage);
    body.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
}

// 1초마다 시계 및 배터리 업데이트
setInterval(updateClock, 1000);
setInterval(updateBattery, 1000);
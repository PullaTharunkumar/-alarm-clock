const alarmBtn = document.getElementById('alarm-btn')
const alarmList = document.getElementById('alarm-list');
const alarmListArr = []; // Alarms list Array
// Event handling for setting Alarm 
alarmBtn.onclick = () => {
    const hour = document.getElementById('hourInput').value
    let min = Number(document.getElementById('minInput').value)
    let sec = document.getElementById('secInput').value
    const noon = document.getElementById('select-container').value
    min = min.toString().length == 1 ? `0${min}` : min // for single digit numbers adding zero before it
    sec = sec.toString().length == 1 ? `0${sec}` : sec // for single digit numbers adding zero before it
    const alarmItem = `${hour}:${min}:${sec} ${noon}`
    // Existing time checking condition check
    if (alarmListArr.includes(alarmItem)) {
        alert('Alarm alrady exist')
        return;
    }
    // Invaid Input condition check
    else if (hour > 12 || min > 59 || sec > 59) {
        alert('Invaild data')
        return;
    }
    alarmListArr.push(alarmItem) // inserting new alarm in the list
    console.log(`${alarmListArr} Alarm setted`);
    updateAlarms(); // Displaying Alarms function call 
}

// Displaying Alarms function
const updateAlarms = () => {
    let alarms = ''
    // looping every alarm
    for (let obj in alarmListArr) {
        alarms += `<li><h4 class = "inline">${alarmListArr[obj]}</h4><button id='${obj}' class = "inline delete-btn" onClick="deleteFun(${obj})"> Delete </button></li>`
    }
    alarmList.innerHTML = alarms
}

// Deleting Alarm Function
const deleteFun = (index) => {
    console.log(`Deleted Alarm ${alarmListArr[index]}`);
    alarmListArr.splice(index, 1)
    updateAlarms(); // Displaying Alarms function call 
}

// setInterval Function
const currTime = () => {
    let currTime = new Date().toLocaleTimeString() // Getting current time
    const currTimeEle = document.getElementById('curr-time')
    currTimeEle.innerText = currTime
    alarmListArr.includes(currTime) && alert('Alarm')
}
// Time interval setting 
setInterval(currTime, 1000)

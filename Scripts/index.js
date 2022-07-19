let week = 0 // week 1 = 7, week 2 = 14, week 3 = 21 etc ...
const data = {
    'shedOne': [], // shed one
    'shedTwo': [],  // shed two
    'earnings': []
}

// create table
function createTable() {
    let tr1 = document.getElementById('shedOne')
    let tr2 = document.getElementById('shedTwo')
    let tr3 = document.getElementById('total')
    let tr4 = document.getElementById('earnings')
    for (let x = 0; x < 7; x++) {
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        td1.setAttribute('id', `shedOne${x}`)
        td2.setAttribute('id', `shedTwo${x}`)
        td3.setAttribute('id', `total${x}`)
        td4.setAttribute('id', `earnings${x}`)
        tr1.appendChild(td1)
        tr2.appendChild(td2)
        tr3.appendChild(td3)
        tr4.appendChild(td4)
    }
}

// function to generate random values between 10 & 15 and fill shedOne & shedTwo arrays
const randGen = () => {
    for (let i = 0; i < 366; i++) {
        let a = Math.floor(Math.random() * (15 - 10) + 10);
        let b = Math.floor(Math.random() * (15 - 10) + 10);
        data.shedOne.push(a)
        data.shedTwo.push(b)
        data.earnings.push((a + b) * 45)
    }
    console.log(data)
}

const fillShedOne = () => {
    for (let x = week; x < 7 + week; x++) {
        let td = document.getElementById(`shedOne${x - week}`)
        td.innerHTML = data.shedOne[x]
    }
}

const fillShedTwo = () => {
    for (let x = week; x < 7 + week; x++) {
        let td = document.getElementById(`shedTwo${x - week}`)
        td.innerHTML = data.shedTwo[x]
    }
}

const fillTotal = () => {
    for (let x = week; x < 7 + week; x++) {
        let total = data.shedOne[x] + data.shedTwo[x]
        let td = document.getElementById(`total${x - week}`)
        td.innerHTML = total
    }
}

const fillEarnings = () => {
    for (let x = week; x < 7 + week; x++) {
        let td = document.getElementById(`earnings${x - week}`)
        td.innerHTML = data.earnings[x]
    }
}

const totalProduction = () => {
    randGen()
    createTable()
    fillShedOne()
    fillShedTwo()
    fillTotal()
    fillEarnings()
    let weekIndicator = document.getElementById('week')
    let next = document.getElementById('next')
    let previous = document.getElementById('previous')
    weekIndicator.innerHTML = `Week ${(week / 7)+1}`
    next.onclick = () => {
        if (week < (51*7)) {
            week += 7
            fillShedOne()
            fillShedTwo()
            fillTotal()
            fillEarnings()
            let weekIndicator = document.getElementById('week')
            weekIndicator.innerHTML = `Week ${(week / 7)+1}`
        }
    }
    previous.onclick = () => {
        if (week > 0) {
            week -= 7
            fillShedOne()
            fillShedTwo()
            fillTotal()
            fillEarnings()
            let weekIndicator = document.getElementById('week')
            weekIndicator.innerHTML = `Week ${(week / 7)+1}`
        }
    }
}

totalProduction()

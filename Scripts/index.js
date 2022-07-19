const data = {
    'shedOne': [], // shed one
    'shedTwo': []  // shed two
}

// function to generate random values with values between 10 & 15 and fill arrays
const randGen = () => {
    for (let i = 0; i < 366; i++) {
        let a = Math.floor(Math.random() * (15 - 10) + 10);
        let b = Math.floor(Math.random() * (15 - 10) + 10);
        data.shedOne.push(a)
        data.shedTwo.push(b)
    }
}
randGen()
console.log(data)

const fillShedOne = () => {
    const tr = document.getElementById("shedOne")
        for (let x=0; x<7; x++) {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(data.shedOne[x])
        td.appendChild(tdValue)
        tr.appendChild(td)
    }
}

const fillShedTwo = () => {
    const tr = document.getElementById("shedTwo")
    for (let x=0; x<7; x++) {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(data.shedTwo[x])
        td.appendChild(tdValue)
        tr.appendChild(td)
    }
}

const fillShedTotal = () => {
    const tr = document.getElementById('total')
    for (let x=0; x<7; x++) {
        let total = data.shedOne[x] + data.shedTwo[x]
        let td = document.createElement('td')
        let tdValue = document.createTextNode(total)
        td.appendChild(tdValue)
        tr.appendChild(td)
    }
}

const totalProduction  = () => {
    fillShedOne()
    fillShedTwo()
    fillShedTotal()
}

totalProduction()
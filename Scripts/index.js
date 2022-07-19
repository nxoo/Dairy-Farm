const data = {
    // shed one
    'one': [],
    // shed two
    'two': []
}

// function to generate array with 366 (representing days) random values with values between 10 & 15
const randGen = () => {
    for (let i = 0; i < 7; i++) {
        let a = Math.floor(Math.random() * (15 - 10) + 10);
        let b = Math.floor(Math.random() * (15 - 10) + 10);
        data.one.push(a)
        data.two.push(b)
    }
}
randGen()
console.log(data)

const fillShedOne = () => {
    const tr = document.getElementById("shedOne")
    data.one.forEach(x => {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(x)
        td.appendChild(tdValue)
        tr.appendChild(td)
    })
}

const fillShedTwo = () => {
    const tr = document.getElementById("shedTwo")
    data.two.forEach(x => {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(x)
        td.appendChild(tdValue)
        tr.appendChild(td)
    })
}

const fillShedTotal = () => {
    const tr = document.getElementById('total')
    for (let x=0; x<7; x++) {
        let total = data.one[x] + data.two[x]
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
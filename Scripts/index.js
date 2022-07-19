const data = {
    // shed one
    'one': [],
    // shed two
    'two': []
}

// function to generate array with 366 (representing days) random values with values between 10 & 15
const randGen = () => {
    for (let i = 0; i < 366; i++) {
        let a = Math.floor(Math.random() * (15 - 10) + 10);
        let b = Math.floor(Math.random() * (15 - 10) + 10);
        data.one.push(a)
        data.two.push(b)
    }
}
randGen()
console.log(data)

const fillShedOne = () => {
    const shedOne = document.getElementById("shedOne")
    data.one.forEach(x => {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(x)
        td.appendChild(tdValue)
        shedOne.appendChild(td)
    })
}

const fillShedTwo = () => {
    const shedTwo = document.getElementById("shedTwo")
    data.two.forEach(x => {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(x)
        td.appendChild(tdValue)
        shedTwo.appendChild(td)
    })
}


const totalProduction  = () => {
    fillShedOne()
    fillShedTwo()
}

totalProduction()
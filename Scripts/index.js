const shedOne = [];
const shedTwo = [];

// function to generate array with 366 (representing days) random values with values between 10 & 15
const randGen = () => {
    for (let i = 0; i < 366; i++) {
        let a = Math.floor(Math.random() * (15 - 10) + 10);
        let b = Math.floor(Math.random() * (15 - 10) + 10);
        shedOne.push(a)
        shedOne.push(b)
    }
}


const data = {
    // shed one
    'one': [
        [10, 12, 10, 12, 10, 10, 11], // week 1
        [12, 13, 11, 12, 11, 10, 14] // week 2
    ],
    // shed two
    'two': [
        [12, 13, 10, 14, 9, 13, 9], // week 1
        [11, 16, 12, 12, 11, 10, 14] // week 2
    ]
}

console.log(data)

const fillShedOne = () => {
    const shedOne = document.getElementById("shedOne")
    data.one[0].forEach(x => {
        let td = document.createElement('td')
        let tdValue = document.createTextNode(x)
        td.appendChild(tdValue)
        shedOne.appendChild(td)
    })
}

const fillShedTwo = () => {
    const shedTwo = document.getElementById("shedTwo")
    data.two[0].forEach(x => {
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
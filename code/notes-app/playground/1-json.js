const fs = require('fs')
const person = {
    firstName : 'Allen',
    lastName : 'Bee',
    age : 22
}

//console.log(person.firstName)
//personJSON = JSON.stringify(person)
//console.log(personJSON)
//console.log(personJSON.firstName)

//fs.writeFileSync('1-json.json',personJSON)

//const dataBuffer = fs.readFileSync('1-json.json')
//console.log(dataBuffer)
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.firstName)

//challenge

const dataBuffer = fs.readFileSync('2-json.json')
const dataJSON = dataBuffer.toString()
const parseData = JSON.parse(dataJSON)

parseData.name = 'Vishal'
parseData.age = 21

const jsonData = JSON.stringify(parseData)
fs.writeFileSync('2-json.json',jsonData)

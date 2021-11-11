//console.log('dom working')

const userData = document.querySelector('h6')

const dataArray =  JSON.parse(userData.textContent)
userData.remove()
//console.log(dataArray)

const userName = dataArray[0].name
const userEmail = dataArray[0].email
const userContact = dataArray[0].phone
const userCompany = dataArray[0].company
const userCity = dataArray[0].city
const userImage = dataArray[0].image

document.getElementById('message-heading').innerHTML = `Hi ! ${userName}`
const nameValue = document.getElementById('name').innerHTML = `Name : ${userName}`
document.getElementById('email').innerHTML = `Email : ${userEmail}`
document.getElementById('phone').innerHTML = `Phone : ${userContact}`
document.getElementById('company').innerHTML = `company : ${userCompany}`
document.getElementById('city').innerHTML = `city : ${userCity}`


const image = document.createElement('img')
image.src = `./uploads/${userImage}`
document.querySelector('#profile-pic-div').appendChild(image).setAttribute('height','100px','width','100px')



// console.log(userName)
// console.log(userEmail)
// console.log(userContact)
// console.log(userCompany)
// console.log(userCity)

// const welcomeMessage = document.createElement('h2')
// welcomeMessage.textContent = `Hii ! ${userName}`
// document.querySelector('#main-div').appendChild(welcomeMessage) 

// const image = document.createElement('img')
// image.src = `./uploads/${userImage}`
// document.querySelector('#profile-pic-div').appendChild(image).setAttribute('height','100px','width','100px')


// const name = document.createElement('h4')
// name.textContent = `   Name    : ${userName}`
// document.querySelector('#profile-div').appendChild(name)


// const email = document.createElement('h4')
// email.textContent = `  Email   : ${userEmail}`
// document.querySelector('#profile-div').appendChild(email)

// const phone = document.createElement('h4')
// phone.textContent = `  Phone   : ${userContact}`
// document.querySelector('#profile-div').appendChild(phone)

// const company = document.createElement('h4')
// company.textContent = `Company : ${userCompany}`
// document.querySelector('#profile-div').appendChild(company)

// const city = document.createElement('h4')
// city.textContent = `   City    : ${userCity}`
// document.querySelector('#profile-div').appendChild(city)


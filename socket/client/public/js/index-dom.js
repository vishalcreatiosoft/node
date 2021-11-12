// console.log('dom-working')

const msg_input = document.getElementById('msg-input')

const form = document.getElementById('form')

form.addEventListener('submit', event =>{
    event.preventDefault()
    const msg = msg_input.value
    if(msg == ""){
        alert('Please enter some message')
    }
    displayMessage(msg)
    msg_input.value = ""
})


const displayMessage = msg => {
    const message = document.createElement('div')
    message.textContent = msg
    document.getElementById('chat-box').appendChild(message)
}
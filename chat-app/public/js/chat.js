

const socket = io()

// server(emit) -> client (recieve) --acknowledgement --> server
// client (emit) -> server (recieve) --acknowledgement --> client

// socket.on('countUpdated',(count)=>{
//     console.log('The count has been updated',count)
// })

// document.querySelector('#increament').addEventListener('click',()=>{
//     console.log('clicked')
//     socket.emit('increament')
// })



const $messsgeform = document.querySelector('#message-form')
const $messsgeFormInput = $messsgeform.querySelector('input')
const $messsgeFormButton = $messsgeform.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML


socket.on('message',(message)=>{
    console.log(message)
    const html = Mustache.render(messageTemplate,{
        message : message
    })
    $messages.insertAdjacentHTML('beforeend',html)
})

document.querySelector('#message-form').addEventListener('submit',(e)=>{
    e.preventDefault()

    $messsgeFormButton.setAttribute('disabled','disabled')
    //disable
    const message = e.target.elements.message.value

    //const message = document.querySelector('input').value
    socket.emit('sendMessage',message,(error) => {
        
        $messsgeFormButton.removeAttribute('disabled')
        $messsgeFormInput.value = ''
        $messsgeFormInput.focus()
        //enable

        if(error){
            return console.log(error)
        }
        console.log('Message Delievered')
    })
})

$sendLocationButton.addEventListener('click',(e) => {
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by browser.')
    }

    $sendLocationButton.setAttribute('disabled','disabled')



    navigator.geolocation.getCurrentPosition((position) => {
        //console.log(position)

        socket.emit('sendLocation', {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
        },()=>{
            $sendLocationButton.removeAttribute('disabled')
            console.log('location shared!')         // for acknowledgemt
        })
    })
})
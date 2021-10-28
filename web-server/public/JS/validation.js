console.log('This is validation.js code')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

//messageOne.textContent = 'from javascript'


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    //console.log(location)

    if(location)
   {
        fetch(`http://api.weatherstack.com/current?access_key=5b8a3c041a96a0ee70ea4a9729fa883e&query=${location}`)
        .then((response)=>{
            response.json().then((data)=>{
                if(data.error){
                    console.log(data.error)
                }else{
                    console.log(data.location.name)
                    console.log(data.location.country)
                }
            
            })

        })
    }
    else{
        console.log('Enter some details')
    }
    
})


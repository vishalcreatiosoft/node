//console.log('posts dom working')

const data = document.querySelector('h3')
const dataArray = JSON.parse(data.textContent)
data.remove()

dataArray.forEach(element => {

    const newPost = document.createElement('h4')
    newPost.textContent = element.postmsg
    document.querySelector('body').appendChild(newPost)
});



// console.log('this is validation.js file')

const data = document.querySelector('#info')
const newsInfo = JSON.parse(data.textContent)
console.log(newsInfo)

//removing data from #info
data.remove()


for(let i=0;i<newsInfo.length;i++)
{

    const source = document.createElement('h2')
    source.textContent = newsInfo[i].source
    document.querySelector('#row-home').appendChild(source)

    const title = document.createElement('h3')
    title.textContent = 'Title :    ' + newsInfo[i].title
    document.querySelector('#row-home').appendChild(title)

    const content = document.createElement('p')
    content.textContent = 'Article :    ' + newsInfo[i].content
    document.querySelector('#row-home').appendChild(content)

    const url = document.createElement('a')
    url.textContent = newsInfo[i].url
    document.querySelector('#row-home').appendChild(url).setAttribute('href',url.textContent)
    
}





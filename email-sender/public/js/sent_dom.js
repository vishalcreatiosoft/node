//console.log('sent_com.js')

const data = document.querySelector('p');


if(data.textContent == 'null'){
    const noMessageHeading = document.createElement('h4');
    noMessageHeading.textContent = `No Emails Sent`;
    document.querySelector('#sentEmailDiv').appendChild(noMessageHeading);
   
} 
else{
    const dataArray = JSON.parse(data.textContent);
    data.remove();
    dataArray.forEach(element => {
        
        const to = element.email;
        const content = element.content;

        const receiverHeading = document.createElement('h4');
        receiverHeading.textContent = `Recipient : ${to}`;
        document.querySelector('#sentEmailDiv').appendChild(receiverHeading);
        
        const contentData = document.createElement('p');
        contentData.textContent = `Message : ${content}`;
        document.querySelector('#sentEmailDiv').appendChild(contentData);


    });
    
}

data.remove();
const userData = document.querySelector('h6')

const dataArray =  JSON.parse(userData.textContent)
//console.log(userData.textContent);
//console.log(dataArray);
userData.remove();

if(dataArray.length == 0){
    const noMessageHeading = document.createElement('h4');
    noMessageHeading.textContent = `No Emails Received`;
    document.querySelector('#receivedEmailDiv').appendChild(noMessageHeading);
} 
else{
    dataArray.forEach(element => {
        
        const sender = element.sender;
        const content = element.content;

        const senderHeading = document.createElement('h4');
        senderHeading.textContent = `Sender : ${sender}`;
        document.querySelector('#receivedEmailDiv').appendChild(senderHeading);
        
        const contentData = document.createElement('p');
        contentData.textContent = `Message : ${content}`;
        document.querySelector('#receivedEmailDiv').appendChild(contentData);


    });
}
const user = document.querySelector('p');
console.log(user.textContent);
user.remove();

// const username = document.createElement('h2')
// username.textContent = user;
document.querySelector('#center-heading').appendChild(user);
// const greet = (name = 'vishal') => {
//     console.log(`Hello ${name}`)
// }
// greet('ram')
// greet()

const transaction = (type, {label, stock = 0} = {}) =>{
    console.log(type, label, stock)
}
transaction('order')
// const person = {
//     name: 'Juan',
//     age: 35,
//     location: {
//         city: 'Haymarket',
//         temp: 30
//     }
// }

// const {name="anonymous" , age} = person
// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// } 

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         // name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);


///////////ARRAY

// const address = ['1299 S Juniper Street', 'Haymarket', 'Virginia', '20169']
// const [ , city, state = 'New York' ] = address;
// console.log(`You are in ${city}, ${state}.` );

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']

const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`);
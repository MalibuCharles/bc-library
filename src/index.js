// const express = require('express');
// const { initializeApp, cert } = require("firebase-admin/app");
// const { getFirestore } = require("firebase-admin/firestore");

// const credentials = require("../credentials.json");

// initializeApp({
//     credentials: cert(credentials)
// })


// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// const db = getFirestore();

// const userCollection = db.collection("users");
// userCollection
// .get()
// .then(snapshot =>{

// })

// app.post('/users', (req, res) => {
//     const {name, age, email} = req.body;


//     const user = { name, age, email};

//     const result = `My name is ${user.name}, I am ${user.age} years old and my email is ${user.email};`

//     res.send(result);
// })

// app.listen(3000, () => {
//     console.log('We be listening on 3000');
// })

const customer = [{ name:'Malibu', drinkingAge: false, age: 19}, {name:'Sabrina', drinkingAge: true, age: 25}, {name:'Adam', drinkingAge: true, age: 99}]

const isDrinkingAge = customer.some(customer => customer.age >= 21)
const areAllDrinkingAge = customer.every(customer => customer.drinkingAge >= 21)
const oneDrinkingAge = customer.find (customer => customer.drinkingAge >= 21) 
const drinkingAgeCustomer = customer.filter(customer => customer.age >= 21)


console.log(areAllDrinkingAge)
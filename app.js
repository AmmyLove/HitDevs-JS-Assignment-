// Assignment 1
// Given "year of birth" and "current year", write a logic in JavaScript that will calculate a person's age






// const date = document.getElementById('date');

// let dob = '20010812';
// let year = Number(dob.substr(0, 4));
// let month = Number(dob.substr(4, 2));
// let day = Number(dob.substr(6, 2));
// let today = new Date();
// let age = today.getFullYear() - year;
// if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
// age--;
// }
// console.log(age);



const date = document.getElementById('date')

const button = document.getElementById('btn')

 
let YearOfBirth = 1999;
let CurrentYear = 2023;
let age = CurrentYear - YearOfBirth;
    date.innerHTML= age;

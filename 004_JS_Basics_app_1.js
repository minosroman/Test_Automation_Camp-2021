//JAVASCRIPT BASICS. Part 1

//1.Write a JS program to compute and print the sum of the two given integers
let a = 10,
    b = 20;
console.log(`Sum is: ${a + b}`);


//2.Write a JS program to create a new string adding “Test_" in front of a given string
let givenStr = 'Automation_Camp-2021';
let newString = 'Test_' + givenStr;
console.log(newString);


//3.Write a JS program to combine and print your first, last name and age
const firstName = 'Roman',
      lastName = 'Budziak',
      age = 32;
console.log(`Hello, my name is ${firstName} ${lastName}. I am ${age} years old.`);


//4.Write a JS program to check a given integer is bigger than 100
let givenInt = 12345;
console.log(givenInt > 100);


//5.Write a JS program to find if the first number is larger from the two given positive integers
let firstNum = 5,
    secondNum = 10;
console.log(firstNum > secondNum);


//6.Write a JS program to check two given numbers and print true if one of the number is 50 or if their sum is 50
let firstGivenNum = 10,
    secondGivenNum = 40;
console.log(firstGivenNum == 50 || secondGivenNum == 50 || firstGivenNum + secondGivenNum == 50);


//7.Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7
let positiveNum = 12345;
console.log(positiveNum % 3 == 0 || positiveNum % 7 == 0);
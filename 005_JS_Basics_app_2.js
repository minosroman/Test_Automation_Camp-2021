//JAVASCRIPT BASICS. Part 2

//1. Write a JavaScript function to check if given string includes given symbol.
let givenStr = 'Eleks Test Automation Camp',
    givenSmbl = 'z';
function checker (a, b){
    if(a.includes(b)){
        console.log(`String "${a}" includes symbol "${b}"`);
    } else {
        console.log(`String "${a}" is NOT includes symbol "${b}"`);
    }
}
checker(givenStr, givenSmbl);


//2. Write a JavaScript function to check whether a string is blank
//or not (string with spaces should be also blank).
let someStr = '  Eleks Test Automation Camp';
function checkBlank (str){
    if(str != null){
        if(str.length > 0 && str.trim() !== ''){
        console.log('String is NOT blank');
        } else {
        console.log('String is blank');
        }
    } else {
        console.log('String is NOT defined!');
    }
}
checkBlank(someStr);


//3. Write a JavaScript function to convert a string in abbreviated
//form. console.log(abbrev (“Name Surname")) – should be
//“N.S.” (should convert lower case names to upper)
let fullStr = 'Name Surname';
function convertAbbrev (str){
    let arrStr = str.toUpperCase().split(' ');
    let abbrev = '';
    for(let i=0; i<arrStr.length; i++){
        abbrev = abbrev + arrStr[i][0] + '.';
    }
    console.log(abbrev);
}
convertAbbrev(fullStr);


//4. Write a JavaScript function that accept two integers and
//display the larger.
function largerInt (a, b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}
console.log(`Larger integer is ${largerInt(5, 6)}`);

//5. Write a JavaScript function with conditional statement to sort
//three numbers
function sortNmbrs (num1, num2, num3) {
let arr = [num1, num2, num3];
arr.sort((a, b) => {
    return a-b;
});
return arr;
}
console.log("Sorted numbers: " + sortNmbrs(56, 89, 23));
//JAVASCRIPT BASICS. Part 3

//1. Write a JavaScript function to get the last element of an array
((arr) => {
    if (arr.length > 0) {
        console.log('The last element of an array: ' + arr[arr.length - 1]);
    } else {
        console.log('Array is empty');
    }
})(['Eleks', 'Test', 'Automation', 'Camp']);


//2. Write a simple JavaScript program to join all elements of the
//following array into a string
function arrayToString(arr) {
    return arr.join(' ');
}
let convertedArr = arrayToString(['Eleks', 'Test', 'Automation', 'Camp']);
console.log(`Converted array: "${convertedArr}"`);
console.log(`Type of converted array: ${typeof(convertedArr)}`);


//3. There are two arrays with individual values, write a
//JavaScript program to compute the sum of each individual
//index value from the given arrays and save them to third array
function arrSum(arr1, arr2) {
    let sumOfIndex = [];
    if (arr1.length > arr2.length) {
        for (let i = arr1.length - arr2.length; i > 0; i--) {
            arr2.push(0);
        }
    } else if (arr1.length < arr2.length) {
        for (let i = arr2.length - arr1.length; i > 0; i--) {
            arr1.push(0);
        }
    }
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        sumOfIndex.push(arr1[i] + arr2[i]);
    }
    console.log(sumOfIndex);
}
arrSum([1, 2, 3, 1, 2, 3], [4, 5, 6]);


//4. Write a JavaScript program to calculate the area and
//perimeter of a rectangle. Rectangle should be an object with
//properties width and height and methods getArea() and getPerimeter();
let rectangle = {
    width: 2,
    height: 4,
    getArea: function () {
        return this.width * this.height;
    },
    getPerimeter: function () {
        return (this.width * this.height) * 2;
    }
};
console.log(`Area of rectangle is ${rectangle.getArea()}\nPerimeter of rectangle is ${rectangle.getPerimeter()}`);

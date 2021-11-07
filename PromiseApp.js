//Create a first function (which takes argument `data`) that always returns a promise and:
//1.If data is not a number, the function returns a promise rejected instantly and give the word "error" (in a string
//2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
//3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string

function checkPromiseData(data) {
    return new Promise((res, rej) => {
        if (!Number.isInteger(data)) {
            return rej('error');
        } else if (Number.isInteger(data) && (data % 2) !== 0) {
            setTimeout(() => {
                return res('odd');
            }, 1000);
        } else if (Number.isInteger(data) && (data % 2) === 0) {
            setTimeout(() => {
                return rej('even');
            }, 2000);
        }
    }).then((value) => {
        console.log(`Your data is "${data}". Type of data is ${value} ${typeof(data)}.(Promise)`);
        return value;
    }).catch((value) => {
        if (value === 'error') {
            console.log(`Data "${data}" is not a number. Type of data is ${typeof(data)}.(Promise)`);
            return value;
        } else {
            console.log(`Your data is "${data}". Type of data is ${value} ${typeof(data)}.(Promise)`);
            return value;
        }
    });
}

//4.Create a second function (which takes argument "result") which should be executed after the
//first function is done and print the final message like `Your number is ${result}` ONLY for cases
//when the first function doesn't return " error“

function promiseRes(result) {
    new Promise(res => {
        //checkPromiseData(result);
        return res(checkPromiseData(result));
    }).then((value) => {
        if (value !== 'error') {
            console.log(`Your number is ${value}.(Promise)`);
        } else {
            console.log(`First function return ${value}.(Promise)`);
        }
    });
}

export function runPromise(data){
    promiseRes(data);
}
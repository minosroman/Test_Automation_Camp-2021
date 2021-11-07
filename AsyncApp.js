//Create a first function (which takes argument `data`) that always returns a promise and:
//1.If data is not a number, the function returns a promise rejected instantly and give the word "error" (in a string
//2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
//3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string

async function checkAsyncData(data) {
    return new Promise((res, rej) => {
        if (!Number.isInteger(data)) {
            console.log(`Data "${data}" is not a number. Type of data is ${typeof(data)}.(Async)`);
            rej('error');
        } else if (Number.isInteger(data) && (data % 2) !== 0) {
            setTimeout(() => {
                console.log(`Your data is "${data}". Type of data is odd ${typeof(data)}.(Async)`);
                res('odd');
            }, 1000);
        } else if (Number.isInteger(data) && (data % 2) === 0) {
            setTimeout(() => {
                console.log(`Your data is "${data}". Type of data is even ${typeof(data)}.(Async)`);
                rej('even');
            }, 2000);
        }
    });
}

//4.Create a second function (which takes argument "result") which should be executed after the
//first function is done and print the final message like `Your number is ${result}` ONLY for cases
//when the first function doesn't return " error“

async function asyncRes(result) {
    try {
        let check = await checkAsyncData(result);
        console.log(`Your data is ${check}.(Async)`);
        return check;
    } catch (check) {
        if (check !== 'error') {
            console.log(`Your number is ${check}.(Async)`);
        } else {
            console.log(`First function return ${check}.(Async)`);
        }
        return check;
    }
}

export async function runAsync(data) {
    let result = await asyncRes(data);
}
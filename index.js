

//HOME WORK ASSIGNMENT DAY 2 SWE IX
//FIBINCOCCI SEQUENCE IN JS FUNCTIONS
//TUE MAY 21, 2024

//Fibinoicc Sequence
function nthFib(n) {
    if(n <= 1) {
        return n;
    }
    else {
        //recursive return sum of fibs
        return nthFib(n-1) + nthFib(n-2);
    }
}

//Digits up to n Fib
function fib(n) {
    //base case
    if(n === 0) {
        return [];
    }
    if(n === 1) {
        return [n];
    }
    if(n === 2) {
        return [0,1];
    }
    //result
    const result = [0,1];
    for(let i = 2; i < n; i++) {
        //push nth fib to arr
        result.push(result[i-1] + result[i-2]);
    }
    return result;
}

//test Cases for sum of fibs
console.log("Nth Fibinoicci num.");
const a = 6; //return 6th fib num
console.log(`The nth Fibonacci of n = ${a} is ${nthFib(a)}.`);
const b = 10; //return 10th fib num
console.log(`The nth Fibonacci of n = ${b} is ${nthFib(b)}.`);

//test cases for arr
console.log("Nth Fibinoicci num.");
const c = 10; //n 10
console.log(`The Fibinocci numbs up to ${c} is ${fib(c)}.`);


//Home Work 2 
function triangleT(tri) {
    //base case not 3 sides
    if(tri.length !== 3) {
        console.log("Not a Triangle");
    }

    //declar tri
    const [a,b,c] = tri;
    //semi prim
    const s = (a+b+c) / 2;
    //calc area
    const area = Math.sqrt(s *(s-a)*(s-b) * (s-c)); //heron form

    return area;
}

//Test Cases for triangle
const tri = [7,12,10];
console.log(`Triangle area for sides ${tri} is ${triangleT(tri)} `);



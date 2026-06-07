const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values(value which are by default assumed to be false and no need for cnditional check)

// false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN(ye bas itni hi hai ..inko chorkar baki sari truthy values)

//truthy values(va;ue which are by default assumed to be true and no need for cnditional check)
// "0", 'false', " ", [], {}, function(){}




// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10->first wala lelete hai here 5
// val1 = null ?? 10->in null and undefined second wala uthalo
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false->kind of is else only 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
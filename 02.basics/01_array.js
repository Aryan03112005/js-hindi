// //arrays
// //ways to declare arrays (some)
// const arr=[1,2,3,4,5]
// const myarr=new Array(1,2,35,5)//no need of[]
// console.log(arr[2]);//gives 3
// //important topics read them from mdm for interviews

// //if u apply copy operations in arrays ->shallow and deep two types of copies formed

// //methods
// // arr.push(6)//add elements at end
// //  arr.pop()//remove last elem
// //  arr.unshift(8)//add a element in starting and shift other bby one place 
// // arr.shift()///remove elemtnts from starting

// // console.log((arr.includes(8)));//give true or false
// // console.log(arr.indexOf(3));//tell index

// // const newarr=arr.join()//chnage the type int  string
// // console.log(typeof(newarr));

// //slice and splice
// console.log("A",arr);
// const a1=arr.slice(0,3)//0,1,2 index got printed only
// console.log(a1);
// console.log("B",arr);
// console.log(arr);//no change in array(ornial )dur to slice but on splice it chnages
// const a2= arr.splice(1,3)//incude both indexs
// console.log(a1);


// console.log(a2);


// console.log(arr);//after spice array changes
///++++++++++++++++++++++++++++++++++++++++++++++


const hero1=['thor','batman','spiderman']
const hero2=['shaktiman','kk','jj']
//to join to=wo arrays use concatenate or spread
const allheroes= hero1.concat(hero2);
console.log(allheroes);

//concat uses a new third arrsy

// spread can join more that twi arrays
const allhero=[...hero1,...hero2]
console.log(allhero);
const another_array=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_anorther_arrays=another_array.flat(Infinity)//spread whole into one arrays
console.log(real_anorther_arrays);


console.log(Array.isArray("hitesh"));//tell it is array or not
console.log(Array.from("hitesh"));//make an arrys out of string
console.log((Array.from({name:"hitesh"})));//***interesting */
let s1=100
let s2=300
let s3=456
console.log(Array.of(s1,s2,s3));//make array




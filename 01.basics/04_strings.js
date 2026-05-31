// const name="aryan"
// const repocount=50
// console.log(name+repocount);//old way and outdated syntax

// console.log(`my name is ${name} and my reposount is ${repocount}`);
// //``backstics

const gamename=new String("ridhima19-08-2008")

// console.log(gamename[0]);
// console.log(gamename.toUpperCase());
// console.log(gamename.length);
// console.log(gamename.charAt(2));//tells which characyer at 2 nd index
// console.log(gamename.indexOf('h'));//tells index of that characyer

const string1=gamename.substring(0,5)//-ve index are not given and if given they r ignored...last index is ignored 0,1,2,3,4 index charatcer are printed

console.log(string1);

const string2=gamename.slice(-8,5)//-ve index can be given and -ve means from backward -1,-2,-3,....here also least index is ignored only till one less than that 

console.log(string2);

const string3="     mango "
console.log(string3);
console.log(string3.trim());//trim down all the spaces from start and end


const url= "https://gyeebehd@20"
console.log(url.replace('@20','-'));//replace


console.log(url.includes('hat'));//tells whether it include ir not
console.log((gamename.split('-')));//split string into an arrays based on something liek it is "-"

const score=400//by default asumming it a number
console.log(score);

const balance=new Number(100)//now it is a number scpeicfically
console.log(balance);

console.log(balance.toString());//converted to string

console.log(balance.toString().length)
console.log(balance.toFixed(2))//tells decimal point 

const othernumber=123.786
console.log(othernumber.toPrecision(3));//round of after 3 place
const hundred=10000000//we face diificulty to read ot so (tolocalstring) is used
console.log(hundred.toLocaleString('en-IN'));//indian format


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);//its an object
console.log(Math.abs(-4));
console.log(Math.round(4.8));
//use ceil for upper orundoff
//use floor for lower round off
console.log(Math.min(4,4,1,3,6));
console.log(Math.max(4,4,1,3,6));

console.log(Math.random());//give value bw 0 and 1 
console.log((Math.random()*10)+1);//give value bw 1 and 9
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
//by using floor u\u will get a erfect number not in decimal
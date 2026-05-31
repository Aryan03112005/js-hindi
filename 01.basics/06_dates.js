let  mydate=new Date()//object h
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());

console.log(mydate.toLocaleTimeString())//tells time;
let mycreatedDate=new Date("01-14-2026")//DD-MM-YY(indian )
console.log(mycreatedDate.toLocaleString());
console.log(Math.floor(Date.now()/1000));//convert into second

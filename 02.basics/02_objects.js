//when we declare objects in litterals then singelton not formed
//if in contructrs then ->yes singleton

// here we r using as ltterals 
const mysymbol=Symbol("key1")//written this to declare symbol inside object
const jsuser={
    name:"aryan",// all act as a string
    age:21,
    [mysymbol]:"key1",//[] used as syntax for symbol if u dont use [ ]it will act as a string 
    location:"jaipur",
    email:"aryan@gmail.com",
    isloggedin:false,
    lastlogin:["mmonday","thursday"]
}

// console.log(jsuser.email);//not a good way
// console.log(jsuser["email"]);//this is better way

// console.log(jsuser[mysymbol]);

// console.log(typeof jsuser.mysymbol);

//to overwrite or change anything 
jsuser.email="arynchat@gmial.com"

//if u want no one change it ->ise freeze
// Object.freeze(jsuser)
 jsuser.email="prw@gmail"
// console.log(jsuser);


jsuser.greetings=function(){
    console.log("hello js user");
    
}
jsuser.greetingstwo=function(){
    console.log(`hello js user,${this.name}`);//this helps to refernece of any key fro objetc
    
}
console.log(jsuser.greetings);//[Function (anonymous)] as output
console.log(jsuser.greetings());
console.log(jsuser.greetingstwo());
//ye karne ke baad error aya tha bol rha tha ki" jsuser.greetings is not a function"bcoz hmne freeze kar diya tha...so unfreexe it 
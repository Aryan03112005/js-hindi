//here we will make objects are constructors


//there r two ways to declare objetcs both are same
// const tinderuser=new Object()//mathod 1
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="aryan"
tinderuser.isloggedin=false
//  console.log(tinderuser)

const regularuser={//nested objects
    email:"as@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aryan",
            lastname:"sachan"
        }
    }
}
console.log(regularuser.fullname.userfullname);
//concatenate objects
const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}
// const ob3={ob1,ob2}//no wrong  it will just join like 2 arrays arrays inside array similiaryly object inside objects

//like this
//{ ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }
//coorect way
//const obj3=Object.assign({},ob1,ob2) //method 1 {}->(target)syntax

const obj3={...ob1,...ob2}//spread (mmethod 2)
console.log(obj3);
 ///array of objects

 const  users=[
    {
        id:1,
        email:"as@xxnj.co",
    },
    {
        id:2,
        email:"as@bhnj.co",
    },
    {

    }
 ]
//  users[1].email

//  console.log(tinderuser);
//  console.log(Object.keys(tinderuser));//write all the key of the object in an array form
//  console.log(Object.values(tinderuser));
//  console.log(Object.entries(tinderuser));
//console.log(tinderuser.hasOwnProperty(isloggedin));




///+++++++++++++++++DECONSTRUCTION OF OBJECTS+++++++++++++++++
//Destructuring extracts values from an object into variables in a single lin
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor//we dont want to write again n again .
// course.coursename
// course.price
//so we deconstruct 
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


///API (API = a messenger that lets two apps talk to each other.)
// api are written in JSON earlier xml format me hoti thi
//synatx for json
{
    "sscdv"="d"
    //both key and vlue  are written instring format

    "scdfv"="cfv"
    "cfv"="cf"
}
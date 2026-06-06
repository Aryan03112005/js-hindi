const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
         console.log(`${this.username} , welcome to website`);//this key words is udes to denote the current context
         console.log(this);//->print the object(When this is used inside a method, it refers to the object that owns the method:)
    }

}

// user.welcomeMessage()//->print hitesh
//  user.username = "sam"
// user.welcomeMessage()//->print sam

//console.log(this);//->print only {}(Outside (Global Scope) — Why {}?
//javascriptconsole.log(this); // → {}
//You're running this in Node.js, where:
//environment Global this valueNode.js (module){} (empty module object)Browserwindow object
//In Node.js, every file is treated as a module, and the top-level this refers to module.exports, which starts as an empty object {}.)




// function chai(){
//      let username = "hitesh"
//     console.log(this.username);//"" his"cannot->be used in any fuction directly 
// }

//   chai()
//same fuction but declaration syntax different
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
//chai()

// const chai =  () => {//=>arrow fucntion
//     let username = "hitesh"
//     console.log(this);
// }


//++++++++++++++++++Claude explaination about this
// Function TypeHas own this?function keyword✅ YesArrow function =>❌ No — borrows from parent
// javascript// Regular function → this = depends on caller
// function chai() {
//     console.log(this.username); // → depends on who calls it
// }
// // Arrow function → this = outer scope (module = {} in Node.js)
// const chai = () => {
//     console.log(this); // → always {} in Node.js module
// }

// chai()


///immplicit and explicit types

// const addTwo = (num1, num2) => {//expliacitly use{}and return 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2//implicit way no need to return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
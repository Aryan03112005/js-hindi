//Immediately invoked function expression(IIFE)
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
//both are same
//syntax for iife()()[function][fuction call]
(function chai(){
    //this is named iife bcoz it has its name "chai"
    console.log(`DB CONNECTED`);
})();//; is very imortant to use hee it  signifies that iife is ended
//iife->sometimes dues to pollution of global scope there is problem so to remove it (it is used)


//arrow fuction in iife
( (name) => {
    //unnamed iffe with parameter
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//***IMPORTANT ->if yoi want to write two iife its important to use ; in the end of first iife */
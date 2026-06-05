//var c = 300//global scope variable
let a = 300 //glpbal
if (true) {//this is if scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

 
//nested  scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()
//#closure ki deinatioon dekh lena ek bar kuch nhi h whi h ki ek bigger function chote wake ko contain kar ta h nested me


//nested scope in if
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);




// ++++++++++++++++++ interesting ++++++++++++++++++

//two ways to declare function
console.log(addone(5))//can be accesed

function addone(num){
    return num + 1
}



// addTwo(5)//cannot be accesed before  because here function is inisde a variable
//here function in in form of exprssion embedded in a variabe
const addTwo = function(num){
    return num + 2
}
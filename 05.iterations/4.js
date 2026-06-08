//now to loop in objects ->can be done using (for in loop)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(myObject)
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
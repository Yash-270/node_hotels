var age=67;
const add=function(a,b){
    return a+b;
}
module.exports={
    age,
    addNumber
}
function callback(){
    console.log('now adding is succseeful complete');
}
const add=function(a,b,callback){
    var res=a+b;
    console.log('res: '+res);
    callback();
}
add(3,344,callback);
// var res=add(2,9);
// console.log(res);
const fs=require('fs');
fs.appendFile('greeting.txt','hi' + user.username +'!\n',()=>{
    console.log('file is created');
});
var _=require('lodash');
const notes=require('./notes.js');
console.log("Server is running");
var age=notes.age;
var res=notes.add(age+18,10);
console.log(age);
console.log('res is: '+res);
var filter=_.uniq(data);
console.log(filter);

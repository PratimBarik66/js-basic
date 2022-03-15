//'use strict' //strict mode
//define person object
let person = {
    name : 'John',
    age : 27,
    //method
    sayHello : function(){
        console.log(this);
    }
}

person.sayHello();//refers person object
const hello = person.sayHello;
hello();//refers to global object

const hello1 = person.sayHello.bind(person);
hello1();//refers to person object

//global function
function hello3(){
    console.log(this);
}
hello3();
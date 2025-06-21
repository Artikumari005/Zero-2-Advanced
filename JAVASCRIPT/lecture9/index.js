//inbuilt objects in js//
//1. MATH object//
//console.log("zennie");
//
//console.log(Math.PI);
//console.log(Math.max(76,33,23,56));
//console.log(Math.min(76,33,23,56));
//console.log(Math.round(1.3));
//console.log(Math.floor(1.3));

//2.DATE object//
//let curr=new Date;
//console.log(curr);
//let date =new Date('january 8 2005 11:00');
//console.log(date);
//console.log(date.getDay());

//* OBJECT CLONING && GARBAGE COLLECTOR IN  JS

let obj={
age:23,
wt:34,
ht:153
}

let dest={};
for(let key in obj){
    let newKey=key;
    let newValue=obj[key];
    dest[newKey]=newValue;
}
console.log("obj",obj);
console.log("dest",dest);
//let dest=Object.assign({},obj);                  //cloning by assigning operator
//obj.age=90; 
//console.log("obj",obj);
//console.log("dest",dest);



//let dest={...obj};         //cloning bye spread operator (...)
//obj.age=90;
//console.log("obj",obj);
//console.log("dest",dest);
//console.log(obj);
//obj.color="white";
//console.log(obj);
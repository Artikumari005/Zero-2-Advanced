//hoisting*


//console.log(age);
//const age=34;



//sayMyName("zinni");
//function sayMyName(finalName){
//    console.log(finalName)
//}

//*function assign to  variable*/
//let greed=function(){
//    console.log("hello!");
//}
//greed();

//*function pass as argument*//

//function greetMe(greet, fullName){
//    console.log("hello",fullName);
//    greet();
//}
//function greet(){
//    console.log("heelo its me");
//}
//greetMe(greet, "love");

//*function return function*//
//function solve(number){
//    return function(number){
//        return number*number;
//    }
//}
//let ans=solve(5);
//let finalAns=ans(10);
//console.log(finalAns);

//const arr = [
//    function(a,b)
//    {
//        return a+b;
//    }
//   function(a,b)
//    {
//        return a-b;
//    }
//    function(a,b)
//    {
//        return a*b;
//    }
//];
//let first=arr[0];
//let ans=first(5,10);
//console.log(ans);


let obj={
    age:23,
    wt:34,
    ht:100,
    greet:()=>{
        console.log("hello");
    }
};
console.log(obj.age);
obj.greet();
//ARRAYS and object IN JS

//et obj={
//name:"zennie",
//age:23,
//course:"btech",
//greet: function(){
//    console.log("hello !");
//}
//
//
//;
//
//for(let key in obj){
//   console.log(key, "",obj[key]);
//}

//console.log(obj)
//obj.greet();
//console.log(typeof(obj));



//let arr=[1,2,3,4,5];
//console.log(arr);
//
// //array constructor
//let brr=new Array('zennie',1,true);  
//brr.push("aarti");
//brr.pop();
//brr.shift();
//brr.unshift("zennie");
//brr.push(23);
//brr.push(65);
//brr.push(28);
//brr.push(90);
//console.log(brr.slice(2,4));
//brr.splice(1,2,'cherry');
//brr.splice(1,0,'cherry');

//console.log(brr);
//console.log(typeof(arr));
//console.log(typeof(brr));
//console.log(brr[0]);

//let arr=[7,2,3,4];
//let ansArray=arr.map((number)=>{
//    return number*number;
//})
//console.log(ansArray);

//let arr=[20,10,30,23,98];
//let evenArray=arr.filter((number)=>{
//    if(number%2===0){
//        return true;
//    }
//    else{
//        return false;
//    }
//});
//console.log(arr);
//console.log(evenArray);

//let arr=[1,2,'love','kunjal',null];
//let ans=arr.filter((value)=>{
//    if(typeof(value)==='string'){
//        return true;
//    }
//    else{
//        return false;
//    }
//});
//console.log(ans);


//*reduce

//let arr=[2,30,40,20];
//
//let ans=arr.reduce((acc ,curr)=>{
//    return acc+curr;
//},0);
//console.log(ans);

///let arr=[3,1,6,9,2,90];
 //let ans=arr.sort((a,b) => (b-a));
//console.log(ans);
//arr.sort();
//console.log(arr);

//let arr=[3,5,34,25,56];
//
//arr.forEach((value,index)=>{
//    console.log("number:",value,"index",index);
//});

//let arr=[34,24,35,67];
//for(let value of arr){
  //  console.log(value);
//}

//let fullName="zinni";
//for(let value of fullName){
//    console.log(value);
//}

//let arr=[3,24,5,23];
//function getSum(arr){
//    let len=arr.length;
//    let sum=0;
//    for(let index=0;index<len;index++){
//        sum=sum+arr[index];
//    }
//    return sum;
//}
//let totalSum=getSum(arr);
//console.log(totalSum);

let fruit=['aaple','banana','grapes','chiku'];

fruit.forEach(function(fruit){
     console.log(`I Love ${fruit}`);
})


//let arr=[3,24,5,23];
//function getSum(arr){
//    let sum=0;
//    arr.forEach((value) => {
//        sum=sum+value;
//    })
//    return sum;
//}
//let totalSum=getSum(arr);
//console.log(totalSum);

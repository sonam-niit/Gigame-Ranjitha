const arr=[1,2,3,4,5,6,7];
//add- push(45);
//removal from last index: pop() 
//add element at first index: unshift(45);
//remove element from first index shift()
arr.push(45);
console.log(arr);
console.log(arr.pop());
arr.unshift(67,89,45);
console.log(arr);
console.log(arr.shift());

//HOF 
//passing function as parameter
arr.forEach(item=>console.log(item));
const newArray=arr.map(function(item){
    return item*3;
})
const newArray1= arr.map(item=>item*3);
console.log(newArray);
console.log(newArray1);
function check(age){
    const myPromise= new Promise((resolve,reject)=>{
        if(age>=18){
            resolve('Resolved')
        }else{
            reject('Rejected')
        }
    })
    return myPromise;
}
console.log(check(78));
check(34)
    .then(resp=>console.log(resp)) //resolved Then part is executed
    .catch(err=>console.log(err)) //rejected catch part is executed

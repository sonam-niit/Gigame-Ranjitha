// const result=fetch('https://jsonplaceholder.typicode.com/todos');

// result
//     .then(resp=>resp.json())
//     .then(json=>console.log(json))
//     .catch(err=>console.log(err))

//Async and Await
//Sync code
async function fetchData(){
    try {
        const result=await fetch('https://jsonplaceholder.typicode.com/todos');
        const json=await result.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
    
}
fetchData()
console.log('Hello!');
console.log('Hi!')

//비동기코드
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!',"power");
    },1500);
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData((text1,text2)=>{
        console.log(text1,text2);
    })
} ,5000)


//promise사용
const fetchData2 = () => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve('Done!');
        },1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData2()
    .then(text=>{
        console.log(text);
        return fetchData2();
    })
    .then(text2=>{
        console.log(text2);
        return fetchData2();
    })
    .then(text3=>{
        console.log(text3);
    })
} ,5000)
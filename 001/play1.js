const name='Max';
let age = 19;
const hasHabies = true;


function summarizeUser1(userName, userAge, userHasHobby){
    return ('Name is '+userName+' Age is '+ userAge+ ' Habby '+userHasHobby);
}

const summarizeUser2 = function(userName, userAge, userHasHobby){
    return ('Name is '+userName+' Age is '+ userAge+ ' Habby '+userHasHobby);
}

const summarizeUser3 = (userName, userAge, userHasHobby) =>{
    return ('Name is '+userName+' Age is '+ userAge+ ' Habby '+userHasHobby);
}

const summarizeUser4 = (userName, userAge, userHasHobby) => ('Name is '+userName+' Age is '+ userAge+ ' Habby '+userHasHobby);

const add1 = (a,b)=>(a+b);
const add2 = (a)=>(a+1);
const add3 = a=>a+1;
const add4 = ()=>1+2;

console.log(name,age,hasHabies);
console.log(summarizeUser1('shin', 45, true));
console.log(summarizeUser2('shin', 45, true));
console.log(summarizeUser3('shin', 45, true));
console.log(summarizeUser4('shin', 45, true));
console.log(add1(1,2));
console.log(add2(1));
console.log(add3(1));
console.log(add4());
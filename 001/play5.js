const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi~ I am '+ this.name);
    }
}

//함수안에서 객체구조분해 사용
const printName = ({name})=>{ //{}안에 객체의 속성을 기입하면 분해된 객체구조의 속성을 그대로 사용할 수 있다.
    console.log(name); // Max
}

printName(person3);

//함수밖에서 객체구조분해 사용
const {name, age} = person3; //person3 객체구조의 name ,age 속성을 그대로 const {name, age}에 할당
console.log(name, age); //Max 29


//배열 구조분해
const hobbies2 = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies2;
console.log(hobby1, hobby2);
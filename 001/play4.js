const hobbies2 = ['Sports', 'Cooking', "Programing", "Driving"];

const copiedArray = hobbies2.slice(); //.slice()로 전체배열 복사\
const copiedArray1 = hobbies2.slice(0,1); //index 0~1 사이의 요소 [ 'Sports' ]
const copiedArray2 = hobbies2.slice(1,2); //index 1~2 사이의 요소 [ 'Cooking' ]
const copiedArray3 = hobbies2.slice(1,3); //index 1~3 사이의 요소 [ 'Cooking', 'Programing' ]

console.log(hobbies2);
console.log(copiedArray);
console.log(copiedArray1);
console.log(copiedArray2);
console.log(copiedArray3);

const copiedArray4 = [hobbies2]; //배열안의 배열, 이것은 배열의 사본이 아니라 완전히 동일한 객체  [ [ 'Sports', 'Cooking', 'Programing', 'Driving' ] ]
console.log(copiedArray4);

const copiedArray5 = [...hobbies2]; //hobbies2 배열의 요소를 끄집어내 복사한 후 copiedArray5 배열에 할당 (스프레드)
console.log(copiedArray5); //[ 'Sports', 'Cooking', 'Programing', 'Driving' ]
console.log(hobbies2); //[ 'Sports', 'Cooking', 'Programing', 'Driving' ]


const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi~ I am '+ this.name); //일반함수형식으로 사용하면 this는 함수내부를 참조한다.
    }
}

const copiedPerson3 = {...person3} //person3 객체의 요소를 끄집어내 복사한 후 copiedPerson3 객체에 할당 (스프레드)
console.log(copiedPerson3); //{ name: 'Max', age: 29, greet: [Function: greet] }
console.log(person3); //{ name: 'Max', age: 29, greet: [Function: greet] }


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3)); //[ 1, 2, 3 ]
console.log(toArray(1,2,3,4)); //허용되지 않은 마지막 arg 4를 넣어어 출력하려면 메소드를 수정해야한다. 그래서 아래와 같이 Rest를 사용한다. [ 1, 2, 3 ]

const toArrayRest = (...arg) => {return arg}; //파라메터에 레스트 사용
console.log(toArrayRest(1,2,3)); //[ 1, 2, 3 ]
console.log(toArrayRest(1,2,3,4)); //[ 1, 2, 3, 4 ]

//배열이나 객체에서 대상을 쪼개는데 사용된다면 스프레드(Spread),
//함수의 인자에서 대상을 묶는데 사용된다면 레스트(Rest)
//비슷한 개념이지만 사용되는 대상이 배열이나 객체라면 스프레드이고 , 함수의 인자라면 레스트이다.
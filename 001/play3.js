const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi~ I am '+ this.name); //일반함수형식으로 사용하면 this는 함수내부를 참조한다.
    }
}

const hobbies1 = ['Sports', 'Cooking', 1, true, person3]; //배열에 어떤 형태를 넣어도 상관 없다.
console.log(hobbies1);

const hobbies2 = ['Sports', 'Cooking'];

for(let hobby of hobbies2){ //배열 루프
    console.log(hobby); 
}

const hobbies3 = hobbies2.map(hobby=>{ //배열에서 .map 사용하면 원본 배열에서 요소를 뽑아내 편집할 수 있다. {} 몸체 포함가능
    return "Hobby: "+ hobby;
});

const hobbies4 = hobbies2.map(hobby=> "Hobby: "+ hobby); //배열에서 .map 사용하면 원본 배열에서 요소를 뽑아내 편집할 수 있다. {} 몸체 생략가능

console.log(hobbies2);
console.log(hobbies3);
console.log(hobbies4);

hobbies2.push('Programing'); //배열에 요소 추가
console.log(hobbies2); //배열은 참조타입이므로 const라해도 추가 가능하다. const값 자체를 바꾸는게 아니라 const가 가르키는 대상을 편집하는것임.


const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi~ I am '+ this.name); //=>를 사용하는 함수에서 this는 전역을 참조한다.
    }
}

const person2 = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi~ I am '+ this.name); //무명함수를 사용하면 this는 함수내부를 참조한다.
    }
}

const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi~ I am '+ this.name); //일반함수형식으로 사용하면 this는 함수내부를 참조한다.
    }
}



console.log(person);
person.greet(); //Hi~ I am undefined
person2.greet(); //Hi~ I am Max
person3.greet(); //Hi~ I am Max
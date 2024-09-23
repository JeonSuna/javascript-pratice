"use strict";

// object literal기법으로 객체 선언하기

let user = {
    name: '홍길동', 
    age: 20,
    isMember: true,
    //객체 내에 객체 선언, 내장 객체
    order: {
        productId: 2,
        count: 10
    },
    //함수 멤버 선언=>메서드
    sayHello: function () {
        console.log(`hello, ${this.name}`)
    },
    // sayHello1: function () {
    //     //객체 내에서 자신의 다른 멤버변수(변수,함수)를 이용하려면 this예약어로 이용해야한다
    //     //this는 예약어, 어떤 객체내에서 자기 자신을 지칭하는 예약어이다
    //     console.log(`hello, ${this.name}-${age}`)
    // },
    //function이 아닌 화살표 함수로 선언하기, 객체 내에 함수를 화살표 함수로 선언하는 것이 아니라
    //화살표 함수 내에서 this가 객체 자신을 지칭하지 못한다는 문제가 있다
    sayHello2: () => {
        console.log(`hello ,${this.name},${this.age}`)
    }

}
//선언된 객체 멤버에 접근하기
console.log(user.name) //홍길동
console.log(user.order.productId)//2
user.sayHello()
// user.sayHello1()  //error:  Uncaught ReferenceError: age is not defined
user.sayHello2()  //hello ,,undefined  arrow에서 this는 윈도우 가르킴,name은 존재,ageX

//축약으로 멤버 선언
let name = '김길동'
let age = 30
let user1 = {
    // name:name,  <==밑에 축약함
    name,
    age,
    sayHello: function () {
        console.log(`${this.name},${this.age}`)
    }
}
user1.sayHello() //김길동,30

//객체 선언할 때는 더 없던 멤버를 나중에 추가 가능
user1.address = 'seoul'
user1.sayHello2 = function () {
    console.log(`${this.name}, ${this.age},${this.address}`)
}
user1.sayHello2() //김길동, 30,seoul

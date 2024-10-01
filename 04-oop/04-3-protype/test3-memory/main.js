"use strict";

function User1(name) {
    this.name = name //객체별로 따로 유지
    this.sayHello = function () {
        console.log(`hello ${this.name}`) //새로운 객체 생성마다 새로운 함수가 만들어질것이다
    }
}
let user1=new User1('홍길동')
let user2 =new User1('이길동')
user1.sayHello()// hello 홍길동
user2.sayHello()// hello 이길동

//user1과 user2에 있는 sayHello가 동일 함수인가?
console.log(user1.sayHello == user2.sayHello) // 서로 다른 함수 객체 , 메모리에 따로 올려짐 

function User2(name) {
    this.name = name
    User2.prototype.sayHello = function () {
        console.log(`Hello, ${this.name}`)
    }
}
let user3 = new User2('김길동')
let user4 = new User2('박길동')

user3.sayHello() //Hello 김길동
user4.sayHello() //Hello 박길동

console.log(user3.sayHello == user4.sayHello) //true , 같은 프로토타입,동일한 함수 공유 , 프로토타입만 메모리에 올림

console.dir(user1)
console.dir(user2)
console.dir(user3)
console.dir(user4)
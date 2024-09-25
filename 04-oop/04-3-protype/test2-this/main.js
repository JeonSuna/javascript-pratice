"use strict";
function User(name) {
    this.name = name
    User.prototype.point=20
    User.prototype.sayHello = function () {
        console.log(`hello,${this.name},${this.point}`)
    }
}
let user1 = new User('홍길동')
user1.sayHello() //hello,홍길동,20

let user2 = new User('이길동')
user2.point = 40
user2.sayHello = function () {
    console.log(`안녕하세요 ,${this.name},${this.point}`)
}
user2.sayHello() //안녕하세요 이길동 40

let user3 = new User('asdasd')
user3.sayHello()//hello,asdasd,20
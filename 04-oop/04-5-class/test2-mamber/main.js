"use strict";
//이 클래스로 생성되는 객체의 멤버를 준비하는 위치
class User {
    //class 영역={ }에 멤버 선언
    name
    sayHello() {
        //멤버 함수내에서 this로 객체 멤버 선언 
        this.adress='seoul'
    }
    constructor(name, age) {
        this.name = name
        //생성자 내에서 this로 멤버 선언
        this.age = age
        this.sayHello2=function(){
            console.log(`Hello, ${this.name},${this.age}`) //Hello, 홍길동,20
        }
    }
}
let obj = new User('홍길동', 20)
//클래스 외부에서 객체의 멤버 추가
obj.phone = '00102'
obj.sayHello()
obj.sayHello2()
console.log(obj.adress, obj.phone) //seoul 00102

//보통 변수는 생성자 내에서 하고, 함수는 class내에서 선언한다 
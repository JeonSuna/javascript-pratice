"use strict";

//test1- private
//js에는 private이라는 예약어 없다. oop에서 private라는 개념은
//클래스 내에 선언된 멤버가 그 클래스 내에서만 사용되게 강제하는 기법을 의미한다

//객체 모형 준비 
class User {
    //이 클래스내에 선언된 변수, 함수 중에서 일부는
    //클래스내에서 필요하니까 선언하기는 하지만 
    //외부에서 이욯하지 못하게 하고싶다 ==>외부와 결합도를 낮추어서 유집보수성 증대
    //private개념으로 사용하고자 하는 멤버의 이름을 #으로 시작 
    #name;
    age;
    constructor(name, age) {
        this.#name = name
        this.age = age
    }
    #myFun() {
        console.log('myFun call')
    }
    sayHello() {
        console.log(`Hello, ${this.#name}, ${this.age}`)
        this.#myFun()
    }
}

let user = new User('홍길동', 20) //User class내에 생성자 호출
// user.#name = '김길동' //error
user.age = 30
user.sayHello()
// user.#myFun() // error


//test... static
//클래스는 객체의 모형이다. 클래스의 대부분의 멤버는 객체 메모리에 할당되어야 하는 객체 멤버이다
// 필요에 의해 선별적으로 객체별 메모리 할당이 필요없는 멤버에 한해서 ...static멤버

class Myclass{
    data1 = 10
    static data2 = 20
    myFun1() {
        console.log(`myFun call ${this.data1} ${this.data2}`)
    }
   static myFun2() {
        console.log(`myFun2 call ${this.data1} ${this.data2}`)
    }
}
//static멤버 접근..객체 생성 없이, 클래스명으로 접근
Myclass.myFun2() //myFun2 call undefined 20 ==>static메모리에 data올라오지 않음. 
                                            // 객체 메모리와 static메모리를 구분해라
console.log(Myclass.data2)//20

//객체멤버를 클래스명으로 접근
console.log(Myclass.data1) //undefined
// Myclass.myFun1() //error

//객체 멤버-객체명으로 
let obj = new Myclass()
console.log(obj.data1) //10
obj.myFun1() //myFun call 10 undefined

// static멤버 - 객체명으로
console.log(obj.data2) //undefined
obj.myFun2()//obj.myFun2 is not a function

//=>static멤버는 클래스명으로
//=>object멤버는 객체 생성후 객체명으로 

"use strict";

function User1(arg1) {
    //new로 호출이 됨으로 호출하자마자 빈상태 객체 만들어짐
    //생성자 함수가 호출이 되는 동안의 this는 그 객체
    console.log(this) //User{}
//빈 객체에 프로퍼티 추가함
    this.data = arg1
    console.log(this) //User{data:'홍길동'}
}
let user1 = new User1('홍길동')

console.log(user1)//User{data:'홍길동'}

function User2(arg1, arg2) {
    this.name = arg1
    this.age = arg2
    
    this.sayHello = function () {
        console.log(`Hello ${this.name},${this.age}`)
    }
}
let user2=new User2('홍길동',20)
let user3 = new User2('김길동', 30)

user2.sayHello() //현 순간의 sayHello의 this는 user2로 호출하는 것임으로 user2,Hello 홍길동,20
user3.sayHello() //현 순간의 sayHello의 this는 user3로 호출하는 것임으로 user3, Hellol김길동,30

function USer3() {  //상위 scope
    this.data = 20
    this.fun1 = function () {
        console.log(this.data) //하위scope
    }
    this.fun2 = function () {
        console.log(this.data)
    }
}
let user4 = new USer3()
user4.fun1() //20
user4.fun2()//20


////// 문제!!------------
//object literal로 만든 객체의 함수 this

let obj = {
    data: 30,
    fun1: function () {
        console.log(this.data)
    },
    fun2: () => {
        console.log(this.data)
    }
}
//오브젝트리터럴은 객체를 정의하는 방법이지 상위스코프를 생성하지 않느다
obj.fun1() //30  ==> function예약어의 함수에서 this는 동적 결정임으로 객체가 만들어 진 후 함수가 호출된다
obj.fun2()//화살표함수는 렉시컬this이다. 작성 시점 상위 스코프 실행되어야 객체가 만들어진다
//하지만 선언 시점에서는 {}는 객체를 만들기위한 data,정보이지 스코프가 아니다 
//위 예에서의 상위 스코프는 window다
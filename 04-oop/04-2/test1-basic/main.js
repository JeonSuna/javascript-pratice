
"use strict";

//일반 함수 선언 this로 멤버 준비되지 않은 경우
function User1(arg1, arg2) {
    //함수 내에 변수와 함수가 선언되어 있다
    //함수 scope내에 선언된 함수의 로컬 멤버이다
    let name = arg1
    let age = arg2
    let sayHello = function () {
        console.log(`User1,${name},${age}`)
    }
    sayHello()
}
//일반 함수 호출 =>정상작동
User1('홍길동', 20)

//객체 생성으로 호출
//new를 이용했기 때문에 this는 준비되어있음. 즉 메모리가 준비되어 있음
// 함수 내에서 this.xxx로 this에 아무것도 추가되지 않은 빈상태의 객체임
// //즉 객체에느 name,age,sayHello()가 존재하지 않는다 
// let obj1 = new User1('홍길동', 30)
// console.log(`${obj1.name}`)  //undefined
// obj1.sayHello() //obj1.sayHello is not a function


//생성자 함수로 준비 
function User2(name, age) {
    this.name = name
    this.age = age
    this.sayHello = function () {
        console.log(`${this.name},${this.age}`)
    }
}
//일반 함수로 이용, new를 이용하지 않아서 this가 준비되지 않는다.
//그 상태에서 this사용시 에러 .왜? new를 이용 안함 ,this즉 객체가 준비 안됨 
// User2('홍길동', 20)//error

//모형(생성자 함수)를 선언하고 모형을 통해 동일 구조의 객체를 반복 생성한다
let user1 = new User2('홍길동', 25)
let user2 = new User2('김길동', 32)

user1.sayHello() //홍길동,25

//생성자 함수와 return
//생성자 함수가 nw로 호출이 되면 함수 내에서 명시적으로 return 시키지 않아도
//생성된 객체가 리턴된다 
function User3(name, age) {
    this.name = name
    this.age = age
    return 10
}
let user3 = new User3('홍길동', 30)
console.log(user3)//return써도 return값 무시되고 객체나옴

function User4(name, age) {
    this.name = name
    this.age = age
    return {
        prodId: 1,
        prodName:'노트북'
    }
}
let user4 = new User4('김길동', 40)
console.log(user4) //{prodId: 1, prodName: '노트북'}

//외부에서 객체 멤버 추가 
console.dir(user1) 
console.dir(user2) 
// 외부에서 추가 가능하고, 추가 한 객체에만 멤버가 존재한다
user1.address = 'seoul'
user1.helloFun = function () {
    console.log('hello')
}
console.dir(user1) //seoul과 함수 추가됨 
console.dir(user2) //이건 따로 추가안했으니 그대로
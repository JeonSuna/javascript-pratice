"use strict";

//test1, 함수와 프로토타입

function myFun(arg1, arg2) {
    console.log(arg1,arg2)
}
//일반함수로 준비
//myFun 내에 프로토타입 변수를 선언한 적 없는데 에러 발생 안함
//constuct()를 가지고 나머지 멤버는 없는 빈 상태의 객체가 자동 준비
//생성자 함수가 아닌 모든 함수내에 준비
console.log(myFun.prototype)

//test2. 생성자 함수와 프로톹타입

function User(name, age, adress) {
    //this.xxx => 객체 생설될 때마다 객체의 메모리에 유지된다
    this.name = name
    User.prototype.age = age
    User.prototype.adress=adress
}
let user1 = new User('jeon', 20, '새솔동')
console.log(user1.name,user1.age,user1.adress)
let user2 = new User('kim', 40, '어디겡')
console.log(user2.name, user2.age, user2.adress)
console.log(user1.name, user1.age, user1.adress)
//age와 address는 user1의 메모리에는 없는 것이기에 상속 받아 사용은 할 수 있지만,
// 값은 prototype 객체에 저장된 상태로 나온다.
console.dir(user1)
console.dir(user2)

user1.age = 50
user1.adress='incheon'
//prototype에 선언된 변수 값을 객체에서 변경을 시키면
//프로토타입의  데이터가 변경되지 않고 그 객체내에 동일 이름의 변수가 선언되어
//그 객체내에 유지되는 데이터가 된다
console.log(user1.name,user1.age,user1.adress) //jeon,40,incheon
console.log(user2.name, user2.age, user2.adress) // kim,40,어디겡
console.dir(user1)
console.dir(user2)
//생성자 함수 내에서만 prototype추가가 아니라 외부에서 추가 가능
User.prototype.email = 'sdf@naver'
console.log(user1.name, user1.age, user1.adress, user1.email)

//객체의 멤버명과 프로토타입의 멤버명이 동일할 수 있는데
//이때는 객체멤버가 우선적으로 이용된다
//명시적으로 이름이 동일할 때 프로토타입의 멤버를 참조하게 하고 싶다면
console.log(user1.age,user1.__proto__.age) //50,40
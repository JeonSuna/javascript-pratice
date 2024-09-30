"use strict";
//간단하게 객체를 생성해서 사용하는 방법 =object literal

let user1 = {
    name: '홍길동',
    age:20
}
console.log(user1) //{name: '홍길동', age: 20}
console.dir(user1)
//this:name,age
//prototype - Object

//==>모든 객체는 prototype이 지정된다
//=>object literal 기법으로 만든 객체는 아래처럼 만든것과 동일한 방법이다
//prototype은 객체 정보이다 
let user2 = Object.create(Object.prototype, {
    name:{value:'홍길동'},
    age:{value:30}
})
console.log(user2)
console.dir(user2) //literal과 결과 똑같다
//그런데 object literal 기법으로 만들면 prototype지정?

function Shape(name) {
    this.name=name
}
Shape.prototype.draw = function () {
    console.log(`${this.name}을 그립니다`)
}
//객체를 하나만 만들건데 내가 원하는 prototype로 
let rect1 = Object.create(Shape.prototype, {
    name: { value: 'rect1' },
    width: { value: 100 },
    height:{value:200}
})
rect1.draw()
console.dir(rect1)
"use strict";
let obj = {
    name: '홍길동',
    age: 10,
    address:'seoul'
}
//특정 객체의 property의 description확인
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
//{ value: '홍길동', writable: true, enumerable: true, configurable: true }

//writable: 값 변경 못하게 하고자 할 때
Object.defineProperty(obj, 'age', { writable: false })
obj.name = '김길동'
/* age눈 값 변경 못하게해서 밑에처럼 오류 뜸
obj.age = 20 //Cannot assign to read only property 'age' of object '#<Object>'
*/
//enumerable
console.log(Object.keys(obj)) //['name', 'age', 'address'] , 프로퍼티 파악 가능
console.log(Object.values(obj)) // ['김길동', 10, 'seoul']
console.log(Object.entries(obj)) 
// 0: ['name', '김길동']
// 1: ['age', 10]
// 2: ['address', 'seoul']

 // in은 열거 예약어이다 , obj의 entry 갯수만큼 for 반복한다
for (let property in obj){
    console.log(property)
}
//name
//age
//address
Object.defineProperty(obj, 'age', { enumerable: false }) //age를 열거형에 포함시키지 마라
console.log(Object.entries(obj))
// 0: ['name', '김길동']
// 1: ['address', 'seoul']
for (let property in obj) {
    console.log(property)
}
//name
//address

console.log(obj.age) //열거형에만 포함 안되는 거지, 다른곳에는 포함 된다


//configurable
//wriable을 false로 지정했다고 하더라도 누군가가 true로 변경해서 값 변경 할 수도 있다
Object.defineProperty(obj, 'age', { writable: true })
obj.age = 20

//descriptor를 조정 한 후에 다시 descriptor가 조정되지 못하게 한다
Object.defineProperty(obj, 'age', { writable: false, configurable: false })
Object.defineProperty(obj, 'age', { writable: true }) //에러뜨게 함
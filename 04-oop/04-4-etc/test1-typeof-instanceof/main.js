"use strict";

function User() {
    
}
let user1 = new User()
///type of

console.log(typeof 10)// number
console.log(typeof 'hello') //string
console.log(typeof true)// boolean
console.log(typeof User)//function
console.log(typeof [10,20])//object
console.log(typeof user1)//object

//instanceof 연산자, = 객체 타입을 판단하기 위한 연산자
console.log(10 instanceof Number) //false
console.log(new Number(10) instanceof Number) //true

function Car() {
    console.log(user1 instanceof user)
    console.log(user2 instanceof user)
}

function Shape() {}
function Rectangle() { }

Rectangle.prototype = Shape.prototype

let shape = new Shape()
let rect = new Rectangle()
console.log(shape instanceof Shape) //t
console.log(shape instanceof Rectangle)//t
console.log(rect instanceof Shape)//t
console.log(rect instanceof Rectangle)//t

Rectangle.prototype = new Shape()

let shape1 = new Shape()
let rect1 = new Rectangle()
console.log(shape1 instanceof Shape) //t
console.log(shape1 instanceof Rectangle)//false
console.log(rect1 instanceof Shape)//t
console.log(rect1 instanceof Rectangle)//t

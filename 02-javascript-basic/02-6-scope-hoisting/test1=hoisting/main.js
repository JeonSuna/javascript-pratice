"use strict";

//var hoisting test
//아래 선언된 변수의 선언부분만 위로 올린다.
console.log(`step1, data1=${data1}`)
data1 = 20
console.log(`step2.data2=${data1}`)
var data1 = 10
console.log(`step3,data1=${data1}`)

//test2 let,const되는지 안되는지 확인하기
// console.log(data2)
let data2 = 10 //Cannot access 'data2' before initialization
const data3 = 30


//test 함수 호이스팅
console.log(myFun1())
function myFun1() {
    return 'myFum1 call'   //myFum1 call
}

// console.log(myFun2())
const myFun2 = () => {
    return 'myFun2 call' //Cannot access 'myFun2' before initialization
}

//var로 함수를 선언하면 호이스팅이 가능할까?
//var로 선언하면 호이스팅이 되기는 하지만 선언부분만 위로 올리고 값이 할당되기 전까지는 undefined 상태이다
console.log(myFun3())
var myFun3 = () => {
    return 'myFun3 call' //myFun3 is not a function
}
//표현식 힘수로 선언하면 호이스팅이 안된다.


"use strict";
//test1 locak variable vs glober variable

// let data1 = 10 //grobal variable
// function myFun(arg1) {
//     let data2 = 20
//     //함수 내부에서 global,local variable 이용이 가능하다
//     console.log(`${data1},${data2},${arg1}`)
// }
// myFun(30) //10,20,30
// console.log(data1) //10
// console.log(arg1)//arg1 is not defined
// console.log(data2)//arg1 is not defined

//hof
function test1() { console.log('test1') }
function test2() { console.log('test2') }
function myFun2(arg) {
    arg()
    return test2
}
let result = myFun2(test1)
result()

//함수를 어떤함수의 매개변수에,그 함수의 결과로 리턴
//그곳에서만 사용되는 함수다. 굳이 정식으로 선언할 필요가 있을까?

function myFun3(arg) {
    arg()
    return()=>console.log('test2')
}
myFun3(() => console.log('test1'))
result3()
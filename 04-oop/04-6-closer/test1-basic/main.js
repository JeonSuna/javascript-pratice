"use strict";

//test1--------------실행 컨텍스트---------------
let x = 10
// function oneFun() {
//     let y = 20
//     console.log(x,y)
// }
// function twoFun() {
//     let z = 30
//     console.log(x,z)
// }
// console.log(x)//10
// oneFun()//10,20
// twoFun()//10,30
// console.log(x)//10

//test2----------------outer내의 inner이 선언되어 있고, inner에서 outer의 정보를 이용하고있지만(렉시컬정보) ----------------------
//-----------------------실행 콘텍스트 정보만으로 충분함으로 closuer는 필요가 없는 상황이다--------------
function outerFun() {
    let y = 20
    function innerFun() {
        let z = 30
        console.log(x,y,z)
    }
    innerFun()
}
outerFun()

//test3----------------------------closuer가 필요한 상황-------------------------
//--------------------함수의 렉시컬 정보가 따로 유지되어야 하는 상황------------
function outerFun() {
    let y = 20
    
    function innerFun() {
        let z = 30
        console.log(x,y,z)
    }
    return innerFun
}
let resultFun = outerFun() 
resultFun()//10,20,30
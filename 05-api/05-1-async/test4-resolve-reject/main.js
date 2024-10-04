"use strict";

//------------------test1---------------------
//js에서 에러 핸들링 구문
//코드가 실행되다가 얼마든지 에러가 발생할 수 있다
//에러 상황이면 프로그램이 종료된다
// //에러가 발생이 되었다고 하더라도 정상적으로 프로그램을 실행시키기 위한 기법
// try {
//     //정상적으로 실행되어야 하는 코드 , !!!무조건 실행!!!
//     console.log('1')

// } catch (e) {
//     //try에서 에러가 발생될 때 자동 호출..에러 대응 코드
//     console.log('2') //!!에러가 발생 되어야 실행!!!//
// }
// console.log('3')
// //1
// //3

//-----------------test2----------------------
// try {
//     //정상적으로 실행되어야 하는 코드 , !!!무조건 실행!!!
//     console.log('1')
//     throw new Error('my error..') //에러가 발생되었다고 가정하고
//     console.log('1-1')

// } catch (e) {
//     //try에서 에러가 발생될 때 자동 호출..에러 대응 코드
//     console.log('2') //!!에러가 발생 되어야 실행!!!//
// }
// console.log('3')
// //1  try는 정상 실행 와중에 error발생하여 바로 catch로 넘어가서 1-1 console.log에 발생X
// //2
// //3



//---------------------------test3------------------
// function myFun1() {
//     return new Promise(() => {
//         let interval = setInterval(() => {
//             console.log('in promise')
//         }, 1000)
//         setTimeout(() => {
//             clearInterval(interval)
//         },3000)
//     })
// }
// console.log('step1')
// myFun1()
// console.log('step2')


//------------------------test4---promise결과 데이터 발행,획득-------------------
// function myFun2() {
//     return new Promise((resolve) => {
//         setTimeout(()=> resolve(10),1000)
//     })
// }
// myFun2()
// .then((value)=>console.log(`result :${value}`))


//--------------------------------test5---결과 및 에러 발생,획득---------------
function myFun3(num) { 
    return new Promise((resolve, reject) => {//excute등록! 결과데이터,에러데이터
        if (num > 0) resolve(num * num) //then의 값
        else reject('0보다 큰 수를 지정하세요')
    })
}
//reject 까지 획득하기 위해 then에 함수 두개 등록함////callback2개, 결과와 에러
myFun3(10).then(
    (value)=> console.log(`result: ${value}`),//resolve데이터
    (error) => console.log(error)
)  //성공했을 때 

myFun3(-1).then(
    (value) => console.log(`result: ${value}`),//resolve데이터
    (error) => console.log(error)
) //실패했을때
//then에 콜백함수가 여러개 드옭하는 것이 코드 작성상 불편하다면
//error만 별도로 catch에 등록
myFun3(10)
    .then((value) => console.log(`result:${value}`)) //즉시실행함수
    .catch((error) => console.log(error))
    .finally(() => console.log('finally 실행 부분')) //필수는 아니고 원한다면
// //finally 는 마지막에 무조건 실행
    
// //result:100
// //finally부분 실행


// myFun3(0)
//     .then((value) => console.log(`result:${value}`))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('finally 실행 부분')) //필수는 아니고 원한다면
//0보다 큰 수를 지정하세요
// finally 실행 부분
    
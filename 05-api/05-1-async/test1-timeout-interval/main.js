"use strict";
//--------------------------------test1--------------------------------------
// function sayHello() {
//     //시간 측정 하기위해
//     console.timeEnd()
//     console.log('Hello')
// }
// //즉시 실행
// console.time()//timeEnd에서 걸린 시간 출력 (time부터end까지 실행 시간)
// setTimeout(sayHello)
// setTimeout(sayHello, 1000) //default: 1006.617919921875 ms ==>1초 지난 후 함수 호출됨

//--------------------------------test2-----------------------------------
// function sayHello(arg1, arg2, arg3) {
//     console.log(`Hello,${arg1},${arg2},${arg3}`)
// }
// setTimeout(sayHello,1000,'홍길동',10,true)

//의뢰 ..취소
// function sayHello3() {
//     console.log('Hello')
// }
// //몇개라도 등록, 하나하나 식별자가 리턴, 취소를 위해서는 식별자 필요하다
// let id = setTimeout(sayHello3, 1000)//1초후 실행
// clearTimeout(id) // 함수 호출 예약 취소

//---------------------------------test3--interval--------------------------------------
// function fun1(name) {
//     console.log(`fun1,${name}`)
// }
// let id = setInterval(fun1, 1000, '홍길동')// 1초마다 한번씩 찍힘
// setTimeout(() => clearInterval(id), 3000) //화살표 함수를 3초후에 싱행, 즉 3초후에 반복 멈춰짐

//---------------------------------test4-------------------------------------------------

//0.5초 걸리는 업무를 진행하는 함수를 1초마다 반복 호출
//일부러 시간을 지연시키기 위해
// function sleep(sec) {
//     //매개변수 시간 후에 결과 리턴 , ex) 매개변수가1000이면 1초후에 결과 return
//     return new Promise(resolve=>setTimeout(resolve,sec))
// }
// let beforeTime = performance.now() //지금 시간부터다!라는 명령 , console.time과의 차이점 =??

// let sayHello = async () => {
//     let nowTime=performance.now() //이 코드가 실행되는 시간
//     console.log(nowTime - beforeTime)
//     beforeTime = nowTime
//     await sleep(500) //0.5초 쉬고 ,sayHello는 0.5초가 걸리는 함수다
// }
// let id = setInterval(sayHello, 1000)//0.5초마다 걸리는 걱 1초마다call함
// setTimeout(()=>clearInterval(id),3000)
// 1010.9000000059605
// 991.5
// 1001.3000000119209
// //=>업무가 1초마다 실행된 것이 아니라, 함수 호츌 저체가 1초마다임


//----------------------------------test5---------------------------
//0.5초 걸리는 업무를 진행한 후에 1초 후에 다시 업무 진행

let id = 0
let sayHello = async () => {
    let nowTime = performance.now()
    console.log(nowTime-beforeTime)
    beforeTime = nowTime
    await sleep(500) //0.5초 업무 진행,,
    //밑줄이 실행되었다는 것은 윗줄의 실행이 끝났다는 것  (0.5초 실행 끝남)
    setTimeout(sayHello,1000)
}
setTimeout(sayHello, 1000)
// 1013.5999999940395
// 1526.4000000059605
// 1518.2000000178814
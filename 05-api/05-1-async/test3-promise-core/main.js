"use strict";

//test1---------------------동기실행------------------------------------------------
// function myFun() {
//     console.log('done--')
//     return 10
// }
// console.log('step1')
// let result = myFun()
// console.log('step2:' + result)
//step1
//done
//step2:10
//==>step1이 실행된 후 함수 호출, 함수의 실행이 끝나야 step2가 출력(동기적 실행)

//test2--------------------------------비동기 실행---------------
function myFun() {
    //호출 되자마자 promise 객체를 리턴 시켜서, 함수를 호출한 곳이 대기상태가 되지 않게 한다
//promise의 매개변수는 함수, 시간이 오래걸리는 업무를 처리하는 함수
    return new Promise((resolve, reject)=> {
        //1초후에 10이라는 데이터가 발생한다 
        setTimeout(() => resolve(10), 1000)
    })
}
console.log('step1')
//promise의 비동기 업무에 의한 결과가 발생할 때 실행될 함수를 등록
//결과를 등록만 한 것이지 실행시킨것이 아니다 , 실행은 비동기 업무에서 
//결과가 발생할 때 알아서 실행된다
let promise = myFun()
promise.then(result => {//프로미스가 수행되면 값을 받아온다(resolve콜백함수로 전달한 값)
    console.log(`result:${result}`) // //프로미스 객체 생성이1초후에 실행됨 
})//결과값 받기 위한 함수 등록
console.log('step2') //즉시 실행됨
//step1
//step2
//result :10
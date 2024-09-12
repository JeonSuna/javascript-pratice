"use strict";
//중복선언
var data1 = 10
let data2 = 10
const data3 = 10

var data1 = '홍길동'
// let data2 = '홍길동' //error
// const data3 = '홍길동' //error

//==>동일 스코프에서 중복선언은 var에서만 지원된다

//scope가 다른 위치에서 중복 선언
let data4 = '홍길동'//grobal scope
const myFun = () => {
    let data4 = '김길동' //local scope
    console.log(`in function${data4}`) //김길동
}
myFun()
console.log(`out function${data4}`) // 홍길동


//==>스코프가 다르다면 변수 중복 선언 가능하다. let,const도
//local우선이다
//변수명을 의미있는 단어로 주는것이 기본이므로 변수명을 중복해서 local변수를 자주 만든다


//함수 중복 선언
function myFun1() { console.log('step1') }
function myFun1() { console.log('step2') }
myFun1()//step2

var myFun4 = function () { console.log('step2') }
var myFun4 = function () { console.log('step2') }
myFun4()//step2
let myfun3 = function () { console.log('step1') }
// let myfun3 = function () { console.log('step2') } //eror

//==> 함수 중복 선언:선언식 함수와  var에 대입되는 표현식 함수만 가능

//모든 소프트웨어 언어에서는 하나의 scope({})내에 서언된 변수, 함수는 그 scope내에서만 사용

// var name1 = '홍길동'
// const someFun = () => {
//     var name1 = '김길동'
//     console.log(`im someFun 1,name1=${name1}`) //김길동
//     for (let i = 0; i < 1; i++) {
//         var name1 = '이길동'
//         console.log(`in someFum, in for, name=${name1}`) //이길동
//     }
//     console.log(`in someFum2,name=1${name1}`)//이길동


//     if (true) {
//         var name1 = "박길동"
//         console.log(`in some Fun ,in if, name1=${name1}`)
//     }
//     console.log(`in someFun3, name1=${name1}`) // 박길동
// }
//     someFun()
//     console.log(`in someFun3, name1=${name1}`) //홍길동 (함수스코프는 지원한다는 뜻)


let name1 = '홍길동'
const someFun = () => {
    let name1 = '김길동'
    console.log(`im someFun 1,name1=${name1}`) //김길동
    for (let i = 0; i < 1; i++) {
        let name1 = '이길동'
        console.log(`in someFum, in for, name=${name1}`) //이길동
    }
    console.log(`in someFum2,name=1${name1}`)//김길동


    if (true) {
        let name1 = "박길동"
        console.log(`in some Fun ,in if, name1=${name1}`)//박길동
    }
    console.log(`in someFun3, name1=${name1}`) // 김길동
}
someFun()
console.log(`in someFun3, name1=${name1}`) //홍길동

'use strict';

let age = 32
let address = '서울'

//if....................
if (age>=10) {
    console.log(`age:${age}, 당신의 나이는 조건에 만족합니다`)
} 

//if else
if (age <= 30) {
    console.log(`age:${age}, 당신의 나이는 조건에 만족합니다`)
}else {
    console.log(`age:${age}, 당신의 나이는 조건에 만족하지 않습니다`)
} 

//if else if
if (age < 30 && adress === '서울') {
    console.log(`age:${age}, address:${address}, 나이조건에 만족하고 서울에 거주합니다`)
} else if (age < 30 && adress === '부산') {
    console.log(`age:${age}, address:${address}, 나이조건에 만족하고 부산에 거주합니다`)
}
else {
    console.log(`age:${age}, address:${address}, 나이와 거주지역 조건에 만족하지 않습니다`)
}

//if,else block이 한줄이라면 { } 생략 가능하다
if (age < 30)
    console.log('조건에 만족합니다')
else
    console.log('조건에 만족하지 않습니다')

//js는 다양한 타입의 데이터가 true/false로 판단될 수 있다
let data = 1
if (data) {
    console.log('data is false')
} else {
    console.log('data is false')
}

//if()에 들어가야 하는 값은 true,false
//만약 숫자,문자등의 데이터가 들어오면 boolean으로 변형시켜서 판단하게 되어있다
console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean('hello')) //true
console.log(Boolean(null))//false
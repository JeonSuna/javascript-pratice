"use strict";
//[ ] 기법으로 배열 선언

let product1 = ['book1', 'book2']
let product2 = []

//instanceof 는 true와 false가 나오는 연산자이다
//왼쪽 객체가 오른족 타입인가?
console.log(product1 instanceof Array) //true
console.log(product2 instanceof Array) //true


//new Array로 배열 선언
let product3 = new Array('book3', 'book4')
let product4 = new Array() //빈 배열 객체
console.log(product3 instanceof Array) //true
console.log(product4 instanceof Array) //true

///length
// . : .객체.멤버(변수,함수)
// . : 객체 멤버 접근 얀신지
console.log(product1.length) //2

for (let i = 0; i < product1.length; i++){
    console.log(`array[${i}]= ${product1[i]}`)
}

//foeEach
// 호출하면서 순차적으로 배열에 담긴 데이터 index를 개발자 함수의 매개변수에
//첫번째 매개변수가 data, 두번째 매개변수가 index이다.
//배열의 모든 요소를 순회하기 때문에 for문을 안돌려도 됨
product1.forEach((value,index) => {
    console.log(`array[${index}]=${value}`)
})

//배열의 데이터 수정
product1[0] = 10
product1[1] = 20
console.log(product1) //[10, 20]

product1.push(30)
product1.push(20)
console.log(product1)//[10, 20, 30, 20]
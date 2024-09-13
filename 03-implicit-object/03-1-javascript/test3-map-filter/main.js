"use strict";
let array = [11, 2, 20, 15, 5]
//배열 데이터 중에서 10보다 큰 수만

let result = array.filter((value)=> {
    //filter함수는 조건을 명시하기 위해서 사용.
    //이 함수의  return값은 true아니면 false이다
    return value > 10
})
console.log(result) //[11, 20, 15]


//배열의 데이터가 모두 조건에 만족하는가 ? 최종결과느 true/false

result = array.every((value) => {
    //every에 지정한 함수의 반환값은 조건 판단이므로
    return value>4
})
console.log(result)

//배열의 데이터에 모두 2를 곱한  결과값, 최종 결과는 배열
result = array.map((value) => {
    //조건을 판단하는 것이 아니라 조작된 데이터를 획득하고자 함으로
    //리턴은 조작된 값이다
    return value*2
})
console.log(result)

//sort정렬 오름차순 정렬
//정렬 알고리즘은 함수로 매개변수를 지정한다
//정렬을 위해서는 두 데이터 중 어느것이 크고 작은지에 대한 판단이 있어야 한다.
result = array.sort((data1, data2) => {
    //반환값은 1, 0 , -1
    //이때의 1은 data1 > data2
    //0은 data1=data2
    // -1은 data < data2

    if (data1 > data2) return 1
    else if (data1 === data2) return 0
    else return -1
})
console.log(result)//[2, 5, 11, 15, 20]
 
//내림차순 예시
result = array.sort((data1, data2) => {
    if (data1 > data2) return -1
    else if (data === data2) return 0
    else return 1
})
console.log(result)  //[20, 15, 11, 5, 2]
"use strict";
///round 반올림 해보기
console.log(Math.round(0.56)) //1
console.log(Math.round(0.1)) //0
console.log(Math.round(1)) //0
console.log(Math.round(1.2)) //1
console.log(Math.round(-1.2)) //-1
console.log(Math.round(-0.56)) //-1


//random
console.log(Math.random()) //0과 1사이임
console.log(Math.random() * 3)  //0과 3사이의 ..

//51~70사이의 난수
let max = 70
let min = 51
console.log(Math.random()*(max-min)+min)

//min, max 범위
console.log(Math.min(39,45,312,12)) //12


let array=[39,45,21,60]
//배열에 숫자 데이터가 있고 그 중 min과  max를 고를 때
//...을 쓰는 경우 1) rest parameter-함수의 마지막 매개변수를 rest parameter로 선언한다
              // 2) spread operator- 배열의 데이터를 전체 나열 할 때

//...aray=>39,45,21,60을 가리킨다
console.log(Math.min(...array)) //21
 console.log(Math.max(...array)) //60
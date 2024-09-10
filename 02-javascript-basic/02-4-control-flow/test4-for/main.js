"use strict";

for (let i = 0; i < 3; i++) {
    console.log(`hello${i}`);
}
for (let i = 3; i > 0; i--) {
    console.log(`world${i}`);
}

for (let data1 = 1, data2 = 10; data1 < 5 && data2 > 5; data1++, data2 -= 2) {
    console.log(`${data1},${data2}`);
}

//배열의 데이터
//배열의 데이터를 순차적으로 획득해서 핸들링
let array = [10, 20, 30];
for (let i = 0; i < 3; i++) {
    console.log(`array[${i}]=${array[i]}`);
}


//1 부터10까지 더해서 최종결과를 출력
let sum = 0
for (let i = 1; i < 11; i++) {
    sum += i
}
console.log(sum)

//1부터10까지 홀수만 더해서
let sum2 = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        sum2 += i
    }
}
console.log(sum2)


//구구단 찍기
for (let i = 1; i < 10; i++) {
    console.log(`2x${i}= ${2 * i}`)
}

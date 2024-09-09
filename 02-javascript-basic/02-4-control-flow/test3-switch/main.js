"use strict";
//랜덤값 (난수 발생)
//rendom()-랜던값(난수발생) 0~1.0 실수로
//0~3의 난수,*3
//round()반올림
let data = Math.round(Math.random()*3)
console.log(`random:${data}`)
switch (data % 3) {
    case 0: {
        console.log('나머지는 0입니다')
        break
    } 
    case 1: {
        console.log('나머지는 1입니다')
    }
    case 2: {
        console.log('나머지는 2입니다')
    }
    default: {
        console.log('default부분이 실행되었습니다')
    }
}














// calculate = () => {
//     let num1 = prompt("숫자를 입력하세요")
//     let num2 = prompt('두번재 숫자를 입력하세요')
//     let operator = prompt('연산자를 입력하세여')
//     num1 = parseInt(num1)
//     num2 = parseInt(num2) //이거 안하면 55로 나옴
    

//     switch (operator) {
//         case '+': {
//             return num1 + num2
//         }
//         case '-': {
//             return num1 - num2
//         }
//         case '*': {
//             return num1 * num2
//         }
//         case '/': {
//             if (num2 === 0) {
//                 return "0으로 나눌 수 없습니다"
//             }
//             return num1 / num2
//         }
//             default:
//                 return '잘못된 연산임'
//     }
// }

// console.log(calculate())


// //소수판별 만들기-첫번쨰 시도

// "use strict";
// const primeTest = () => {
//     let no = prompt('2이상의 숫자를 입력하세요');
//     let message = '소수입니다'
//     if (no < 2 || isNaN(no))
//         message = '올바르게 입력해주세요'
//     else {
//         for (let i = 2; i < no; i++) {
//             if (no % i === 0) {
//                 message = '소수가 아닙니다'
//                 break
//             }
//         }
//     }
//     //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
//     document.querySelector('#result').innerHTML = message

// }


//두번재 시도
"use strict";
const primeTest = () => {
    let no = prompt('2이상의 숫자를 입력하세요');
    let message = ''

    if (no < 2 || isNaN(no))
        message = '올바르게 입력해주세요'
    else {
        let isPrime = true;
        for (let i = 2; i < no; i++) {
            if (no % i === 0) {
                isPrime = false
                break
            }
        }
        message = isPrime ? message = '소수입니다' : message = '소수가 아닙니다'
    }
    //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
    document.querySelector('#result').innerHTML = message

}

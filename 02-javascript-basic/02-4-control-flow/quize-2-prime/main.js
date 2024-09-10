// "use strict";

// const primeTest = () => {
//     let message = '소수입니다'
//     let array=[]
//     let no = prompt("2 이상의 숫자를 입력하세요");
//     for (let i = 2; i < no; i++){
//         if (no % i === 0) {
//             message=`소수가 아닙니다`
//             break
//         }
//         array.push(no)
//         message = `입력하신 소수는 ${no}까지 소수는  ${array.join(', ')}  입니다.`
//     }

//     //어떤 수가 소수인지를 판단, 2부터 증가시셔서 나누어야 한다. ==> loop
//     //2부터 입력받은 수까지 증가시키면서 소수인지를 판단한다. ==>loop


//     document.querySelector("#result").innerHTML = message;
// };

// "use strict";

// const primeTest = () => {
//     let no = prompt("2 이상의 숫자를 입력하세요");
//     let primes = [];
//     let message = "";

//     for (let i = 2; i <= no; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(i);
//         }
//     }
//     message = `입력하신 ${no}까지의 소수는 ${primes.join(", ")}입니다.`;

//     //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
//     document.querySelector("#result").innerHTML = message;
// };

const primeTest = () => {
    let no = prompt("2 이상의 숫자를 입력하세요");
    no = parseInt(no);
    let primes = [];
    let message = "";

    if (no < 2 || isNaN(no)) {
        message = "2 이상의 유효한 숫자를 입력해주세요.";
    } else {
        for (let i = 2; i <= no; i++) {
            //숫자가 소수일수도 있고 아닐수도 있고 그 결과를 담기위한 boolean 변수
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(i);
            }
        }
        message = `입력하신 ${no}까지의 소수는 ${primes.join(", ")}입니다.`;
    }

    document.querySelector("#result").innerHTML = message;
};

// 함수 실행
primeTest();
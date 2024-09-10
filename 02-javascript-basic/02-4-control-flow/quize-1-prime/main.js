"use strict";

const primeTest = () => {
    let no = prompt('2 이상의 숫자를 입력하세요')
    no=parseInt(no)
    let message = ''
    for (let i = 2; i < no; i++) {
        if (no % i === 0) {
            document.write(`${no}는 소수가아닙니다`)
            break
        }
        
    }
    return`${no}는 소수입니다`


    //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
    document.querySelector('#result').innerHTML = message
}
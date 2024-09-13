let form = document.querySelector('#form');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let result = document.querySelector('#result');
let error=document.querySelector('#error')


function printResult(msg) {
    result.innerHTML = msg
}

function handler(e) {
    printResult(`${e.target.value}`)
}
input1.addEventListener('change', handler)
    
function Password(password) {
    const regex = /^(?=.*[a-zA-A])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
}

input1.addEventListener('blur', (e) => {
    if (e.target.value === '') {
       printResult('아이디는 필수입력 입니다')
    } else {
        handler(e)
    }
})

input2.addEventListener('blur', (e) => {
    if (!Password(e.target.value)) {
        printResult('패스워드는 영문자 숫자 조합 6자 이상이어야 됩니다.');
    } else {
        handler(e)
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input1.value === '') {
        printResult('아이디는 필수입력 입니다');
    } else if (!Password(input2.value)) {
        printResult('패스워드는 영문자 숫자 조합 6자 이상이어야 됩니다.');
    } else {
        printResult(`${input1.value},${input2.value}로 로그인을 시도합니다`);
    }
});
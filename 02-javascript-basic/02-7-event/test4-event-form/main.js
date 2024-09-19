"use strict";
let result = document.querySelector('#result')
let form = document.querySelector('#form')

function printResult(msg) {
    result.innerHTML = msg
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    printResult('submit event 발생')
})
form.addEventListener('reset', () => {
    printResult('reset event가 발생했어')
}) //reset은 서버연동x (브라우저 기본 이벤트 막을 이유 없음)

let input1 = document.querySelector('#input1')
let select1 = document.querySelector('#select1')

input1.addEventListener('focus', (e) => {
    //색상변경
    //e.target-현재 이벤트 발생 객체
    e.target.style.background = 'pink'
})
input1.addEventListener('blur', (e) => {
    e.target.style.background = ''
    msg =`input data:${e.target.value}`
    printResult()
})

select1.addEventListener('focus', (e) => {
    e.target.style.background='pink'
})
select1.addEventListener('change', (e) => {
    msg = `input change:${e.target.value}`
    printResult()
})
select1.addEventListener('blur', (e) => {
    e.target.style.background=''
})
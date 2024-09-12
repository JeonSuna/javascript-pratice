let form = document.querySelector('#form');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let select = document.querySelector('#select');
let result = document.querySelector('#result');

function printResult(msg) {
    result.innerHTML=msg
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = input1.value
    let phone = input2.value
    let job = select.value
    printResult(`name:${name}<br> 전화번호:${phone}<br>직업:${job}`)
})


let form = document.querySelector('#form');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let select = document.querySelector('#select');
let result = document.querySelector('#result');

function printResult(msg) {
    result.innerHTML=msg
}
//form에 한꺼번에 제출되기 때믄에(버튼이나 input별로 각각 이벤트가 일어나는게 아니라 form을 씀)
form.addEventListener('submit', (e) => {
    e.preventDefault()
   // e.target하면 form이 나옴

    printResult(`name:${input1.value}<br> 전화번호:${input2.value}<br>직업:${select.value}`)
})
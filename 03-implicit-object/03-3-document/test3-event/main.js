"use strict";
let area1 = document.querySelector('#area1')
let area2 = document.querySelector('#area2')
let area3 = document.querySelector('#area3')


//event handler등록, 버블링 단계에서 실행 할 핸들러

area1.addEventListener('click', () => {
    console.log('버블링 area1이벤트 핸들러')
})
area2.addEventListener('click', () => {
    console.log('버블링 area2이벤트 핸들러')
})
area3.addEventListener('click', (e) => {
    console.log('버블링 area3이벤트 핸들러')
    // e.stopPropagation()
})

//이벤트 핸들러 캡처링 
area1.addEventListener('click', (e) => {
    console.log('캡처링 area1이벤트 핸들러')
    e.stopPropagation() 
},true)
area2.addEventListener('click', () => {
    console.log('캡처링 area2이벤트 핸들러')
},true)
area3.addEventListener('click', () => {
    console.log('캡처링 area3이벤트 핸들러')
},true)


let link1=document.getElementById('link1')
let form1=document.getElementById('form1')

link1.addEventListener('click', (e) => {
    console.log('link click')
    //js code에서 ajax로 서버 연동처리 
    e.preventDefault()
})
form1.addEventListener('click', (e) => {
    console.log('form submit')
    //browser form의 이벤트 처리보다는
    //개발자 js code에서 ajax로 서버 연동
    e.preventDefault()
})


let area1 = document.querySelector('#area1')
console.log(area1.style.width) //200px
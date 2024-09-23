"use strict";
let area1=document.querySelector('#area1')
let area2=document.querySelector('#area2')
let area3 = document.querySelector('#area3')


// 아래의 코드는 node.style.즉 dom node tree에서 획득한 것이다
//node tree에 유지되는 css 정보는 inline style만
console.log(area1.style.width) //200px
console.log(area2.style.width)
console.log(area3.style.width)

// console.log(area1.style.background-color)  //css처럼 안하고 카멜케이스로 바꿔서 해야된다
console.log(area1.style.backgroundColor) //aquamarine

//node의 css속성 값 변경
area1.addEventListener('click', () => {
    area1.style.backgroundColor = 'yellow';
    area1.style.borderRadius = '50%';
})
//inline style이 아닌 외부에 선언되어 적용된  css값 획득
//style 태그 혹은 외부css파일 획득
console.log(getComputedStyle(area1).width)  // 200px 외부에서는 이렇게 획득
console.log(getComputedStyle(area2).width) // 200px
console.log(getComputedStyle(area3).width) //200px


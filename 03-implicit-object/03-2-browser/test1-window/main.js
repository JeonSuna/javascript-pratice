"use strict";
//window의 기본 정보 추출
console.log(window.innerWidth,window.innerHeight)
console.log(window.outerWidth, window.outerHeight)
console.log(window.screenLeft, window.screenTop)

window.addEventListener('scroll', () => {
    console.log(window.scrollX, window.scrollY)
})
"use strict";
//window의 기본 정보 추출
console.log(window.innerWidth,window.innerHeight)
console.log(window.outerWidth, window.outerHeight)
console.log(window.screenLeft, window.screenTop)

window.addEventListener('scroll', () => {
    console.log(window.scrollX, window.scrollY)
})
 //새로운 창이 뜸
function myOpen1() {
    window.open('https://www.naver.com/')
}

//타겟지정 (사이트 띄울 때 어디에 띄울것인지, self는 자기 창(브라우저) 자체에..)
function myOpen2() {
    window.open('https://www.naver.com/', '_self')
}

//자식창 지칭 객체 
let childWindow

function myOpen3() {
  childWindow = window.open(
        'https://www.naver.com/',
        '_blank', // 새 창이 열리고 그곳에 url출력
        'left=100,top=100,width=300, height=400'
    )

    if (childWindow == null) {  //: 브라우저의 팝업 차단 기능이 활성화되어 있거나 사용자가 팝업을 허용하지 않은 경우, 
                                //window.open() 함수는 null을 반환합니다.
        alert('팝업이 차단되었습니다')
    }
}
//부모창에서 close눌렀을 때 자식창을  close시키기

function myClose() {
    childWindow.close()
}

function myScroll() {
    console.log(childWindow)
    childWindow.close()
}
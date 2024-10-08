"use strict";

function saveSessionStorage() {
    let key=document.getElementById('key').value
    let value = document.getElementById('value').value
    sessionStorage.setItem(key,value)
}
function saveLocalStorage() {
    let key=document.getElementById('key').value
    let value = document.getElementById('value').value
    localStorage.setItem(key, value)
}
function openNewWindow() {
    window.open('one.html')
}
//storageevent 
window.addEventListener('storage', event => {
    console.log(' i am index.html이야~')
    console.log('스토리지 이벤트 발생~')
    console.log(`uel:${event.url}`)
    if (event.storageArea == sessionStorage) { //이벤트가 세션스토리지에서 발생했다면
        console.log('sessionstorage 이벤트 발생')
    } else if (event.storageArea == localStorage) {
        console.log('localstorage 이벤트 발생')
    }
    console.log(`key:${event.key},${event.oldValue}에서 ${event.newValue}로 변경`)
})

//링크 클릭-세션에 데이터 없음
//window.open-세션에 데이터 있음,복사는 해줌, 하지만 다른 객체임 =>초기 데이터만 갖고 그 이후는 별개의 데이터이다,.


// index.html에서 sessionStorage에 값을 저장하면,
// 같은 세션을 공유하는 iframe의 two.html에서 세션 스토리지 변경 사항이 감지되어 콘솔에 로그가 출력됩니다.
// index.html에서 localStorage 값을 저장하면,
// two.html이 같은 로컬 스토리지를 공유하고 있기 때문에 변경을 감지하여 콘솔에 로그가 출력됩니다.

//index에서 localstorage를 지우면 one.html에도 영향이 가기 때문에 one.html의 변경사항 감지하고 console.log에 출력됨 
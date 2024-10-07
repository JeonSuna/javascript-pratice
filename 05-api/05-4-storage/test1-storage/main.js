"use strict";
function saveSessionStorage() {
    // 세션 스토리지에 데이터 저장
    sessionStorage.setItem('data1', 'hello')
}
function getSessionStorage() {
    //세션 스토리지 데이터 획득
    let value = sessionStorage.getItem('data1')
    let resultDom = document.querySelector('#result')
    resultDom.innerHTML = value
}
function saveLocalStorage() {
    localStorage.setItem('data2', 'world')
}

function getLocalStorage() {
    let value = localStorage.getItem('data2')
    let resultDom = document.querySelector('#result')
    resultDom.innerHTML = value
}


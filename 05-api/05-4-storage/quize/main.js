"use strict";
//로그인 유지되도록
let id=document.querySelector('#id')
let pw=document.querySelector('#pw')
let logout = document.querySelector('#logout')
let result = document.querySelector('#result')
let loginBtn = document.querySelector('#loginBtn')
//html로딩 되다마자 최초로
window.onload = function () {
    let savedId = localStorage.getItem('loginID');
    if (savedId) {
        id.classList.add('hide');
        pw.classList.add('hide');
        loginBtn.classList.add('hide');
        logout.classList.remove('hide');
        result.innerHTML = `${savedId}으로 로그인 되었습니다`;
    }
}

function goLogin() {
    let idinput = document.querySelector('#id').value
    let pwinput = document.querySelector('#pw').value

    if (idinput === pwinput) {
        localStorage.setItem('loginID',idinput)
       id.classList.add('hide')
        pw.classList.add('hide')
        loginBtn.classList.add('hide')
        logout.classList.remove('hide')
        result.innerHTML=`${idinput}으로 로그인 되었습니다`
    } else {
        alert('아이디와 비번을 일치시켜주세요')
    }
    

}
function gologout() {
    localStorage.removeItem('loginID')
    id.value=''
    pw.value=''
    id.classList.remove('hide')
    pw.classList.remove('hide')
    loginBtn.classList.remove('hide')
    logout.classList.add('hide')
    result.innerHTML=''
}

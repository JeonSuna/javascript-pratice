"use strict";
const numNode = document.getElementById('num')
const resultNode = document.getElementById('result')

function sum() {
    // 버튼 클릭 이벤트 함수
    // 유저 입력 데이터를 받아, 서버 요청한다
    // 서버 요청을 비동기로 하고싶다 - 결과 획득가지 대기상태가 되지 않도록 하고싶다 
    // -서버 응답에 의해 화면이 refresh되지 않게 하고 싶다
    //==> ajax로 비동기 요청 결과를 js에서 데이터로 받아서 화면 업데이트 
    
    //xhr을 생성한다
    let xhr = new XMLHttpRequest()
    //요청 정보를 설정한다 (url,request,,등)
    //첫번재 매개변수- http request method: get/post/put/delete/fetch
    //두번재 매개변수 -url , 이 url에 요청이 들어감
    //세번째 매개변수 - 동기ㅡ비동기 설정
    xhr.open('get', `http://localhost:3000/sum/${numNode.value}`, true) 
    //요청
    xhr.send()
    //결과를 받기 위한 콜백 함수 등록
    xhr.onload = function () {
        if (xhr.status === 200) {
            //http response상태 코드값이  200인 경우에만 =>즉,200=> 서버 실행 성공
            //서버에서 넘어오는 데이터는 모두 문자열임 
            //일반 문자열,json문자열,xml문자열
            //json문자열을 javascript object literal로 변형해서 핸들링
            let data = JSON.parse(xhr.responseText) //결과( xhr.responseText)를 받은것을  객체로 전달함 =>data는 객체
            //서버에 데이터 화면 출력
            resultNode.innerHTML=data.result //서버에서 result에 결과 데이터를 담아서 전달함으로 
        }
    }
}
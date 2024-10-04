
"use strict";

//시: 분: 초
//디지털 시계
//show 를 누르면 시계 표시
//hide 를 누르면 시계 숨김
//setTimeout(), setInterval() 만 사용

let btnNode = document.querySelector('button');
let clock = document.getElementById('time');

//현재 시간 획득, 출력
let time = function () {
    let time = new Date()
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    //시, 분, 초가 한 자리인 경우, 앞에 0 추가하여 표시
    hour < 10 ? hour = '0' + hour : hour;
    min < 10 ? min = '0' + min : min;
    sec < 10 ? sec = '0' + sec : sec;

    //시간 표시 영역에 시간 표시
    clock.innerText = `${hour} : ${min} : ${sec}`;
}

//버튼 클릭 시 발생 이벤트
let showTime = function () {
    if (btnNode.textContent == 'show') {
        //show 버튼을 누르면 시계 표시 영역 출력, 버튼 텍스트가 hide 로 변경
        btnNode.textContent = 'hide';
        clock.setAttribute('style', 'display: block;');
        //클릭 시점부터 매 초마다 새로운 시간 호출
        setInterval(time, 1000);
    } else {
        //hide 버튼을 누르면 시계 영역 숨김, 텍스트 show 로 변경
        btnNode.textContent = 'show';
        clock.setAttribute('style', 'display: none;');
    }
}



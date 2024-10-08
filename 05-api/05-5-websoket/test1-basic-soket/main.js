"use strict";

let webSoket
let nickname
let resultNode
let msgNode

//사용자가 입력한 닉네임을 확인하고 웹소켓 서버로 연결함
function connection() {
    let nicknameNode = document.getElementById('nickname')  //닉네임inputNode
    resultNode = document.getElementById('results')   //ul
    msgNode = document.getElementById('msg')
    nickname = nicknameNode.value.trim()
    //연결 성공 시 메세지 입력 창을 보여주고, 닉네임을 화면에 표시
    if (nickname) { //서버와 연결, nickname이 있다면
        webSoket = new WebSocket('ws://localhost:3000') //서버 연결을 위해, 서버의 네트워크 정보.웹소켓 서버가 작동중인 포트
        let connectNode = document.getElementById('connectDiv')
        let msgNode = document.getElementById('msgDiv')//input
        let nicknameResultNode=document.getElementById('nicknameResult')
        msgNode.style.display = "block" // 전송된거 있으니 msg보이게

        connectNode.style.display = 'none'
        nicknameResultNode.innerHTML=nickname
    } else {
        alert('nickname을 입력해')
    }
    nicknameNode.value = ''
    //서버에 데이터 들어올 때 콜백 이벤트
    //onmessage는 기본 제공 핸들러, 메세지; 수신될때
    //서버로부터 받은 메세지 처리(다른 사용자가 보낸 메세지)
    webSoket.onmessage = (event) => {
        let liNode = document.createElement('li')
        let jsonData=JSON.parse(event.data) //서버에서 받은 데이터
        liNode.innerHTML=jsonData.nickname?`${jsonData.nickname}=>${jsonData.msg}`: `${jsonData.msg}`
        resultNode.appendChild(liNode)
    }
}
 

//메세지 전달 함수 
//사용자가 입력한 메세지를 서버로 전달함
function send() {
    let msg = msgNode.value.trim() //입력한 메세지
    if (msg) {
        webSoket.send(JSON.stringify({//JSOON형식으로 메세지와 닉네임 전송
            nickname: nickname,
            msg:msg
        }))

        let liNode = document.createElement('li')
        liNode.innerHTML = `${nickname}=>${msg}`
        resultNode.appendChild(liNode)
    }else{
        alert('메세지를 입력해주세요')
    }
}


//A와 B가 같은 웹소켓 서버를 이용 ==>ws://localhost:3000
// A가 메시지를 보내면, 서버는 그 메시지를 받아서 현재 연결된 모든 클라이언트(B 포함)에게 전달합니다.
// B는 이 메시지를 수신하여 자신의 화면에 표시합니다.
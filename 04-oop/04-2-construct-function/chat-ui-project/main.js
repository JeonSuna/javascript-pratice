"use strict";
//멤버도 여러명이다 
function Member(id, nickname, photo) {
    this.id = id
    this.nickname = nickname
    this.photo = photo
}

///이모지는 계속 올라오고
function Emoji(emojiId) {
    this.emojiId = emojiId
    this.count = 0
    this.members = []
    this.add = function (memberId) {
        this.count++
        this.members.push(memberId)
    }
}
///메세지도 계속 올라오기 때문에  생성자 함수로 
function Message(msg, member) {
    this.msgId = ++msgId
    this.msg = msg
    this.member = member
    this.date = new Date().toLocaleString()
    this.emojis = [] //최초 메세지 발생이니, 이모지는 빈 배열
    this.addEmoji = function (emojiId, memberId) {
        if (this.emojis.every(item => item.emojiId !== emojiId)) {
            let emoji = new Emoji(emojiId)
            emoji.add(memberId)
            this.emojis.push(emoji)
        } else {
            let index = this.emojis.findIndex((item) => item.emojiId === emojiId)
            this.emojis[index].add(memberId)
        }
    }
}

//전체 채팅 메세지가 저장되는 배열, 채팅이 계속 올라오니까..,메세지 발생할때마다 메세지 객체 넣음 ,Message 객체 여러개가 저장
let messages = []
//채팅 메세지를 식별해야 이모지를 어디다 추가할건지 결정 가능하다
//1씩 증가시켜서 신규 발생 채팅 메세지 식별자 id(msgId)로 사용하기 위해서 //메세지가 식별되어야 하기 때문에 
let msgId = 0

//필요한 dom node 객체 획득
let nicknameInputNode = document.getElementById('nicknameInput')
let idInputNode = document.getElementById('idInput')
let msgInputNode = document.getElementById('msgInput')
//최종 동적으로 양산된 채팅 글이 찍힐 위치
let chatMainNode = document.getElementById('chat-main')

//매개변수로 전달된 객체의 내용을 node를 만들어서 출력시키는 역할
function printMessage(message) {
    //시간차 같은것을 두어 반복적으로 들어간다고 하면 creat를 사용, 아니면 innerHTML
    //dropdown menu
    let menuImageNode = document.createElement('img')
    menuImageNode.setAttribute('src', 'images/menu.jpg')
    let menuButton = document.createElement('button')
    menuButton.setAttribute('class', 'msg-info-menu dropbtn')
    menuButton.appendChild(menuImageNode)  //19,20번째 줄

    let link1 = document.createElement('a')
    link1.setAttribute('href', '#')
    link1.setAttribute('onclick', `emojiClick('${message.msgId}','thumbup')`) //(어느 메세지에 들어가야 하는지 식별할 수 있게 도와주는 ID, "이모지 ID")
    let link1Text=document.createTextNode('좋아요')
    link1.appendChild(link1Text)   
    
    let link2 = document.createElement('a')
    link2.setAttribute('href', '#')
    link2.setAttribute('onclick', `emojiClick('${message.msgId}','ok')`) //(어느 메세지에 들어가야 하는지 식별할 수 있게 도와주는 ID, "이모지 ID")
    let link2Text=document.createTextNode('넵')
    link2.appendChild(link2Text)    

    
    let links = document.createElement('div')
    links.setAttribute('class', 'dropdown-content')
    links.appendChild(link1)
    links.appendChild(link2)
    
    let dropdown = document.createElement('div')
    dropdown.setAttribute('class', 'dropdown')
    dropdown.appendChild(links)
    dropdown.appendChild(menuButton)

    ///main data
    let name = document.createElement('div')
    name.setAttribute('class', 'msg-info-name')
    name.appendChild(document.createTextNode(message.member.nickname))

    let date = document.createElement('div')
    date.setAttribute('class', 'msg-info-time')
    date.appendChild(document.createTextNode(message.date))

    let msgInfo = document.createElement('div')
    msgInfo.setAttribute('class', 'msg-info')
    
    msgInfo.appendChild(name)
    msgInfo.appendChild(date)
    msgInfo.appendChild(dropdown)



    //mag - text
    let msgText = document.createElement('div')
    msgText.setAttribute('class', 'msg-text')
    msgText.appendChild(document.createTextNode('hello world'))

    let msgBubble = document.createElement('div')
    msgBubble.setAttribute('class', 'msg-bubble')
    msgBubble.appendChild(msgInfo)
    msgBubble.appendChild(msgText)

    //프사
    let photoNode = document.createElement('img')
    photoNode.setAttribute('src', message.member.photo)
    photoNode.setAttribute('class','msg-img')
    
    // 화면에 메세지가 여러개 추가된다
    //각 div 태그를 id로 식별해야, 나중에 그 메세지에 이모지로 추가 가능
    //추가시 어느 div에 출력해야 하는지 식별 할 수 있다

    let mainNode = document.createElement('div')
    mainNode.setAttribute('id', `msgId-${message.msgId}`)
    mainNode.setAttribute('class', 'msg left-msg')
    mainNode.appendChild(photoNode)
    mainNode.appendChild(msgBubble)
    


    chatMainNode.appendChild(mainNode)

}

function send(e) {
    //send함수는 유저 입력 데이터 추출
    e.preventDefault()
    let id = idInputNode.value
    let nickname = nicknameInputNode.value
    let msg = msgInputNode.value

    //유효성 검증
    if (id.trim().length == 0 || nickname.trim().length == 0 || msg.trim().length == 0) {
        alert('아이디,닉네임과 메세지를 입력해야 합니다')
        return
    } else {
        //유효성 검증 통과 (사용자가 입력한 상태)유저 입력 데이터 화면에서 삭제한다. 
        idInputNode.value = ''
        nicknameInputNode.value = ''
        msgInputNode.value = ''
        //메세지 입력 유저를 표현하는 객체 생성,send함수에서 생성한 id,nickname,..
        //프사는 유저 id와 동일한 파일명으로 한다(간편하게 하기위해 그렇게 설정함)
        let member = new Member(id, nickname, `images/${id}.jpg`)
        
        //메세지 객체 생성
        let message = new Message(msg, member) //위에 생성한 멤버 객체 
        messages.push(message)
        //메세지를 화면 출력==>html태그가 동적으로 작성한다, 하지마 너무 길어서 따로 함수 뱀
        printMessage(message)
    }

}


//화면에 동적 노드 만들어서 출력
function printEmoji(message) {
    //하나의 메세지에 이모지는 여러개 추가되었을 수도 있다 
    let emojis = message.emojis 
    if(emojis.length > 0){ //기존에 이모지가 없으면 emnojis(29번줄 참고)를 추가해야하고,있으면 그 하위인 dropdown추가 
        //이모지가 출력되어야 하는 노드를 획득해야 한다
        let messageBubble = document.querySelector(`#msgId-${message.msgId} .msg-bubble`)
        let emojiNode = messageBubble.querySelector('.emojis')
        if (emojiNode) {
            //기존에 이모지 추가된 것이 있는 상황이면 제거하고 다시 붙이겠다
            messageBubble.removeChild(emojiNode)
        }
        let emojisNode = document.createElement('div')
        emojisNode.setAttribute('class', 'emojis')
        emojis.forEach((emoji) => {
            let img = document.createElement('img')
            img.setAttribute('class', 'emoji dropbtn')
            img.setAttribute('src', `images/${emoji.emojiId}.jpg`)

            let span = document.createElement('span')
            let nicknameTxt=emoji.members.join(',')  //베열 데이터를 콤마로 구분해서 하나의 문자열로 만든다 
            span.appendChild(document.createTextNode(nicknameTxt))
            let dropdownContent = document.createElement('div')
            dropdownContent.setAttribute('class','dropdown-content')
            dropdownContent.appendChild(span)

            let dropdown = document.createElement('div')
            dropdown.setAttribute('class', 'dropdown')
            dropdown.appendChild(img)
            dropdown.appendChild(dropdownContent)

            let span2 = document.createElement('span')
            span2.setAttribute('class', 'emoji-count')
            span2.appendChild(document.createTextNode(`${emoji.count}`))
            emojisNode.appendChild(dropdown)
            emojisNode.appendChild(span2)
        })

        messageBubble.appendChild(emojisNode)

    }
    
}


//이모지 추가 클릭 이벤트 처리 
function emojiClick(msgId,emojiId) {
    //동적으로 이모지를 메시지에 출력한다
    //서버와 연동된다면 이모지 출력 유저의 id는 고정되지만
    //지금은 로컬 테스트임으로
    //이모지 추가 유저 id를 테스트를 위해서 ptompt로 받아들인다

    let memberId = prompt('멤버 id를 입력 해주세요')
    //입력 안하고 닫았을 때 
    if (memberId == null) {
        alert('입력하지 않았습니다')
    } else {
        // 화면에 메시지가 많고 모든 메세지의 이모지를 추가 클릭하면 이 함수가 호출
        //결국 어느 메세지에서 이모지를 클릭한 것인지가 식별 되어야함
        //html을 준비할 때 매개변수로 msgId를 받아들인것이다.

        //msgId로 배열에서 이모지를 추가하고자 하는 메세지 객체 획득
        let index = messages.findIndex((item) => item.msgId == msgId)
        messages[index].addEmoji(emojiId, memberId) //메세지객체에 이모지 추가
        //해당 메세지에 이모지 추가,화면 출력
        printEmoji(messages[index])

    }

}

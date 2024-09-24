"use strict";
function Member(id, nickname, photo) {
    this.id = id
    this.nickname = nickname
    this.photo = photo
}


function Emoji(emojiId) {
    this.emojiId = emojiId
    this.count = 0
    this.members = []
    this.add = function (memberId) {
        this.count++
        this.members.push(memberId)
    }
}

function Message(msg, member) {
    this.msgId = ++msgId
    this.msg = msg
    this.member = member
    this.date = new Date().toLocaleString()
    this.emojis = []
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

//전체 채팅 메세지가 저장되는 배열 ,Message 객체 여러개가 저장
let messages = []
//채팅 메세지를 식별해야 이모지를 어디다 추가할건지 결정 가능하다
//1씩 증가시켜서 신규 발생 채팅 메세지 식별자 id(msgId)로 사용하기 위해서
let msgId = 0

//
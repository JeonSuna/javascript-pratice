"use strict";
/* 
메세지
    글 내용
    시간
    멤버
      멤버 이름
      멤버 아이디
      멤버 프로필 사진
    이모지들(array)
      이모지 아이디 
      이모지 카운트
      이모지 추가한 멤버들
      멤버 추가 함수

    이모지 추가 함수
*/

let message = {
    msg: '디버깅 용도로 많이 사용합니다',
    date: '2024.09.04 dhwjs 10:32',
    member: {
        id: 'jangyj',
        nickname: '장유진',
        photo: 'jangyj.png'
    },
    emojis: [ //얼만큼 추가될 지 모르기 때문에 배열로 만듦 
        {
            id: 'thmbsup',
            count: 3,
            members: ['jska2w3', 'suna', 'kim'], //배열 이유 마찬가지
            add: function (name) {
                this.count++
                this.members.push(name)
            }
        }
    ],
    addEmoji: function (emojiId, memberId) {
        if (this.emojis.every(item => item.id !== emojiId)) {
            this.emojis.push({
                id: emojiId,
                count: 1,
                members: [memberId], //배열 이유 마찬가지
                add: function (name) {
                    this.count++
                    this.members.push(name)
                }
            })
        } else {
            let index = this.emojis.findIndex((item) => item.id === emojiId)
            this.emojis[index].add(memberId)
        }
    }
}
console.log(message)

//기존 이모지에 kim이 추가했다고 가정
message.addEmoji('thmbsup', 'kim')
console.log(message)
//ok라는 이모지를 lee가 추가했다고 가정한다. 새로운 이모지 추가
message.addEmoji('ok', 'lee')
console.log(message)
"use strict";
const apiTest = () => {
    //sessionStorage, localStorage 함수 모두 동일
    //데이터 저장 구조눈 key-value로 식별해서  여러건의 데이터 저장
    sessionStorage.setItem('data1', '홍길동')
    sessionStorage.data2 = '김길동'
    //문자열이 아닌 각 타입의 데이터 저장시 에러가 나지 않는다 , 데이터 타입 유지
    //안된다 문자열로만 저장 된다 
    sessionStorage.setItem('data3', 10)
    sessionStorage.setItem('data4', {
        name: '홍길동',
        age:10
    })
    console.log('data1',sessionStorage.getItem('data1'))
    console.log('data2',sessionStorage.getItem('data2'))
    console.log('data3', sessionStorage.getItem('data3'), typeof sessionStorage.getItem('data3')) //모두 문자열인 string임을 확인
    console.log('data4',sessionStorage.getItem('data4'))
    //객체를 storage에 저장하겠다면
    //storage는 문자열로만 저장됨으로,,코드에서 객체를 문자열로 변형해서 저장
    //획득시에 다시 객체로 변형해서 사용
    //객체로 저장하거싶다면... 
    sessionStorage.setItem('data5', JSON.stringify({ //josn 문자열로 으로 반환
        name: '홍길동',
        age:10
    }))
    let data5 = JSON.parse(sessionStorage.getItem('data5')) //json을 객체로 다시 반환환
    console.log(data5)
}

const removeTest = () => {
    // 하나의 데이터 삭제 
    // sessionStorage.removeItem('data1')
    sessionStorage.clear()
}

function getAllData() {
    // for (let i = 0; i < sessionStorage.length; i++){
    //     let key = sessionStorage.key(i)
    //     console.log(key,sessionStorage.getItem(key))
    // }
    //아래의 방법으로 전체 데이터를 획득할 수도 있고
    let keys = Object.keys(sessionStorage)
    console.log(keys)
    keys.forEach(element => {
        console.log(element,sessionStorage.getItem(element))
    });
}
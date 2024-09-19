"use strict";
//현재 시간 날짜를 획득하고 싶다

//new- 객체 생성(선언) 연산자.. 모든 객체는 new로 생성해야 한다.
let date1 = new Date()
console.log(date1)
console.log(date1.toString()) //Thu Sep 19 2024 10:12:28 GMT+0900 (한국 표준시)
console.log(date1.toLocaleString()) //2024. 9. 19. 오전 10:12:58

//특정 시간을 지정해서 객체 생성
let date2 = new Date('2024-09-19 10:14:10')
console.log(date2.toLocaleString()) //2024. 9. 19. 오전 10:14:10


let date3 = new Date(2024, 9-1, 19, 10, 10, 10)
console.log(date3.toLocaleString()) //2024. 9. 19. 오전 10:10:10

//특정 데이터만 추출 할 때
console.log('year', date1.getFullYear()) //2024
console.log('month', date1.getMonth()) //8
console.log('date', date1.getDate())//19
console.log('day', date1.getDay()) //4
console.log('seconds', date1.getSeconds()) //31
console.log('timestamp', date1.getTime()) //timestamp 1726708959281

//date 비교
//이벤트 시간 가정
let eventStartDate = new Date('2024-09-01T00:00:00')
let eventEndDate = new Date('2024-09-30T23:59:59')
//예약 시간
let regDate = new Date('2024-09-19T14:00:00')
//비교
if (regDate.getTime() < eventStartDate.getTime()) {
    console.log('예약하신 시간은 이벤트 시작 전입니다')
} else if (regDate.getTime() > eventEndDate.getTime()) {
    console.log('예약하신 시간은 이벤트 종료 후 시간입니다')
} else {
    console.log(`${regDate.toLocaleString()}로 예약되었습니다`) //2024. 9. 19. 오후 2:00:00로 예약되었습니다
}



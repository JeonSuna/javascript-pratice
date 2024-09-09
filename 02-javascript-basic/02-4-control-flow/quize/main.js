// let data = prompt("나이를 입력하세요")
// if (data === null) {
//     console.log('입력을 취소 하였습니다')
// } else if (isNaN(data)) {
//     console.log('숫자가 아닌 문자를 입력하였습니다')
// } else if (0 > data || data >= 100) {
//     console.log('1이상 100이하의 숫자를 입력해야 합니다')
// } else if (data < 10) {
//     console.log("어린이군요")
// } else if (10 <= data && 20 > data) {
//     console.log("청소년이군요")
// } else if (data >= 20) {
//     console.log('어른이군요')
// }



//중첩으로 하면 더 가독성이 좋다
let age = prompt("나이를 입력하세요")
if (data === null) {
    console.log('입력을 취소 하였습니다')
} else if (isNaN(data)) {
    console.log('숫자가 아닌 문자를 입력하였습니다')
} else {
    age = parseInt(age)
}
if (0 > data || data >= 100) {
    console.log('1이상 100이하의 숫자를 입력해야 합니다')
} else if (data < 10) {
    console.log("어린이군요")
} else if (10 <= data && 20 > data) {
    console.log("청소년이군요")
} else if (data >= 20) {
    console.log('어른이군요')
}
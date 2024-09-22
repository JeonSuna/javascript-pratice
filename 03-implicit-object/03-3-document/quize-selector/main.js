// function printResult() {
//     let checkArray = []
//     let result = document.querySelector('#result')
//     let name = document.querySelector('#name')
//     let checkNod = document.getElementsByClassName('hobby') //체크박스는 id나 class를 동일하게 준다.그래야 컨트롤이 쉬움
//                                                             //만약 따로따로 주면 하나하나 접근해야해서 귀찮기 때문

//     for (let i = 0; i < checkNod.length; i++) {
//         if (checkNod[i].checked) {
//             checkArray.push(checkNod[i].value)
//         }
//     }

//     let radioNode = document.getElementsByName('gender')
//     let radio = ''
//     for (let i = 0; i < radioNode.length; i++) {
//         if (radioNode[i].checked) {
//             radio = radioNode[i].value
//         }
//     }
    
//     result.innerHTML = `
//     name: ${name.value} <br>
//     취미: ${checkArray} <br>
//     성별: ${radio}
//     `
// }


let result = document.querySelector('#result')

function GetData() {
    let name = document.querySelector('#name')
    let hobby = document.querySelectorAll('input[name="hobby"]:checked')
    let gender = document.querySelector('input[name="gender"]:checked')

    let hobbyResult = ''
    console.log(hobby[0].value)
    for (let i = 0; i < hobby.length; i++) {
        let hobbyNode = hobby[i].value;
        hobbyResult += hobbyNode
    }
    result.innerHTML = `name:${name.value} <br> 
                        취미:${hobbyResult} <br>
                        성별:${gender.value} <br>
                        `
}
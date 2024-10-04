"use strict";

let button = document.getElementById('button')
let table = document.getElementById('result')
button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
    xhr.open('get', 'http://openAPI.seoul.go.kr:8088/73676962556a657533367872776376/json/RealtimeCityAir/1/99/', true)
    xhr.onload = function () { //데이터 넘어왔을 때 받을..
        //결과 데이터 획득
        let result = xhr.responseText
        //받는 문자열을 object literal객체로 변환
        //만약 xml형식의 데이터였다면 xml파싱을 해야함
        let resultObj=JSON.parse(result) //json형식의 문자열
        //필요한 데이터를 추출한다
        //각 구청 데이터를 뽑는다
        let rows = resultObj['RealtimeCityAir']['row']
        let resultTxt = ''
        for (let i = 0; i < rows.length; i++){
            let name = rows[i]['MSRRGN_NM']
            let value = rows[i]['IDEX_MVL']
            let grade = rows[i]['IDEX_NM']

            resultTxt += `
            <tr>
                <td>${name}</td>
                <td>${value}</td>
                <td>${grade}</td>
            </tr>
            `
        }
        table.innerHTML=resultTxt
    }
    xhr.send()
})
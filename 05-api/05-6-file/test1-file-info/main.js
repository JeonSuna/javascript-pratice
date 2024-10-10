"use strict";

let fileNode1 = document.getElementById('fileInput1')
let fileNode2 = document.getElementById('fileInput2')
let result = document.getElementById('results')
//이벤트 콜백 함수
function handleFile(e) {
    //기존 화면출력 결과 지우고
    while (result.firstChild) {
        result.removeChild(result.firstChild) //제거
    }

    let files = e.target.files //fileList객체 => 파일 여러개 선택이 가능함으로
    //파일 입력 요소에서 사용자가 선택한 파일 목록을 FileList 객체로 반환
    //e.target.files**에서 **files**는 HTMLInputElement 객체의 내장 속성입니다.
    // 이 속성은 < input type = "file" > 요소에서 사용자가 선택한 파일을 나타내며, FileList 객체를 반환
    if (files.length !== 0) {
        for (let file of files) {
            //files의 객체 갯수만큼 반복적으로 for loop실행
            //for loop가 한버닜ㄱ 실행되면서 files안의 file객첵 file에 대입

            let item = document.createElement('li')
            item.innerHTML = `file name:${file.name}, file.size:${file.size}
            modified: ${new Date(file.lastModified)}` //파일 마지막 수정 시간
            result.appendChild(item)
        }
        
    }
}
fileNode1.addEventListener('change',handleFile)
fileNode2.addEventListener('change',handleFile)
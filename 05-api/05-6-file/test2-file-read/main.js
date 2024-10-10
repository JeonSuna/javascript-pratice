"use strict";

let fileNode = document.getElementById('filepicker')
let resultNode = document.querySelector('#results')

fileNode.addEventListener('change', handleFile)



function handleFile(e) {
    while (resultNode.firstChild) {
        resultNode.removeChild(resultNode.firstChild)
    }

    let files = fileNode.files
    if (files.length !== 0) {
        for (let file of files) {
            //파일의 내용을 읽어서 화면에 출력하고자 한다,
            //텍스트 파일과 이미지 파일의 읽고 추력하는 코드가 상이해진다
            //유저가 선책한 파일의 타입에 딸라 다른 코드가 실행되게
            if (file.type.startsWith('text')) {
                handleTextFile(file)
            } else if (file.type.startsWith('image'))
                handleImageFile(file)
        }
    }
}
function handleTextFile(file) {
    let liNode = document.createElement('li')

    let nameNode = document.createElement('h3')
    nameNode.innerHTML = file.name
    liNode.appendChild(nameNode)

    //유저가 선택한 파일을 읽기,  file에서 fileReader를
    let reader = new FileReader(file)

    reader.onload = function (e) {
        //파일을 다 읽은 순간 발생하는 이벤트
        let pNode = document.createElement('p')
        //파일의 엔터(\n)도 데이터이다. html에선ㄴ 태그에 의해서만 ui효과
        //\n을 <br>로 
        pNode.innerHTML = e.target.result.split('\n').join('<br>') //=>문자열을 구분자로 나누어 배열로 리턴함
        liNode.append(pNode)
        resultNode.appendChild(liNode)
    }
    reader.onerror = function (e) {
        let pNode = document.createElement('p')
        pNode.innerHTML = '파일 읽기에 실패하였습니다'
        liNode.appendChild(pNode)
        resultNode.appendChild(liNode)
        //읽다가 에러가 발생한 경우
        //항상 I0(file,network)은 에러 가능성이 많아서 따로 이벤트 걸어줌  
    }

    reader.readAsText(file) //읽기 시작, 읽은 내용은 이벤트 콜백 함수로
}


function handleImageFile(file) {
    let liNode = document.createElement('li')
    let nameNode = document.createElement('h3')
    nameNode.innerHTML = file.name
    liNode.appendChild(nameNode)
    
    let reader = new FileReader()

    
    reader.onload = function (e) {
        let imgNode = document.createElement('img')
        imgNode.setAttribute('src', e.target.result)
        imgNode.setAttribute('width', '100')
        liNode.appendChild(imgNode)
        resultNode.appendChild(liNode)
    }
    reader.onerror = function (e) {
        let pNode = document.createElement('p')
        pNode.innerHTML = '파일 읽기에 실패하였습니다'
        liNode.appendChild(pNode)
        resultNode.appendChild(liNode)
        //읽다가 에러가 발생한 경우
        //항상 I0(file,network)은 에러 가능성이 많아서 따로 이벤트 걸어줌  
    }
    
    
    reader.readAsDataURL(file) //이미지를  base64로 인코딩된 문자열로 읽어라  ==>base64 문자열을
    //<img> 태그로 출력이 가능함으로 
}
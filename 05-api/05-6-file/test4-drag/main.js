"use strict";

async function upload(files) {
    if (files.length !== 0) {
        let formData = new FormData()
        for (let file of files) {
            formData.append('file',file)
        }

        let resp = await axios.post('http://localhost:8000/upload', formData)
        if (resp.data.status === 200) {
            alert('upload ok')
        }
    }
}

//drop -> 드래그한거 손 땔때
 //dragover ->드래그하는..

function dropHandler(e) {
    //브라우저의 기본 이벤트 처리 금지
    e.preventDefault()
    //drop한 파일 정보를 호출해서 upload한 함수를 호출한다
    upload(e.dataTransfer.files)
}

function dragOverHandler(e) {
    e.preventDefault()
}
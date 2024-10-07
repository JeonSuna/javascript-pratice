"use strict";

function printResult(result) {
    const resultDom = document.querySelector('#result')
    resultDom.innerHTML = result
}


function axios_basic() {
    const num = document.getElementById('num').value
    axios({
        method: 'get',
        //로컬 컴퓨터를 지칭하는 ip:127.0.0.1
        //로컬 컴퓨터를 지칭하는 도메인 
        url: `http://localhost:3000/sum/${num}`
        //서버에서 응답 넘어오면!response
    }).then(response => {
        printResult(response.data.result)
    })
}

function axios_get() { //get함수 이용해서 method정보X하고 url형태로,,
    const num = document.getElementById('num').value
    axios.get(`http://localhost:3000/sum/${num}`)
        .then(response => {
            printResult(response.data.result)
        })
}

function axios_post() {
    //http request method
    //header 정보 -get(default),post, put,delete, patch, head, option 
    //CRUD - create(새로운 데이터 발생,저장),read(서버 저장된 데이터가 read),update,delete,
    //get-data줘 - read  //body를 활용하지 않겠다 (url:header정보임,만약 server에 data를 넘기겠다하면 header를 통하여 정보를 넘긴다=
    // url을 통해 url에 데이터를 추가해서 , 즉 request server정보인 url을 통해 넘긴다,
    // url path에 추가해서 넘기거나~~~/sum/10
    //url search문자열 (query문자열)=~~/sum?a1=10&name=kim )
    //post - 데이터 저장한다 .-create(body에 data..읽기)
    //server에 데이터 전송을 request body에 추가해서 전달하겠다.
    //body에 담기는 데이터 형식의 규약은 없다 (문자열,search문자열 , json문자열 )
    //put -데이터 수정, 데아터 넘어갈건데 수정되어야하는 데이터야 -update(body에 data..읽기)
    //delete - 너네가 가진 데이터 삭제 요청이다 -delete
    //post와 put -body data가 있다 , body data를 server에서 처리해줘야함 

    axios.post(`http://localhost:3000/post_test`, { // 백엔드 서버개발자가 메뉴얼로 알려줌
        //post방식이다 request body 데이터 
        name: '홍길동',
        age: 20 //data는 body에..
    })
        .then(response => {
            printResult(response.data.msg)
        })
}

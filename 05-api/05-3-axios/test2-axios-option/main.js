"use strict";
function printResult(result) {
    const resultDom = document.querySelector('#result')
    resultDom.innerHTML = result
}

function axios_default() {
    //axios로 서버 연동시 공통적인 config설정이 있다면
    axios.defaults.baseURL='http://localhost:3000/' // 모든 요청의 기본url을 설정
    axios.defaults.timeout = 2000 ///2초내에 완료되지 않으면 자동으로 취소

    //default에 설정후 요청..default에 설정한 내용이 기본 적용
    //url지정 ..baseURL+url , 즉  http://localhost:3000/post_test로 전송된다 (백엔드쪽에서 정의한 api문서 확인)
    axios.post('post_test', {
        name: '홍길동',
        age: 20
    })
        .then(response => {
        printResult(response.data.msg)
    })

}

function axios_create() {
    //원한다면 개발자가 axios 객체를 직접 만들어서 가능
    //업무가 여러개로 구분되고, 하나의 업무의 여러번 요청시 공통 설정이 있는 경우
    const myAxios = axios.create({
        baseURL: 'http://localhost:3000',
        timeout:2000
    })
    myAxios.post('post_test', {
        name: '홍길동',
        age: 20,
    })
        .then(response => {
            printResult(response.data.msg)
        })
}



function axios_params() {
    //params config :url뒤에 (서버에 전송하는)데이터를 추가해서 서버 전송
    //header에 추가해서 url이 header 정보임으로 (헤더 이용해서 정보 전달하겠다)
    // 즉get, post, put, delete,patch 모두 가능하다
    //모든 http request에 url은 항상 http request header에 지정함으로 
    //모든 method에 params 데이터를 추가해서 서버 전송이 가능하다면 params만 이용하지 왜 굳이 바디스트림을 쓰는가?
    //header정보로 data 전송은 한계가 있다. - 전송하는 데이터 사이즈에 한계가 있다 ,보안에 문제가 있다(url뒤에 붙으니 유저가 볼 수 있음)
    
    axios({
        method: 'get',
        url: 'http://localhost:3000/get_test',
        params: { //요청시 서버에 전달할 데이터..header에 추가해서  //url뒤에 추가가 가능하다
            data1: 'hello',
            data2:10
        }
})
        .then(response => {
    printResult(response.data.msg)
})
}


function axios_transform() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/post_test',
        data: {//request body stream울 통해 데이터 전송, url에는 나오지 않는다 =>post
            //post,put,patch에서만 사용 가능
            name: '홍길동',
            age:30
        },
        transformRequest: [
            //서버에 데이터를 보내기 전에 데이터를 수정하거나 헤더정보를 추가할 수 있는 역할이다.
            //요청시 실행되어야 하는 함수 여러개를 배열에 담으면, 등록한 순서대로 실행된다 
            function (data, headers) {
                //이 함수가 호출되면서
                //data: 서버에 전송해야 할 body stream ==> 전송 전에 이 함수에서 조작 가능하다
                //headers: 서버 요청 header정보 ==> 전송 전에 조작 가능(추가,제거)
                // / transformRequest: [ function1, function2, function3 ...] 
                console.log('TransformRequest Data:', data);
                console.log('TransformRequest Headers:', headers);
                headers['content-type'] = 'application/json'//header정보 추가 ==>json형식으로 보내겠다고 알림. json은 파싱 할 준비
                let newData = { ...data, key: 1 }//...data=>data객체의 모든 속성을 새 객체에 복사함, key:1=> 속성 하나 추가
                //즉 newData는  원래의 data에 key값이 1인 값이 추가된다. 
                console.log(newData)
                return JSON.stringify(newData) //javascript을 json문자열로 보냄 
            }
        ],
        transformResponse: [
            //서버에서 답이 왔을 때 데이터를 조작하는 함수다, 
            //응답이 도착했을 때 실행 될 함수ㅡ 서버 데이터를 이용하기 전에 조작 \
            function (data) {
                //매게변수가 서버에서 받은 데이터
                const jsonData = JSON.parse(data) //json문자열을 javascrtipt객체로 반환 (받아서 써야함)
                let newData = { ...jsonData, index: 1 } //jsondata에 index1을 추가함 
                return newData
             }
        ]

    })
        .then(response=> {
            console.log(response.data) //{status: 200, msg: 'post request success', index: 1} =>index1 추가 확인 

        })
}

//terminal에 key1 추가 확인 
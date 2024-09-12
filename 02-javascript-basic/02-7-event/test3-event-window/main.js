// 페이지 로드 완료 시
addEventListener('load', () => {
    resultNode = document.getElementById('result')
    printResult('load event') // 화면에 띄우자마자 바로 보여지도록 한다
})

// 창 크기 변경 시
addEventListener('resize', () => {
    printResult(`resize, width: ${innerWidth}, height: ${innerHeight}`)
})

// 복사 이벤트 발생 시 //e라는 매개변수가 개겣로 사용
addEventListener('copy', (e) => {
    let thisURL = document.URL
    e.preventDefault() // 기본 복사 동작 방지
    // 선택된 텍스트에 출처 정보 추가
    e.clipboardData.setData('text/plain', `${document.getSelection()} - 출처 : ${thisURL}`)
})

// 붙여넣기 이벤트 발생 시
addEventListener('paste', () => {
    printResult('paste...')
})

// 결과 출력 함수 (이 함수가 정의되어 있다고 가정)
function printResult(message) {
    if (resultNode) {
        resultNode.textContent = message
    }
}
window.addEventListener('storage', event => {
    console.log(' i am two.html이야~')
    console.log('스토리지 이벤트 발생~')
    console.log(`url:${event.url}`)
    if (event.storageArea == sessionStorage) { //이벤트가 세션스토리지에서 발생했다면
        console.log('sessionstorage 이벤트 발생')
    } else if (event.storageArea == localStorage) {
        console.log('localstorage이벤트 발생')
    }
    console.log(`key:${event.key},${event.oldValue}에서 ${event.newValue}로 변경`)
})
"use strict";
//innerHTML vs innerText
//둘다 특정 노드의 바디를 지칭하는데 차이가 있다

//특정 노드에 바디를 획득하고자 한다
let oneNode = document.querySelector('#one')
console.log(oneNode.innerHTML)
console.log(oneNode.innerText)

let twoNode = document.querySelector('#two')
console.log(twoNode.innerHTML)  //<a href="#">Google</a>
console.log(twoNode.innerText) //Google


let result1 = document.querySelector('#result1')
let result2 = document.querySelector('#result2')
//동적 문자열이지만 innerHTML로 지정한 문자열을 html parser가 파싱을 한다
//태그가 포함되어 있다면 태그 효과를 적용한다
result1.innerHTML = "<a href='#'>google</a>"
//동적 문자열 내에 태그가 있다고 하더라도 태그를 인지하지 않고 화면에 추력해야 할 때
//문자열로 인지하여 태그가 화면에 출력된다
result2.innerText = "<a href='#'>google</a>"

//속성 핸들링 
let link1 = document.getElementById('link1')
//속성 값 획득
console.log(link1.href) //http://www.google.com/
console.log(link1.getAttribute('href'))  //http://www.google.com

//속성변경
let link2 = document.getElementById('link2')
link2.setAttribute('href', 'http://www.naver.com')
console.log(link2.href) //http://www.naver,com/

//속성 제거 
let link3 = document.querySelector('#link3')
link3.removeAttribute('href')
console.log(link3.hasAttribute('href')) //false , 위에 지움

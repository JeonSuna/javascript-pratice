"use strict";
let result1 = document.querySelector('#result1')
result1.innerHTML='<div><a href="#">link</a>hello</div>'

//위와 동일하게 node를 create해서 추가 
let newDiv = document.createElement('div')
let newA = document.createElement('a')
let newHref = document.createAttribute('href')
newHref.value = '#'
let newAText = document.createTextNode('link')
let newDivText = document.createTextNode('hello') // 이후 계층으로 묶어야함

newA.setAttributeNode(newHref)
newA.appendChild(newAText)

newDiv.appendChild(newA)
newDiv.appendChild(newDivText)

let result2 = document.querySelector('#result2')
result2.appendChild(newDiv)
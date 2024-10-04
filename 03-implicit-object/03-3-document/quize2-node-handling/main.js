"use strict";
let button = document.querySelector('#button')
let title = document.querySelector('#title')
let list = document.querySelector('#list')

button.addEventListener('click', (e) => {
    e.preventDefault()
    let liNode = document.createElement('li')
    let textNode = document.createTextNode(title.value)
    liNode.appendChild(textNode)
    list.insertBefore(liNode, list.childNodes[0])
    title.value = ''

    
    liNode.addEventListener('click', (e)=>{
        list.removeChild(e.target) //<liNode>자체
        // liNode.addEventListener('click', function() => {
        //     list.removeChild(this) //여기서의 this는 linode
    })
})



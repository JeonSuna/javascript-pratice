let date=new Date()
let inputDate = date.toLocaleString()
let name = prompt('이름을 입력하세요')
let content = prompt('메세지를 입력하세요')
let message = {
    name,
    content,
    inputDate,
    img: icon,
    imoge: {
        angry,
        sad,
        happy
    },
    
    printResult: function () {
        document.querySelector('#result').innerHTML =`<h3 style="font-size:larger; color: yellow; margin:unset; ">${this.name}</h3><p style="color:white; margin:unset">${this.inputDate}</p> <br>${this.content}`
    }
}
message.printResult()

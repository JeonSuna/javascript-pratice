function printResult() {
    let checkArray=[]
    let result = document.querySelector('#result')
    let name = document.querySelector('#name')
    let checkNod = document.getElementsByClassName('hobby')
   
    for (let i = 0; i < checkNod.length; i++){
        if (checkNod[i].checked) {
            checkArray.push(checkNod[i].value)
        }
    }
    let radioNode = document.getElementsByName('gender')
    let radio=''
    for (let i = 0; i < radioNode.length; i++){
        if (radioNode[i].checked) {
            radio=radioNode[i].value
        }
    }
    result.innerHTML = `
    name: ${name.value} <br>
    취미: ${checkArray} <br>
    성별:${radio}
    `
}


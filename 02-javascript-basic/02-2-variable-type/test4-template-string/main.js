let name = '홍길동'
const claSum = () => {
    let sum = 0
    for (i = 1; i < 10; i++){
        sum+=1
    }
    return sum
}
//문자열 데이터.여러라인

// let a = 'hello
// world'  error임

//문자열 여러줄로 만들고싶을때 벡틱으로 감싸서 하면 가능함.
//js code적으로는 개행에 의한 데이터(\n)이 유지되지만 html에서는 모든 화면은 태그임

let a = `
hello 
world
` 

//template string의 ${}에는 expression code만 가능하다.
document.write(`
    안녕하세여 ${name}님, 함수호출결과는  ${claSum(10)}, ${ 10+20 }
    `)

// let a =`
// ${ let data = 10 }
// `  
//위 코드는 statement코드는 불가능하다.
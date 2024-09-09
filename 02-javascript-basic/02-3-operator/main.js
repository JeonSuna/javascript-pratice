//산술 연산자
let data1 = 10
let data2 = 4
console.log(data2 + data2) //8
console.log(data1 - data2) //6
console.log(data1 * data2) //40
console.log(data1 / data2) //2.5
console.log(data1 % data2) //2

//증감연산자
let data3 = 10
data3++
console.log(data3) //11
++data3
console.log(data3) //12

console.log('------연산자 우선순위------')
let data4 = 10
let data5 = 10
let result1 = data5++ 
let result2 = ++data5 
console.log(++data4)//11
console.log(result1) //10
console.log(result2) //12

console.log('-------------할당연산자---------')
let a1 = 10
a1 += 10
console.log(a1)//20
a1 = a1 + 10
console.log(a1)//30

console.log('----연산자------')
console.log(10 + 20)//30
console.log('hello' + 'world') //helloworld
console.log('hello' + 10) //hello10
console.log('10' + '20')//1020
console.log(10 + '20')//1020
//문자를 숫자로 변형시켜서 연산 가능
//물론 문자가 숫자로 변형 가능한 데이터
console.log(10 + parseInt('20'))//30
//숫자->문자열
console.log((10).toString() + 20)//1020
//!!숫자를 문자로 변환시킴!!js는 명시적 타입은 없지만
//타입변형 시켜서 숫자<->문자
//타입변형.캐스팅(casting)이라고도 부른다
console.log('----비교 연산자----')
let a2 = 10
let a3 = 10
console.log(a2 == a3)//true
console.log(a2 != a3)//false
console.log(a2 === a3)//true
console.log(a2 !== a3)//false

let a4 = 10
let a5 = '10'
console.log(a4 == a5)//true
console.log(a4 != a5)//false
console.log(a4 === a5)//false
console.log(a4 !== a5)//true
console.log(5 < 10)//true
console.log(5 < '10')//true             !!문자를 숫자로 변형시켜서 나오게함!!
console.log('hello' < 'world')           //true 왜냐면 문자열끼리(아스키코드) 알파벳 순서 비교

console.log('abc'<'abd') //true

console.log('이길동'<'김길동') //false  !!이가 김보다 크기때문에!



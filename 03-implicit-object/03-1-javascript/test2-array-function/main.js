"use strict";
let array1 = [10, 20];
let array2 = [30, 40]
let array3 = array1.concat(array2)
console.log(array3) //[10, 20, 30, 40]


let result = array1.join('a')
console.log(result)

array3.push(100)
array3.unshift(200)
console.log(array3)//[200, 10, 20, 30, 40, 100]

//한꺼번에 여러개도 추가 가능하다
array3.push(1000,2000)
array3.unshift(3000,4000)
console.log(array3)//  [3000, 4000, 200, 10, 20, 30, 40, 100, 1000, 2000]

array3.pop()
array3.shift()
console.log(array3) //[4000, 200, 10, 20, 30, 40, 100, 1000]

//splice추가
//매개변수 : 인덱스 - 갯수 - 데이터
let array = [10, 20, 30, 40]
array.splice(2, 0, 'hello')
console.log(array) //[10, 20, 'hello', 30, 40]

array.splice(2, 0, 'one', 'two')
console.log(array) //[10, 20, 'one', 'two', 'hello', 30, 40]

array.splice(2, 3, 'html', 'css', 'js')
console.log(array) //[10, 20, 'html', 'css', 'js', 30, 40]

array.splice(2, 3)
console.log(array) //[10, 20, 30, 40]

let result2 = array.slice(1, 4)
console.log(result2) //[20, 30, 40]

let result3 = array.slice(2)
console.log(result3) //[30, 40]
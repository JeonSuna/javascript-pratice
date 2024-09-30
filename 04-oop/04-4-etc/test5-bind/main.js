"use strict";

let obj1 = {
    name:'홍길동'
}
//생성자 함수가 아닌 이상 혹은 어떤 객체에 동작 바인딩이 되어 실행될 함수가 아닌 이상 함수 내에 this는 안쓰는게 좋다 
let sayHello = function () {
    console.log(`Hello, ${this.name}`) 
}


// sayHello()//: Cannot read properties of undefined (reading 'name') ,this정의 X sayhello는 그냥 함수임
// //=>위 객체와 함수는 별개, 의도하에 함수를 obj1객체 안에 선언된 것처럼 돌리고싶다

let newFun = sayHello.bind(obj1) 
newFun()//Hello,홍길동

//apply, call
//함수를 만들자마자 호출
let sayHello1 = function (arg1, arg2) {
    console.log(`Hello,${this.name},${arg1},${arg2}`) 
}
sayHello1.call(obj1, 10, 20) //hello홍길동 10,20
sayHello1.apply(obj1, [10, 20]) //hello홍길동 10,20

//배열
let array = ['orange', 'yello', 'green']
array.push('balck')
array.push('white')
console.log(array.shift()) //orange
console.log(array.pop()) //white
console.log(array) //['yello', 'green', 'balck']

//객체를 만들고 싶다. 배열처럼 보이는 유사 배열 객체를 만든다

let myArray = {
    0: 'orange',
    1: 'yellow',
    2: 'greem',
    length: 3,
    push: function (e) {
        //마지막 index에e값을 추가한다
        this[this.length] = e
        this.length++
    },
    pop: function () {
        //마지막 인덱스 제거하고 반환함
        let last = this[this.length - 1]
        this.length--
        delete this[this.length]
        return last
    },
    shift: function () {
        //맨 앞 제거 후 반환
        let first = this[0]
        for (let i = 0; i < this.length - 1; i++){
            this[i]=this[i+1]
        }
        this.length--
        delete this[this.length]
        return first
    }
}
myArray.push('black')
myArray.push('white')
console.log(myArray.shift()) //orange
console.log(myArray.pop())//white
console.log(myArray) // {0: 'yellow', 1: 'greem', 2: 'black',

//유사 배열 객체를 만들면서 배열에 있는 필요한 함수를 직접 알고리즘으로 구현했다
//Array에 push,pop,shift함수가 있다. Array에 선언된 함수지만 , 마치 나의 객체에 있는 함수처럼 연결해서 사용하면 된다

let myArray2 = {
    0: 'orange',
    1: 'yellow',
    2: 'greem',
    length: 3,
    push: function (e) {
      Array.prototype.push.call(this,e) //array의 프로토타입에push있음
    },
    pop: function () {
        return Array.prototype.pop.call(this)
    },
    shift: function () {
        return Array.prototype.shift.call(this)
    }
}
myArray2.push('black')
myArray2.push('white')
console.log(myArray2.shift()) //orange
console.log(myArray2.pop())//white
console.log(myArray2)//{0: 'yellow', 1: 'greem', 2: 'black'
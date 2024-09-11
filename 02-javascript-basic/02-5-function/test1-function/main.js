//test .함수선언 및 이용 
//아래는 함수 순서 파악하기
console.log('step1')
function myFun1() {
    console.log('ecevute function body')
}
console.log('step2') 
myFun1()
console.log('step3')
myFun1() //함수는 일종의 코드 재사용이다. (함수선언+함수 필요한 곳에서 반복 호출)

//argument,return value
function myFun2(arg1,arg2) {
    console.log(`arg1:${arg1},arg2:${arg2}`)
    if (arg1 < arg2) {
        return arg1
    } else {
            return arg2
        } //함수는  return만나면 함수가 아예 끝난다.
    }

let result = myFun2(10, 20)
 console.log(result)
myFun2() //arg1:undefined,arg2:undefined
        //다른언어에서는 error이지만 자바스트립트에서는  error안난다
myFun2(10) //arg1:10,arg2:undefined

//default parameter......
function myFun3(arg1, arg2=0) {
    console.log(`arg1:${arg1},arg2:${arg2}`)
}
myFun3() //arg1:undefined,arg2:0

myFun3(10)// arg1: 10, arg2:0
myFun3(10, 20) //arg1: 10, arg2: 20

//rest parameter
function myFun4(arg1, ...arg2) {
    console.log(arg1) 
    //rest parameter는 배열이다

    if (arg2.length > 0) {
        for (let i = 0; i < arg2.length; i++){
            console.log(`arg2[${i}]=${arg2[i]}`)
        }
    }
}
myFun4(10, 20) // 10 
               //arg2[0] = 20
myFun4(10, 20, 30, 40, 50)//10
                          //arg2[0]=20 ...
                          //arg2[3] = 50

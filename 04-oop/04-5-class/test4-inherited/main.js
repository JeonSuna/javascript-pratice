"use strict";

//-------------------------test1상속---------------------------------
//extends 예약어로 상속관계 명시
//상속의 기본은 부모에 선언된 멤버를 내꺼처럼 사용한다
class Shape {
    name = '도형'
    x = 0
    y = 0
    draw() {
        console.log(`${this.name}을 ${this.x},${this.y}에 그립니다`)
    }
}
class Rect extends Shape {
    width = 0
    height = 0
}
let rect = new Rect()
rect.name = '사각형'
rect.x = 10 //생성자함수와 다르게 this를 사용 안해도 됨
rect.y = 10
rect.width = 100
rect.height = 100
rect.draw() //사각형을 10,10에 그립니다

//test2---------------------- private, static의 상속관계---------------
class Super {
    data1 = 10
    #data2 = 20
    static data3 = 30
}
class Sub extends Super {
    static data4 = 40
    subFun() {
        //부모에 선언된 것을 마치 자신것 처럼
        console.log(this.data1)
        // console.log(this.#data2) //error , private은 자신의 클래스내에서만 사용하겠다는 뜻
        //상속 안된다, 하위 클래스에서 사용할 수 없다 
    }
}
let obj = new Sub
obj.subFun()
console.log(Super.data3) //30- 당연
console.log(Sub.data3)//30 =>static도 상속 가능하다



// test3 ,---------------- 생성자 연결 관계-----------------------------
//생성자를 개발자가 명시적으로 선언하지 않은 경우이다
//default생성자가 자동으로 추가 될 것이다
//별 문제없이 객체 생성됨

// class Super1{

// }
// class Sub1 extends Super1{

// }
// let obj1=new Sub1

//개발자가 명시저으로 생성자를 추가한다
class Super1 {
    constructor() { }
}
class Sub1 extends Super1 {
    // constructor() { }//Must call super constructor
    //아래처럼 개발자가 명시적으로 생성자를 추가했고, 상위 클래스가 명시되어 있다면
    //생성자 내에서 곡 사우이 생성자 호출해야 한다

    //     constructor() {
    //         super()// 상위 생성자 호출 구문, 생성자 내에서만 작성이 가능하다
    //         //상속 관계에 있는 클래스에서 명시젃으로 생성자를 추가하지 않으면 자동으로 추가되는 생성자 코드
    //     }

    constructor() {
        //super는 생성자 내에서 첫줄에 한번만 // 1-상위 생성자 호출, 2-자신 멤버 메모리 할당

        // this.data = 10 // super가 먼저 실행되어야한다
        // super() //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super()
        this.data = 10
    }
}
let obj1 = new Sub1

//test3-------------------상위 생성자 호출-----------------
class Super2 {
    constructor(name, x, y) {
        this.name = name
        this.x = x
        this.y = y
    }
}
class Sub2 extends Super2 {
    constructor(name, x, y, width, height) {
        super(name, x, y)
        this.width = width
        this.height = height
    }
}
let obj2 = new Sub('rect', 20, 20, 200, 200)

//test4---------------------ovwerride------
//상위에 선언된 멤버를 동일 이름으로 하위 클래스에서 재정의
// 상위 멤버 상속은 안된다
// 변수 오버라이드-하위에서 데이터 초기화 다시
//함수 오버라이드-알고리즘 교체
//이름을 다르게 해서 멤버를 선언하면 동일 행동,데이터를 가지는 멤버가 두개
class Shape2 {
    data = 10
    constructor(name, x, y) {
        this.name = name
        this.x = x
        this.y = y
    }
    calcArea() {
        console.log(`${this.name}의 면적을 계산합니다`)
    }
}
    class Rect2 extends Shape2 {
    //변수 오버라이드
    data = 20
    constructor(name, x, y, width, height) {
        super(name, x, y)
        this.width = width
        this.height = height
    }
    //함수 오버라이드
    calcArea() {
        //상위 멤버 상속이 안된다. 명시적으로 상위 함수를 호출하겠다면
        super.calcArea()
        console.log(`넓이는 ${this.width*this.height}`)
    }
}
let rect3 = new Rect2('사각형', 10, 10, 20, 20)
console.log(rect3.data) //20
rect3.calcArea()//사각형의 면적을 계산합니다
//넓이는 400

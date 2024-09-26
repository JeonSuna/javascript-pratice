"use strict";

//모든 도형에 공통으로 들어가는 멤버 
//다른 개발자들이 만드는 모든 도형에 공통으로 들어가는 멤버
function Shape(name) {
    //생성자 함수,new shape()로 객체를 생성하게 되면 자동으로 객체가 하나 만들어지고
    //생성자 함수를 거치면서 그 객체에 변수에 함수가 등록된다
    //객체 생성 시점에 자동으로 만들어지는 객체를 지정
    this.name = name //도형 이름은 유지되어야하기 때문에 
    //객체생성 시점에 만들어지는 객체가 this (현재 실행되는 객체)        
}

Shape.prototype.draw = function () {// 도형의 그림을 그리는 함수, 알고리즘이 상이하지 않음
    console.log(`${this.name} 도형을 그립니다`)
}

console.dir(new Shape('react1'))

//후배 개발자 입장에서 선임 개발자가 만들어 놓은 shape를 상속 받아서
//자신이 구체적으로 만들어야 하는 도형을 개발하겠다는 입장

function Rectangle(name, width, height) {
    //name데이터가 객체에 유지되어야한다
    //..객체별로  name데이터가 다르게 유지,==>this에 등록, 
    // this.name=name 해도 상관 없다
    //다른 생성자 함수에 name이 작성 그걸 그대로 인용
    //자신이 호출되어 객체가 생성될 때, 다른 생성자 함수(상위)도 같이 호출되게 설정되어있다
    //자신의 this에 그 생성자 함수(상위)에 등록된 멤버가 들어오게 
    Shape.apply(this,[name]) //shape 생성자 함수 호출 name을 매개변수로 지정해서 
    this.width=width
    this.height=height
    //name데이터가 객체에 유지되어야 한다
    //width,height데이터가 객체에 유지되어야 한다
    //객체 여러개 공통값? ==>prototype에 등록
    //객체별로 다르게 유지되어야 하는가? ==>this에 등록
}

let rect1 = new Rectangle('react1', 100, 200)
console.log(rect1.name, rect1.width, rect1.height) // name을 rectangle에서 직접 준비하지 않았는데
///shape 생성자 함수를 같이 실행 시킴, shape에 등록한것이 rectangle에서 자신것처럼 사용하고 있다. ==> 상속개념


//상위를 지정해서(Shape) 객체 생성 시점에 상위 생성자함수까지 호출되었지만 , 상위의 prototype까지는 호출되지 않는다
// rect1.draw()//error


//어떤 생성자 함수를 상속하고자 할 때 , 그 함수의 prototype까지 상속되게 하고자 한다면
Rectangle.prototype = new Shape()
Rectangle.prototype.calcArea = function () {
    console.log(`area:${this.width*this.height}`)
}
let rect2 = new Rectangle('rect2', 300, 400)
console.log(rect2.name, rect2.width, rect2.height)  //rect2 300 400
rect2.draw()//rect2 도형을 그립니다
rect2.calcArea()//area:120000

console.dir(rect2)
//this-name,width,height
//prototype-name,calcArea
//prototype- protype-draw

//상위 ㅊ프로토타입을 상속 받고자 할 때
//위처럼 상위 객체를 나의 프로토타입으로 등록해도 되고
//Rectangle.prototype=new Shape()

//상위의 프로토타입을 나의 프로토타입으로 지정해도 된다
Rectangle.prototype = Shape.prototype
Rectangle.prototype.calcArea = function () {
    console.log(`area:${this.width * this.height}`)
}
let rect3 = new Rectangle('rect3', 100, 300)
console.log(rect3.name, rect3.width, rect3.height)  //rect3 300 400
rect3.draw()//rect3 도형을 그립니다
rect3.calcArea()

console.dir(rect3)
//this-name.width,height
//prototype=draw,calcArea
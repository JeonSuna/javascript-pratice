"use strict"

function School(kor, eng) {
    this.kor = kor
    this.eng = eng
}
School.prototype.sum = function () {
    this.sum = this.kor + this.eng
    return this.sum
}
School.prototype.avg = function () {
    this.avg = (this.kor + this.eng) / 2
    return this.avg
}


let school1 = new School(100, 85)
console.log('school sum', school1.sum())
console.log('school sum', school1.avg())
console.dir(school1)


//
function HighSchool(kor, eng) {
    School.apply(this, [kor,eng])
}
HighSchool.prototype = School.prototype;

HighSchool.prototype.grade = function () {
    if (this.avg()>= 90) {
       return "A"
    } else if (this.avg() >= 80 && this.avg() <= 89) {
       return 'B'
    } else if (this.avg() >= 70 && this.avg() <= 79) {
       return 'C'
    } else if (this.avg() >= 60 && this.avg() <= 69) {
       return 'D'
    } else {
       return 'F'
    }

}
let high1 = new HighSchool(100, 85)
console.log('hightschool',high1.grade())
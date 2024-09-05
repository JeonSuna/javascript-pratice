//데이터가 여러개 있다..하나를 변수로 선언해서 이용

let user1 = '홍길동'
let user2 = '김깅동'
let user3 = '이길덩'

//모든 데이터를 여러개라고 배열에 담아서 이용하는 것은 좋지 않다
//데이터가 상이한 성격이라면 정확한 변수명으로 그 데이터가 식별되어 이용하게 하기

/*동일한 성격의 데이터 여러개가 유지되어야 하거나 
데이터의 갯수가 예측되지 않을 때 배열로 선언해서 데이터를 이용한다.*/

let users = ['홍길동', '김길동', '이길덩'];
console.log(users.length) //3
console.log(users[0], users[1], users[2]) //홍길동 김길동 이길덩
console.log(users[3]) //undefined

//한꺼번에 배열의 데이터를 로그로 보고싶다면
console.log(users) //(3) ['홍길동', '김길동', '이길덩']


//배열데이터 변경
users[1] = '전선아' //(3) ['홍길동', '전선아', '이길덩']

console.log(users)

//신규데이터 추가
users.push('최길동')
users.push('추가')
console.log(users) //(5) ['홍길동', '전선아', '이길덩', '최길동', '추가']




users.pop() //최길동 삭제
users.pop() // 추가 삭제
console.log(users) //(3) ['홍길동', '전선아', '이길덩']

//push()와 pop()에 의해 배열에 데이터 추가, 제거는 맨 마지막에 

const calcBonus = (name, arg1, money) => {
    let new_money = 0
    if (arg1 === "A") {
        new_money = money * 0.3
    }
    else if (arg1 === "B") {
        new_money = money * 0.5
    }
    else {
        new_money = money * 0.1

    }
    console.log(`${name}의 추석 보너스는 ${new_money}입니다`)
}
calcBonus('전선아', 'A', 1000)

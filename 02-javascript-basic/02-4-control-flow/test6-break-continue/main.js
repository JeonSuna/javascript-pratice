"use strict";

for (let i = 0; i < 10; i++){
    if (i % 2 === 0) 
        continue
    
    console.log(`for body${i}`)
    if (i === 7)
        break
}


// for (let no1 = 0; no1 < 2; no1++) {
//     console.log(`step:${no1}`)
//     for (let no2 = 0; no2 < 2; no2++){
//         console.log(`step2:${no1},${no2}`)
//     }
// }

//  for (let no1 = 0; no1 < 2; no1++) {
//     console.log(`step:${no1}`)
//     for (let no2 = 0; no2 < 2; no2++) {
//         console.log(`step2:${no1},${no2}`)
//         break
//     }
// }


/*label을 이용한 제어문*/
aaa: for (let no1 = 0; no1 < 2; no1++) {
    console.log(`step:${no1}`)
    for (let no2 = 0; no2 < 2; no2++) {
        console.log(`step2:${no1},${no2}`)
        break aaa
    }
}

 
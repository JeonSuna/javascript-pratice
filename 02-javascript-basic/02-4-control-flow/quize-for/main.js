// "use strict";

//     for(let i = 1; i < 10; i++){
//         for (let j = 1; j < 10; j++){
//             document.write(`${i}*${j}=${i * j}<br>`)
//         }
//         document.write(`<br>`)
//     }


"use strict";

for (let i = 1; i <= 9; i++) {
    document.write(`<div> <h3>${i}단</h3>`);
    for (let j = 1; j < 10; j++) {
        document.write(`${i} X ${j} = ${i * j}`);
    }
    document.write(`</div>`);
}
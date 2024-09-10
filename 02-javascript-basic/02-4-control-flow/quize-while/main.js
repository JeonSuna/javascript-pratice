let i = 1;
while (i <= 9) {
    document.write(`<div> <h3>${i}단</h3>`);
    let j = 1;
    while (j < 10) {
        document.write(`<h3>${i} X ${j} = ${i * j}</h3>`);
        j++
    }
    document.write(`</div>`);
    i++
}
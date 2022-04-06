function filtraPares(arr) {
    return arr.filter(callBack);
}

function callBack(item) {
    return item % 2 === 0;
}

const numeros = [1, 2, 3 , 4, 5, 6, 7, 8, 9];

console.log(filtraPares(numeros));
function somaNumeros(arr){
    return arr.reduce((prev, cur) => {
        return prev + cur;
    });
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(somaNumeros(numeros));
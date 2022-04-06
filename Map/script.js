// const array = [1, 2, 3, 4, 5, 6];

// const res = array.map((item) => item * 2);

// console.log(res);

function mapSemThis(arr) {
    return arr.map((item) => {
        return item * 2;
    });
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(mapSemThis(numeros));
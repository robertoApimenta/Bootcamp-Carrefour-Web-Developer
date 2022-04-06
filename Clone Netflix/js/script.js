function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'admin');
usuarios.set('Anderson', 'admin');
usuarios.set('Usuário da silva 1', 'user');
usuarios.set('Usuário da silva 2', 'user');
usuarios.set('Usuário da silva 3', 'user');
usuarios.set('Usuário da silva 4', 'user');
usuarios.set('Usuário da silva 5', 'user');
usuarios.set('Usuário da silva 6', 'user');
usuarios.set('Usuário da silva 7', 'user');
usuarios.set('Usuário da silva 8', 'user');
usuarios.set('Usuário da silva 9', 'user');
usuarios.set('Usuário da silva 10', 'user');

//console.log(getAdmins(usuarios));

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

//console.log(valoresUnicos(meuArray));

function validaArray(arr, num){
    try{
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof arr !== 'object') throw new TypeError('Array precisa ser object');

    if(typeof num !== 'number') throw new TypeError('Num precisa ser number');

    if(arr.length !== num) throw new RangeError('Número inválido');

    return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Erro ReferenceError');
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log('Erro TypeError');
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log('Erro RangeError');
            console.log(e.message);
        } else {
            console.log('Erro desconhecido:' + e);
        }
    }
}

//console.log(validaArray([1, 1, 1, 1, 1, 1, 1], 7))
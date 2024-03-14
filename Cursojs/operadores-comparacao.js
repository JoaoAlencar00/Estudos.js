const estaAprovado = true;

if (estaAprovado === true) {
    console.log('Aprovado');
}

if ('0'== 0) {
    console.log('passou na comparacao');
} else {
    console.log('Nao passou na comparacao');
}

if ('0'=== 0) {
    console.log('passou na comparacao');
} else {
    console.log('Nao passou na comparacao');
}

const idadeMinima = 18; 
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
    console.log('Não precisa de autorizaçao');
} else {
    console.log('precisa de autorizaçao');
}


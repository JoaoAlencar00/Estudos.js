const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome; // forma resumida para funçoes com uma linha so de return // 

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibeNome('Caroline'));


// Função de calculadora simples
const calculadoraSimples = (a, b, operacao) => {
    if (operacao === 'soma') {
        return a + b;
    } else if (operacao === 'subtracao') {
        return a - b;
    } else if (operacao === 'multiplicacao') {
        return a * b;
    } else if (operacao === 'divisao') {
        return a / b;
    } else {
        return 'Operação não reconhecida';
    }
};


// let nome = "João";
// let idade = "19";
// let booleano = "true";

// console.log (`Meu nome é: ${nome}, minha idade: ${idade}, é ${booleano}`);

//2 exercicio

// let primeiroNome = "Joao";
// let ultimoNome = "Alves";
// let juntos = "Joao" + "alves";
// let tudoJunto = `${primeiroNome} + ${ultimoNome}`;

// console.log(`${primeiroNome}, ${ultimoNome}`);

//3 exercicio

// let idade = "19";
// let nome = "Joao";
// let idadeEoNome = `${idade} + ${nome}`;

// console.log(`meu nome é: ${nome}, e minha idade é: ${idade}`);

//4 exercicio 

// let minhaVariavel = 'Primeiro valor';
// console.log(minhaVariavel);

// minhaVariavel= 'Novo valor';
// console.log(minhaVariavel);

//5 exercicio 

// if (1 > 0){
//     var nome = 'Joao';
//     console.log(`${nome}`);
// }
// console.log(`${nome}`);

// if (1 > 0){
//     let nome = 'Joao';
//     console.log(`${nome}`);
// }
// console.log(`${nome}`);

//6 exercicio 

// let estaChovendo = true;
// if(estaChovendo){
//     console.log("levar guarda chuva");
// } else {
//     console.log("Não precisa de guarda chuva");
// }

//7 exercicio 

// const frase = 'Esta é uma frase de exemplo.';
// console.log(frase.length); // Comprimento da frase
// console.log(frase.toUpperCase()); // Frase em constras maiúsculas

//8 exercicio 

//  const numero = null;
//  let slice;
//  console.log(numero);
//  console.log(slice);

//9 exercicio

//  let tiposDeDados = `${Number(10)}, ${String('Jp')}, ${Boolean(true)}`;
//  console.log(tiposDeDados);

//10 exercicio 
 
//  const numero = 42;
//  const texto = '10';
 
//  const numeroConvertido = String(numero);
//  const textoConvertido = Number(texto);
 
//  console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
//  console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);
 
//11 exercicio 

// const student = 'Naruto';
//  console.log(student.toUpperCase());
//  console.log(student.toLowerCase());
//  console.log(student.slice());

// forma mais explicativa // 

//  const texto = 'JavaScript é incrível!';

//  const maiusculas = texto.toUpperCase();
//  const minusculas = texto.toLowerCase();
//  const parteDaString = texto.slice(0, 10);
 
//  console.log('Texto em maiúsculas:', maiusculas);
//  console.log('Texto em minúsculas:', minusculas);
//  console.log('Parte da string:', parteDaString);


//OPERADOR TERNARIO//
// let nome = true;

// function verificaNome () {
//     if (nome === true) {
//         return 'Nome é Joao';
//     } else {
//         return 'Nome nao é Joao';
//     }
// }
// console.log(verificaNome());


// let valor = 30;
// let texto = valor < 30 ? 'o valor é maior' : 'o valor é menor';
// console.log(texto);


// let matriculaAtiva = true;

// function verificaMatriculaAtiva() {
//     return matriculaAtiva ? 'Sua matricula é ativa' : 'Matricula nao esta ativa';
// }
// console.log(verificaMatriculaAtiva());

// // let idadeEstudante = 16;
// // let precisaDeAutorizacao = true;

// // function precisaDeAutorizacaoAtiva() {
// //     if (idadeEstudante < 18) {
// //         return precisaDeAutorizacao ? 'SIM' : 'NAO';
// //     }
// // }
// // console.log(precisaDeAutorizacaoAtiva());

// let idadeEstudante = 16;
// const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
// console.log(precisaDeAutorizacao); // true

// 1

//  let saldo = 1000;
//  const saque = 300;
//  const deposito = 500;
//  const operacao = saldo - saque; 

//  console.log('Saldo: ' , saldo );
//  console.log('Saldo apos saque: ', operacao);

//2
// let numerica = 20;
// let numero = numerica === 20 ? 'Par' : 'Impar';
// console.log(numero);

//3
// const logado = true;
// const admin = false;

// const resultado = logado && admin;

// console.log('Administrador logado no sistema:', resultado); 

//4
// let caiuDeBike = true;
// let naoCaiuDeBike = false;

// function caiuDeBikeSeLascou () {
//     if (caiuDeBike === true || naoCaiuDeBike === false) {
//         return caiuDeBike ? 'Sim, ele caiu e se lascou' : 'Nao caiu, O mlk é o toque!!'; 
//     }
// }
// console.log(caiuDeBikeSeLascou());

//5
// let usuarioTemIdade = 17;
// let idadeMinimaParaIrNoShow = 18;

// if (usuarioTemIdade > 18 && idadeMinimaParaIrNoShow > 18 ) {
//     console.log(`usuario pode comprar o ingresso e ir no show`);   
// } else {
//     console.log(`usuario nao tem idade suficiente para comprar o ingresso`);
// }


//parametro 
// function dividir(dividendo, divisor) {
//     return dividendo / divisor;
//    }
   
//    const resultado = dividir(10, 2);
//    console.log(`o resultado é ${resultado}`); // o resultado é 5
   

// declaração da função
// function somarDoisNumeros(numA, numB) {
//     return numA + numB;
//    }
   
//    // execução (ou chamada) da função
//    somarDoisNumeros(2, 2);
   
//    // atribuindo o retorno de uma função a uma variável
//    const resultado = somarDoisNumeros(2, 2);
//    console.log(resultado);
   
// function dividir(dividendo, divisor) {
//     return dividendo / divisor;
//    }
   
//    const resultado = dividir(10, 2);
//    console.log(`o resultado é ${resultado}`); // o resultado é 5
   
//1
// function cumprimentarPessoa(nome) {
//     return `Olá, ${nome}! Como vai?`;
// }

// const nomeDaPessoa = 'Ana';
// const saudacao = cumprimentarPessoa(nomeDaPessoa);

// console.log(saudacao); // Saída: Olá, Ana! Como vai?

//2
// function verificaMaioridade(idade) {
//     if (idade >= 18) {
//         return 'É maior de idade.';
//     } else {
//         return 'É menor de idade.';
//     }
// }

// console.log(verificaMaioridade(25)); // É maior de idade.
// console.log(verificaMaioridade(15)); // É menor de idade.

//3
// function verificaPalindromo(string) {
//     const stringInvertida = string.split('').reverse().join('');
//     return string.toLowerCase() === stringInvertida.toLowerCase();
// }

// console.log(verificaPalindromo("arara")); // true
// console.log(verificaPalindromo("Frase")); // false


//4
// function encontraMaiorValor(num1, num2, num3) {
//     let maior = num1; // Assumindo inicialmente que num1 é o maior
  
//     if (num2 > maior) {
//         maior = num2;
//     }
  
//     if (num3 > maior) {
//         maior = num3;
//     }
  
//     return maior;
//   }
  
//   console.log(encontraMaiorValor(12, 56, 32)); // 56

//5
// const calculaPotencia = (base, expoente) => {
//     return Math.pow(base, expoente);
// };

// const base = 2;
// const expoente = 3;

// const resultado = calculaPotencia(base, expoente);
// console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`); // Saída: O resultado de 2 elevado a 3 é: 8



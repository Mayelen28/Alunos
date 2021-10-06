'use strict';

var readlineSync = require("readline-sync");
var opcao, quantAlunos, alunos, listaDeAlunos;
var listaDeAlunos = [];

do{

 console.log ("~~~~ Cadastro de Alunos ~~~~");
 console.log("1 - Cadastrar  Alunos");
 console.log("2 - Listagem de Alunos");
 console.log("0 - Sair do sistema");
 
 opcao = readlineSync.question("Digite a opcao desejada: ");

 switch(opcao) {
      case '1':
          alunos = readlineSync.question("Digite o nome do Aluno: ");
          listaDeAlunos.push(alunos);
          console.log("Aluno: " + alunos + "Aluno Cadastrado com Sucesso!");
          quantAlunos = listaDeAlunos.length;
          break;

        case '2':
          console.log("Listando a quantidade de Alunos")
          if(quantAlunos === 0){
             console.log("O número é Zero");
            } else if(quantAlunos % 2 ===0){
                    console.log ("A quantidade de Alunos é: " + quantAlunos + ", portanto é Par!!");
            } else {
              console.log ("A quantidade de Alunos é:" + quantAlunos + ", portanto é Impar!!");
            }
            break;
            
        case '0':
            console.log("Obrigado por Utilizar nosso sistema!!")
            break;
                
        default:
          console.log("Opcao Inválida, tente novamente!");
    }
} while(opcao !=0);
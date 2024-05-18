//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


//chama as constantes
//chama a função readline
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//cria rank para utilizar na função calculateRank
let rank = "";




function start(question, callback) {
    rl.question(`${question} (S/N): `, (answer) => {

      // Converte para lowercase e retira qualquer "espaço" não desejado
      const formattedAnswer = answer.trim().toLowerCase();
  

      if (formattedAnswer === 's' || formattedAnswer === 'sim') {
        callback(true);
      } else if (formattedAnswer === 'n' || formattedAnswer === 'não') {
        callback(false);
      } else {
        console.log('Por favor, utilize Sim ou Não');
        start(question, callback);
      }
    });
  }
  

  function reStart(question, callback) {
    rl.question(`${question} (S/N): `, (answer) => {

      // Converte para lowercase e retira qualquer "espaço" não desejado
      const formattedAnswer = answer.trim().toLowerCase();
  

      if (formattedAnswer === 's' || formattedAnswer === 'sim') {
        callback(true);
      } else if (formattedAnswer === 'n' || formattedAnswer === 'não') {
        callback(false);
      } else {
        console.log('Por favor, utilize Sim ou Não');
        reStart(question, callback);
      }
    });
  }


function end() {
  console.log("Até logo!");
  rl.close();
  process.exit(0);
}






function calculateRank(){
    rl.question('Quantas vitórias você tem? ', (inputWin) => {
      rl.question('Quantas derrotas você tem? ', (inputLose) => {
        const win = parseInt(inputWin);
        const lose = parseInt(inputLose);
        
        
            let finalResult = win - lose

            if (finalResult <= 10) {
                rank = "Ferro";
            } else if (finalResult > 10 && finalResult<= 20) {
                rank = "Bronze";
            } else if (finalResult > 20 && finalResult<= 50) {
                rank = "Prata";
            } else if (finalResult > 50 && finalResult<= 80) {
                rank = "Ouro";
            } else if (finalResult > 80 && finalResult<= 90) {
                rank = "Diamante";
            } else if (finalResult > 90 && finalResult<= 100) {
                rank = "Lendário";
            } else if (finalResult > 100) {
                rank = "Imortal";
            } else {
                rank = "Unranked"
            }

            console.log(`O Herói tem um saldo de valor ${finalResult} e está no Rank ${rank}`);
            reStart('Gostaria de fazer outra consulta?', (reStartYes) => {
                if (reStartYes) {
             calculateRank();
            } else {
            end();
            }
            });
    });
    });
}



//Começo das chamadas

start('Vamos começar?', (startYes) => {
    if (startYes) {
      console.log("vamos calcular seu rank!")
      calculateRank();
    } else {
      console.log('Te aguardo!');
      rl.close();
      process.exit(0);
    }
  
});


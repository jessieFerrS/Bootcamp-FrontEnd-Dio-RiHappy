const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nivel = "";

rl.question("Digite o nome do Herói: ", (nomeHeroi) =>{
  rl.question("Digite a quantidade de experiência (XP) do herói: ", (experienciaInput) => {
    const experiencia = parseInt(experienciaInput);

    while (isNaN(experiencia) || experiencia < 0){
      console.log("Por favor, insira um valor válido para a experiência (XP) do herói!" );
      rl.close();
      return;
    }

    if (experiencia <= 1000){
      nivel = "Ferro";
    } else if(experiencia >= 1001 && experiencia <= 2000){
      nivel = "Bronze";
    } else if(experiencia >= 2001 && experiencia <= 5000){
      nivel = "Prata";
    } else if(experiencia >= 5001 && experiencia <= 7000){
      nivel = "Ouro";
    } else if(experiencia >= 7001 && experiencia <= 8000){
      nivel = "Platina";
    } else if(experiencia >= 8001 && experiencia <= 9000){
      nivel = "Ascendente";
    } else if(experiencia >= 9001 && experiencia <= 10000){
      nivel = "Imortal";
    } else if(experiencia >= 10001){
      nivel = "Radiante";
    } else{
      nivel = "Não especificado";
    }

    console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);
    rl.close();
  });
});

const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
  precoCombustivel: document.querySelector("#precoCombustivel"),
};
//console.log(input.combustivel);

const elemento = {
  formulario: document.querySelector("form"),
  paragrafo: document.querySelector("p"),
};

const veiculo = {
  modelo: "FORD KA",
  consumoMedio: 14,
};

const viagem = {
  velocidadeMedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

const combustivel = {
  tipo: "",
  precoEtanol: 3.899,
  precoGasolina: 5.999,
  preco_combustivel: "",
};

input.combustivel.forEach((radio) => {
  // console.log(raido.value);
  radio.addEventListener("change", () => {
    combustivel.tipo = radio.value;
   // console.log(combustivel.tipo);
  });
});

elemento.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularConsumo();
});

function calcularConsumo() {
 // console.log(precoCombustivel.value);
  // \variaveis para capturar o valor da Hora e Minuto
  viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;

  // captura do valor do consumo médio do veículo digitado pelo usuário

  veiculo.consumoMedio = input.consumo.value;

 // console.log(veiculo.consumoMedio);

  // metodo para cortart o simbolo de ":" da hora e minuto, separamndo em variaveis

  let hora = +viagem.duracao.slice(0, 2);
  let minuto = +viagem.duracao.slice(3);

  //let calculaHora = ((hora * 60) + minuto) / 24;

  // formula para calcular a distancia percorrida pelo usuario

  viagem.percurso = (
    viagem.velocidadeMedia *
    ((hora * 60 + minuto) / 60)
  ).toFixed(2);

  // condição para reduzir o clor da distancia caso o usuario utilize etanol

  if (combustivel.tipo.toLowerCase() === "etanol") {
    viagem.percurso = viagem.percurso - (viagem.percurso * 0, 3) * 100;
  }

 // console.log(viagem.percurso);

  // metodo para substituir "." por "," na exibição da distancia total

  //console.log(viagem.percurso.replace(".", ",") + " KM");

  viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio;

  //console.log(viagem.consumoLitros);

  const paragrafo = document.querySelector("p");
 // console.log(paragrafo);

  // calculo para saber o custo real em litros

  combustivel.preco_combustivel = +input.precoCombustivel.value;

  viagem.custoEmReais = viagem.consumoLitros * combustivel.preco_combustivel;

  paragrafo.innerText = `O Custo Total da Viagem foi de: ${viagem.custoEmReais.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  )}
   Total de combustivel utilizado na viagem foi:  ${viagem.consumoLitros
     .toFixed(2)
     .replace(
       ".",
       ","
     )} Litros distancia percorrida foi de ${viagem.percurso.replace(".",",")} Km`;

  // metodo para formatar o resultado como moeda (R$)
  // console.log(
  //   `Custo do Etanol: ${viagem.custoEmReais.toLocaleString("pt-BR", {
  //     style: "currency",
  //     currency: "BRL",
  //   })}`
  // );

  viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina;

  paragrafo.innerText = `O Custo Total da Viagem foi de: ${viagem.custoEmReais.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  )}
   Total de combustivel utilizado na viagem foi:  ${viagem.consumoLitros
     .toFixed(2)
     .replace(".", ",")} Litros
    Distancia Percorrida foi de ${viagem.percurso.replace(".", ",")} Km`;

  // console.log(
  //   `Custo da Gasolina: ${viagem.custoEmReais.toLocaleString("pt-BR", {
  //     style: "currency",
  //     currency: "BRL",
  //   })}`
  // );
}

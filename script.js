const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
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
};

input.combustivel.forEach((radio) => {
  // console.log(raido.value);
  radio.addEventListener("change", () => {
    combustivel.tipo = radio.value;
    console.log(combustivel.tipo);
  });
});

elemento.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularConsumo();
  
});

function calcularConsumo(){

    viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;

  let hora = viagem.duracao.slice(0, 2);
  let minuto = viagem.duracao.slice(3);
  console.log(hora, minuto);

}

viagem.percurso = viagem.duracao * viagem.velocidadeMedia;
viagem.consumoLitros = Math.round(viagem.percurso / veiculo.consumoMedio);

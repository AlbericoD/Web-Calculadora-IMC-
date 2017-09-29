var titulo = document.querySelector(".titulo");
titulo.textContent = "Calculos Testes";

var pacientes = document.querySelectorAll(".paciente"); //console.log(pacientes);
for (var index = 0; index < pacientes.length; index++) {

  var paciente = pacientes[index];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");

  var validacao_peso = (peso <= 0 || peso >= 300);
  var validacao_altura = (altura <= 0 || altura >= 3.00);
  var calc_ok = true;

  if (validacao_peso) {
    console.log("teste dados do peso inválido");
    imc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
    calc_ok = false;
  } else if (validacao_altura) {
    console.log("teste dados da altura inválido");
    imc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
    calc_ok = false;
  }
  if (calc_ok) {
    imc.textContent = calculaImc(peso, altura);
    imc.classList.add("paciente-valido");
    console.log(pacientes);
    console.log("Validação ok!");
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(3);
}




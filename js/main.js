var titulo = document.querySelector(".titulo");
titulo.textContent = "Calculos Testes";

var pacientes = document.querySelectorAll(".paciente");
for (var index = 0; index < pacientes.length; index++) {

  var paciente = pacientes[index];
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");
  var validacao_peso = validaPeso(peso);
  var validacao_altura = validaAltura(altura);

  if (!validacao_peso) {
    console.log("teste dados do peso inválido");
    imc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  } else if (!validacao_altura) {
    console.log("teste dados da altura inválido");
    imc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
  if (validacao_peso && validacao_altura) {
    imc.textContent = calculaImc(peso, altura);
    imc.classList.add("paciente-valido");
    console.log(pacientes);
    console.log("Validação ok!");
  }
}







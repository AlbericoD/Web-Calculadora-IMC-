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

    var campo_imc = peso / (altura * altura);
    imc.textContent = campo_imc.toFixed(2);
    imc.classList.add("paciente-valido");
    console.log(pacientes);
    console.log("Validação ok!");
  }
}

var btnCadastrar = document.querySelector("#adicionar-paciente"); //console.log(btnCadastrar);
btnCadastrar.addEventListener("click", cadastro);


function cadastro(eventos) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value; //console.log(nome);
  var peso = form.peso.value; //console.log(peso);
  var altura = form.altura.value; //console.log(altura);
  var gordura = form.gordura.value; //console.log(gordura);
  
  var novaInfo = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  novaInfo.appendChild(nomeTd);
  novaInfo.appendChild(pesoTd);
  novaInfo.appendChild(alturaTd);
  novaInfo.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(novaInfo);
}




var titulo = document.querySelector(".titulo");
//console.log(titulo.textContent);
//console.log(titulo);
titulo.textContent = "Calculos Testes";

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var imc = paciente.querySelector(".info-imc");
var validacao_peso = (peso <= 0 || peso >= 300);
var validacao_altura = (altura <= 0 || altura >= 3.00);
var calc_ok = true; 

if (validacao_peso) {
   console.log("teste dados do peso inválido");
   imc.textContent = "Peso inválido";
   calc_ok = false;
}else if(validacao_altura){
   console.log("teste dados da altura inválido");
   imc.textContent = "Altura inválida";
   calc_ok = false;
}
if (calc_ok) {
   
   imc.textContent = peso / (altura*altura);
   console.log(paciente);
   console.log("Validação ok!");
}



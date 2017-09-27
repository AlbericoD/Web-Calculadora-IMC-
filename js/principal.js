var titulo = document.querySelector(".titulo");
titulo.textContent = "Calculos Testes";

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);
for (var index = 0; index < pacientes.length; index++) {
 
   var peso = pacientes[index].querySelector(".info-peso").textContent;
   var altura = pacientes[index].querySelector(".info-altura").textContent;
   var imc = pacientes[index].querySelector(".info-imc");

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
      
     var  campo_imc = peso / (altura*altura);
      imc.textContent = campo_imc.toFixed(2);
      console.log(pacientes);
      console.log("Validação ok!");
   }
}



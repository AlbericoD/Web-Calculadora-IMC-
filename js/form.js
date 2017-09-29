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
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    novaInfo.appendChild(nomeTd);
    novaInfo.appendChild(pesoTd);
    novaInfo.appendChild(alturaTd);
    novaInfo.appendChild(gorduraTd);
    novaInfo.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(novaInfo);
}

function novopaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function criarLinhas(paciente) {

    var novaInfo = document.createElement("tr");
    novaInfo.classList.add("paciente");

    novaInfo.appendChild(criarTd(paciente.nome, "info-nome"));
    novaInfo.appendChild(criarTd(paciente.peso, "info-peso"));
    novaInfo.appendChild(criarTd(paciente.altura, "info-altura"));
    novaInfo.appendChild(criarTd(paciente.gordura, "info-gordura"));
    novaInfo.appendChild(criarTd(paciente.imc, "info-imc"));

    return novaInfo;
}
function criarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var altura = validaAltura(paciente.altura);
    var peso = validaPeso(paciente.peso);
    if (altura && peso) { return true; } else { return false; }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) { return true; } else { return false; }
}
function validaPeso(peso) {
    if (peso > 0 && peso <= 300) { return true; } else { return false; }
}
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(3);
}
function cadastro() {

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = novopaciente(form);
    var ehvalido = validaPaciente(paciente);
    //validaPaciente(paciente);
    if (!ehvalido) {
        console.log("erro valida botao");
        return;
    } else {
        var novaInfo = criarLinhas(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(novaInfo);
        form.reset();
    }
}
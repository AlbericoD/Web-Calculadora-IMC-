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

function validaPaciente(peso, altura) {
    var altura = validaAltura(altura);
    var peso = validaPeso(peso);
    if (altura && peso) { return true; } else { return false; }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) { return true; } else { return false; }
}
function validaPeso(peso) {
    if (peso >= 0 && peso <= 300) { return true; } else { return false; }
}
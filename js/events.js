var btnCadastrar = document.querySelector("#adicionar-paciente");
btnCadastrar.addEventListener("click", cadastro);

function cadastro(eventos) {

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = novopaciente(form);

    var novaInfo = criarLinhas(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(novaInfo);
    form.reset();
}

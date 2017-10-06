var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("fui carregado");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function (paciente) {
                adicionaPacientenaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.response);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("mensagem-erro");
        }


    });
    xhr.send();
});
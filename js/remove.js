var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(event){
    console.log(event.target);
    var remove =  event.target; // remove td
    var removelinha = remove.parentNode; // remove tr
    removelinha.remove();
});
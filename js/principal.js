var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var pesoValido = true;
    var alturaValida = true;
    var setaImc = paciente.querySelector(".info-imc");
    
    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        setaImc.textContent = "Peso inválido!";
    }
    if(altura <= 0 || altura >= 3.00){
        alturaValida = false;
        setaImc.textContent = "Altura inválida!";
    }
    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);
        setaImc.textContent = imc.toFixed(2);
        paciente.classList.add("paciente-valido");
    } else if(pesoValido == false || alturaValida == false){
        paciente.classList.add("paciente-invalido");
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);

    var  tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    console.log(pacienteTr);

});
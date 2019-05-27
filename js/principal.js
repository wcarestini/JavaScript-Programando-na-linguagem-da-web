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


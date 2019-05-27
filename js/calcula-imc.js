var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    var setaImc = paciente.querySelector(".info-imc");
    
    if(!pesoValido){
        pesoValido = false;
        setaImc.textContent = "Peso inválido!";
    }
    if(!alturaValida){
        alturaValida = false;
        setaImc.textContent = "Altura inválida!";
    }
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        setaImc.textContent = imc;
        paciente.classList.add("paciente-valido");
    } else if(pesoValido == false || alturaValida == false){
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    if(peso>0  && peso<1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>0 && altura<3.00){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


function calcular() {
    var formulario = document.getElementById("formulario");

    var peso = formulario.peso.value;
    var altura = formulario.altura.value;
    var feminino = formulario.feminino.value;
    var masculino = formulario.masculino.value;

    var imc = peso / (altura * altura);

    if(masculino){
        if (imc < 19.1) {
            alert('Você esta abaixo do peso! Seu IMC é igual a ' + imc.toFixed(2));
        }
        else if (imc <= 25.8) {
            alert("Peso Ideal! Seu IMC é igual a " + imc.toFixed(2));
        }
        else if (imc <= 27.3) {
            alert("Sobrepeso! Seu IMC é igual a " + imc.toFixed(2));
        }
        else if (imc <= 32.3) {
            alert("Obesidade Moderada! Seu IMC é igual a " + imc.toFixed(2));
        }
        else if (imc > 32.3){
            alert("Gordo!  Seu IMC é igual a " + imc.toFixed(2) );
        }
    
    }else if(feminino){
        if (imc < 20.7) {
            alert('Você esta abaixo do peso! Seu IMC é igual a ' + imc.toFixed(2));
        }
        else if (imc <= 26.4) {
            alert("Peso Ideal! Seu IMC é igual a " + imc.toFixed(2));
        }
        else if (imc <= 27.8) {
            alert("Sobrepeso! Seu IMC é igual a " + imc.toFixed(2));
        }
        else if (imc <= 31.1) {
            alert("Obesidade Moderada! Seu IMC é igual a " + imc.toFixed(2));
        }
        else if (imc > 31.1){
            alert("Gordo!  Seu IMC é igual a " + imc.toFixed(2) );
        }
        
    }
    
}
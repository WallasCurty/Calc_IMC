function calcular() {
    var formulario = document.getElementById("formulario");

    var peso = +formulario.peso.value;
    var altura = +formulario.altura.value;
    var feminino =+ formulario.feminino.value;
    var masculino =+ formulario.masculino.value;

    var imc = peso / (altura * altura);

    formulario.imc.value = imc.toFixed(2);
    if(masculino){
        if (imc < 19.1) {
            alert('Você esta abaixo do peso!');
        }
        else if (imc <= 25.8) {
            alert("Peso Ideal");
        }
        else if (imc <= 27.3) {
            alert("Sobrepeso");
        }
        else if (imc <= 32.3) {
            alert("Obesidade Moderada");
        }
        else if (imc > 32.3){
            alert('Gordo');
        }
    
    }else if(feminino){
        if (imc < 20.7) {
            alert('Você esta abaixo do peso!');
        }
        else if (imc <= 26.4) {
            alert("Peso Ideal");
        }
        else if (imc <= 27.8) {
            alert("Sobrepeso");
        }
        else if (imc <= 31.1) {
            alert("Obesidade Moderada");
        }
        else if (imc > 31.1){
            alert('Gordo');
        }
        
    }else{
        alert('Você ainda não digitou nada')
    }
    
}
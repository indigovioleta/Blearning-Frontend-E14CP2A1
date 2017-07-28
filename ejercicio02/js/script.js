 var calcularIMC = function(peso, estatura){
 		return peso / (estatura * estatura);
 	};

 	var interpretarIMC = function(peso, estatura){
 		var imc = calcularIMC(peso, estatura);
 		if (imc > 24){
 			return "red";
 		} else if (imc > 19) {
 			return "green";
 		} else {
 			return "yellow";
 		}

 	};

 resultado = interpretarIMC(95, 1.60);// nombre función invocada mal escrito y faltaba agregar el parámetro de "estatura" (en metros)
 console.log(resultado);

 $('#btn').on('click', function(){
 	var altura = $('#altura').val();
 	var peso = $('#peso').val();

 	var resultado = calcularIMC(peso, altura);
 	var color = interpretarIMC(peso, altura);

 	$('#resultado').html('<p style="color:'+ color +'">El resultado del IMC es: "'+ resultado.toFixed(0) +'"</p>');
 });
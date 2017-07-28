$('#btn').on('click', function(){
 	var nombre = $('#nombre').val();
 	var apellido = $('#apellido').val();
 	$('#nombre-completo').val(nombre + ' ' + apellido);
 });


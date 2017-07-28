$('#nombre').on('input', function(){
 	var respuesta = $(this).val()+' '+$('#apellido').val();
 	$('#nombre-completo').val(respuesta);
 });
$('#apellido').on('input', function(){
 	var respuesta = $('#nombre').val()+' '+$(this).val();
 	$('#nombre-completo').val(respuesta);
 });

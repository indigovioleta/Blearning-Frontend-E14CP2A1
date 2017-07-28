$('#btn').on('click', function(){
 	var valor = $('#valor-sin-iva').val()*1.19;
 	$('#valor-con-iva').val('$' + valor);
 });


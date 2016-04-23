var server = {
	sincronizar: function(pr, di, th){
		$.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { personas: pr, dias: di, tipo: th },
			error: function(jq,txt){
				navigator.notification.alert("Hubo un error al intentar sincronizar los datos guardados", null, "Error", "Aceptar");
			}
		}).done(server.sincronizado);
	},
	sincronizado: function(msg){
		if(msg == 1){
			navigator.notification.alert("Los datos guardados se han sincronizado satisfactoriamente", null, "Sincronizado", "Aceptar");
			//Guardar en Historial
		}else
			navigator.notification.alert("Hubo un error al intentar sincronizar los datos guardados", null, "Error", "Aceptar");
	}
};
$(document).ready(function () { 
	 
	$('#preguntas-titulado').hide(); //desde el inicio ocultamos las preguntas 8 en adelante

	$('#contenedor-global #7 .alternativas-simple-compuesta li').click(function(){
		var alternativa = $(this).data("indice");
		console.log(alternativa);
		if(alternativa == 'a'){
			$('#preguntas-titulado').show();
		}else{
			$('#preguntas-titulado').hide();	//ocultamos la preguntas dentro de #preguntas-titulado

			//luego de ocultar estas preguntas aparte de no contar para guardar en la bd se debe 
			
			$('#preguntas-titulado .pregunta-alternativa-simple, #preguntas-titulado .pregunta-respuesta-tipeada, #preguntas-titulado .pregunta-adicional-tipeada, #preguntas-titulado .pregunta-alternativa-multiple, #preguntas-titulado .pregunta-compuesta,#preguntas-titulado .pregunta-adicional-alternativa-simple').each(function(){
				$(this).removeAttr("data-marcado");
				$(this).removeData("marcado");
			});

			$('#preguntas-titulado li').each(function(){
				$(this).removeAttr("seleccionado");
				$(this).removeData("seleccionado");
			});

			$('#preguntas-titulado input').each(function(){
				$(this).val('');
			});
		}
	});

	$('.pregunta-alternativa-simple-compuesta .alternativas-simple-compuesta li').click(function(){

		$('#7').attr("data-marcado","marcado");
		$('#7').data("marcado","marcado");		//agregamos atributo marcado a la pregunta #7
		$('#7 > .enunciado').css("color","black");		
		
		var subpregunta = $(this).data("subpregunta");
		console.log(subpregunta);
		if(subpregunta == "7-1"){
			$("#7-1").show();
			$('#7 li[data-pregunta=7][data-indice=a]').css('color','red'); 						//se cambia color la alternativa seleccionada
			$('#7 li[data-pregunta=7][data-indice=a]').attr("seleccionado","verdadero"); 		//se cambia atributo data-seleccionado -> true
			$('#7 li[data-pregunta=7][data-indice=a]').data("seleccionado","verdadero");

			$('#7 li[data-pregunta=7][data-indice=b]').css('color','gray'); 					//se cambia color la alternativa seleccionada
			$('#7 li[data-pregunta=7][data-indice=b]').removeAttr("seleccionado"); 		
			$('#7 li[data-pregunta=7][data-indice=b]').removeData("seleccionado");

			$('#7-2 input').val('');
			$("#7-2").hide();
			$('#7-2').removeAttr("data-marcado");
			$('#7-2').removeData("marcado");

		}else{
			if(subpregunta == "7-2"){
				$("#7-1").hide();
				$('#7 li[data-pregunta=7][data-indice=a]').css('color','gray'); 				//se cambia color la alternativa seleccionada
				$('#7 li[data-pregunta=7][data-indice=a]').removeAttr("seleccionado"); 		
				$('#7 li[data-pregunta=7][data-indice=a]').removeData("seleccionado");
				$("#7-2").show();
				$('#7 li[data-pregunta=7][data-indice=b]').css('color','red'); 					//se cambia color la alternativa seleccionada
				$('#7 li[data-pregunta=7][data-indice=b]').attr("seleccionado","verdadero"); 	//se cambia atributo data-seleccionado -> true
				$('#7 li[data-pregunta=7][data-indice=b]').data("seleccionado","verdadero");

				//si la alterntativa seleccionada es "no" se debe ocultar la pregunta #7-1
				$('#contenedor-global #7-1').removeAttr("data-marcado");
				$('#contenedor-global #7-1').removeData("marcado");
				$('#contenedor-global #7-1 .alternativas li').each(function(){ //las alternativas de la pregunta #7 deben quedar sin el atributo seleccionado
					$(this).removeAttr("seleccionado");
					$(this).removeData('seleccionado');
					$(this).css("color","black");
				});
				$('#select-departamentos').val(0);
				$('#select-departamentos').change();
				$("#7-1-1").hide(); 											//se oculta tambien la pregunta #7-1-1
				$('#7-1-1').removeAttr("data-marcado");
				$('#7-1-1').removeData("marcado");
			}
		}
	});

	$('#select-departamentos').change(function(){
		$("#7-1-1").attr("data-marcado","marcado");
		$("#7-1-1").data("marcado","marcado");
		$("#7-1-1").css("color","black");
	});

	$('.pregunta-alternativa-simple-compuesta .pregunta-alternativa-simple-1 .alternativas li').click(function(){
		var numeroPregunta = $(this).data('pregunta');
		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		var alternativa = $(this).data('indice');

		if(alternativa == 'a'){
			$("#7-1-1").show();
			$('#7-1 li[data-pregunta=7-1][data-indice=a]').css('color','red'); 						//se cambia color la alternativa seleccionada
			$('#7-1 li[data-pregunta=7-1][data-indice=a]').attr("seleccionado","verdadero"); 		//se cambia atributo data-seleccionado -> true
			$('#7-1 li[data-pregunta=7-1][data-indice=a]').data("seleccionado","verdadero");

			$('#7-1 li[data-pregunta=7-1][data-indice=b]').css('color','gray'); 					//se cambia color la alternativa seleccionada
			$('#7-1 li[data-pregunta=7-1][data-indice=b]').removeAttr("seleccionado"); 		
			$('#7-1 li[data-pregunta=7-1][data-indice=b]').removeData("seleccionado");
		}else{
			$("#7-1-1").hide();
			$('#7-1 li[data-pregunta=7-1][data-indice=a]').css('color','gray'); 						//se cambia color la alternativa seleccionada
			$('#7-1 li[data-pregunta=7-1][data-indice=a]').removeAttr("seleccionado"); 		//se cambia atributo data-seleccionado -> true
			$('#7-1 li[data-pregunta=7-1][data-indice=a]').removeData("seleccionado");

			$('#7-1 li[data-pregunta=7-1][data-indice=b]').css('color','red'); 							//se cambia color la alternativa seleccionada
			$('#7-1 li[data-pregunta=7-1][data-indice=b]').attr("seleccionado","verdadero");  		
			$('#7-1 li[data-pregunta=7-1][data-indice=b]').data("seleccionado","verdadero");

			$('#7-1-1').removeAttr("data-marcado");
			$('#7-1-1').removeData("marcado");
			$('#select-departamentos').val(0);
			$('#select-departamentos').change();
		}
	});

	$('#contenedor-global .pregunta-compuesta .alternativas li').click(function(){
		
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		$("#"+numeroPregunta+" .alternativas li[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).removeAttr("seleccionado");								
			$(this).removeData("seleccionado");
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");

		/*Pregunta compuesta - respuesta tipeada*/
		$("#"+numeroPregunta+" .pregunta-adicional-tipeada").each(function(){ 		
			var adicional = $(this).data("head");
			if(alternativa == adicional){
				var numeroPreguntaAdicional = $(this).attr('id');								
				$("#"+numeroPreguntaAdicional+" .respuesta-tipeada input").each(function(){ 		
					$(this).val("");	//valor vacio para la caja de texto al mostrarse									
				});
				$(this).show();
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');
				$("#"+numeroPreguntaAdicional+" .respuesta-tipeada input").each(function(){ 		
					$(this).val("");	//valor vacio para la caja de texto al ocultarse								
				});
				$(this).hide();
			}
		});

		/*Pregunta compuesta - alternativa simple*/
		$("#"+numeroPregunta+" .pregunta-adicional-alternativa-simple").each(function(){
			if(alternativa == "a" || alternativa == "b" || alternativa == "c" || alternativa == "d"){
				$("#14, #15").show();
				$("#16 .alternativas li[data-pregunta=16]").each(function(){ 		
					$(this).removeAttr("seleccionado");	
					$(this).removeData("seleccionado");					
					$(this).css("color","black");				
				});
				$("#16").removeAttr("data-marcado");
				$("#16").removeData("marcado");
				$("#16").hide();
			}else{
				$("#14 .alternativas li[data-pregunta=14], #15 .alternativas li[data-pregunta=15]").each(function(){ 		
					$(this).removeAttr("seleccionado");	
					$(this).removeData("seleccionado");					
					$(this).css("color","black");				
				});
				$("#14,#15").removeAttr("data-marcado");
				$("#14,#15").removeData("marcado");
				$("#14,#15").hide();
				$("#16").show();
			}
		});

		/*Pregunta compuesta - alternativa multiple*/
		$("#"+numeroPregunta+" .pregunta-adicional-alternativa-multiple").each(function(){
			var subordinante = $(this).data("head");
			if(alternativa == subordinante){
				$(this).show();
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');
				$("#"+numeroPreguntaAdicional+" .grupo-alternativas-pregunta-multiple li[data-pregunta="+numeroPreguntaAdicional+"]").each(function(){ 		
					$(this).removeAttr("data-seleccionado");	
					$(this).removeData("seleccionado");					
					$(this).css("color","black");				
				});
				$(this).hide();
				$("#"+numeroPreguntaAdicional+"").removeAttr("data-marcado");
				$("#"+numeroPreguntaAdicional+"").removeData("marcado");
			}
		});
	});

	$('#contenedor-global .pregunta-adicional-alternativa-multiple li').click(function(){
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var seleccionado = $(this).data('seleccionado');

		if(seleccionado == null){
			$(this).attr("seleccionado","verdadero");	// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado","verdadero"); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','red');
			$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
			$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
			$("#"+numeroPregunta+" .enunciado").css("color","black");	
		}else{
			$(this).removeAttr("data-seleccionado");
			$(this).removeData("seleccionado");
			$(this).css('color','black');
		}
	});

	$('#contenedor-global  .pregunta-adicional-alternativa-simple .alternativas li').click(function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		$("#"+numeroPregunta+" .grupo-alternativas-pregunta-simple  li").each(function(){ 	
			$(this).removeAttr("seleccionado");			//se cambia de color las alternativas	
			$(this).removeData("seleccionad");					
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");
		$("#"+numeroPregunta+"").data("marcado","marcado");
	});

	$('#contenedor-global .pregunta-alternativa-simple .alternativas li').on("click",function(){
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		$("#"+numeroPregunta+" > .alternativas li").each(function(){ 	
			$(this).removeAttr("seleccionado");		//se cambia de color las alternativas
			$(this).removeData("seleccionado");						
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		//se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");
	});

	$('#contenedor-global .pregunta-respuesta-tipeada .respuesta-tipeada input,#contenedor-global .pregunta-respuesta-tipeada-1 .respuesta-tipeada input,#contenedor-global .pregunta-adicional-tipeada .respuesta-tipeada input').on("input",function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		if($(this).val() !== ""){
			$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
			$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
			$("#"+numeroPregunta+" .enunciado").css("color","black");	
			//console.log($(this).val());
		}else{
			$("#"+numeroPregunta+"").removeAttr("data-marcado");	//se quita atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
			$("#"+numeroPregunta+"").removeData("marcado");	
			//console.log("vacio");
		}
	});

	$('#contenedor-global .pregunta-alternativa-multiple .alternativas li').on( "click",function(){
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var opcionNinguna = $(this).data('ninguna');	

		var seleccionado = $(this).data("seleccionado");	
		if(seleccionado == null){		
			var subpregunta = $(this).data("subpregunta");
			if(subpregunta != null){					//se busca si tinene alguna subpregunta y se muestra
				$("#"+subpregunta+"").show();
			}

			if(opcionNinguna == "si"){					//si la alternativa seleccionada es "ninguna"
				$("#"+numeroPregunta+" .alternativas li").each(function(){
					$(this).removeAttr("seleccionado");
					$(this).removeData("seleccionado");
					$(this).css('color','black');
				});
			}else{
				$("#"+numeroPregunta+" .alternativas li[data-ninguna=si]").removeAttr("seleccionado");
				$("#"+numeroPregunta+" .alternativas li[data-ninguna=si]").removeData("seleccionado");
				$("#"+numeroPregunta+" .alternativas li[data-ninguna=si]").css('color','black');
			}

			$(this).attr("seleccionado","verdadero");
			$(this).data("seleccionado","verdadero");	//si no ha sido clickeado antes, se agrega atributo data->seleccionado
			$(this).css("color","red");

			$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
			$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
			$("#"+numeroPregunta+" .enunciado").css("color","black");	
		}else{
			var subpregunta = $(this).data("subpregunta");
			if(subpregunta != null){					//se busca si tinene alguna subpregunta y se oculta
				$("#"+subpregunta+"").hide();
				$("#"+subpregunta+"").removeAttr("data-marcado");
				$("#"+subpregunta+"").removeData("marcado");	
				$("#"+subpregunta+" .alternativas li").each(function(){
					$(this).removeAttr("seleccionado");
					$(this).removeData("seleccionado");
					$(this).css("color","black");
				});		
			}
			$(this).removeAttr("seleccionado");
			$(this).removeData("seleccionado");			//si ya ha sido cickeado, se elimina atributo data->seleccionado
			
			$(this).css("color","black");
		}
	});

	$('#contenedor-global .pregunta-alternativa-multiple .pregunta-alternativa-simple .alternativas li').on( "click",function(){
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		$("#"+numeroPregunta+" .alternativas li[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).removeAttr("seleccionado");								
			$(this).removeData("seleccionado");
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");
	});

	$('#boton').click(function(){
		$('li[seleccionado=verdadero]').each(function(){
			var pregunta = $(this).data("pregunta");
			var respuesta = $(this).data("indice");
			console.log(pregunta + "-" + respuesta);
		});
		$('input').each(function(){
			if($(this).val()!= ''){
				var pregunta = $(this).data("pregunta");
				var valor = $(this).val();
				console.log(pregunta + "-" + valor);
			}
		});
	});

	$('#btn-verificar').click(function(){
		var j = 1;
		var alternativa_a = $('#7 .alternativas-simple-compuesta li[data-indice=a]').data("seleccionado");
		var alternativa_b = $('#7 .alternativas-simple-compuesta li[data-indice=b]').data("seleccionado");
		var bandera = "verdadero";
		if(alternativa_a == "verdadero"){i=22}else{i=7};

		while(j<=i){
			if($("#"+j+"").data("marcado")==null){	
				$("#"+j+" > .enunciado").css("color","red");
				bandera = "falso";
			}else{
				$("#"+j+" > .enunciado").css("color","black");
			}
			
			if(j==7){
				if(alternativa_a == "verdadero"){
					if($("#7-1").data("marcado")==null ){
						$("#7-1 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#7-1 .enunciado").css("color","black");
					}
				}

				if(alternativa_b == "verdadero"){
					if($("#7-2").data("marcado")==null ){
						$("#7-2 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#7-2 .enunciado").css("color","black");
					}
				}
				
				if($('#7-1 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero"){
					if($("#7-1-1").data("marcado")==null ){
						$("#7-1-1 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#7-1-1 .enunciado").css("color","black");
					}
				}
			}

			if(j==8 && $('#8 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero"){
				if($("#8-1").data("marcado")==null ){
					$("#8-1 .enunciado").css("color","red");
					bandera = "falso";
				}else{
					$("#8-1 .enunciado").css("color","black");
				}
			}

			if(j==9 && $('#9 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero"){
				if($("#9-1").data("marcado")==null ){
					$("#9-1 .enunciado").css("color","red");
					bandera = "falso";
				}else{
					$("#9-1 .enunciado").css("color","black");
				}
			}

			if(j==10){
				if($('#10 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero"){
					if($("#10-1").data("marcado")==null ){
						$("#10-1 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#10-1 .enunciado").css("color","black");
					}
				}
				if($('#10 .alternativas li[data-indice=b]').data("seleccionado") == "verdadero"){
					if($("#10-2").data("marcado")==null ){
						$("#10-2 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#10-2 .enunciado").css("color","black");
					}
				}
				if($('#10-1 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero" || $('#10-1 .alternativas li[data-indice=b]').data("seleccionado") == "verdadero"){
					if($("#10-1-1").data("marcado")==null ){
						$("#10-1-1 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#10-1-1 .enunciado").css("color","black");
					}
				}
				if($('#10-1 .alternativas li[data-indice=c]').data("seleccionado") == "verdadero"){
					if($("#10-1-2").data("marcado")==null ){
						$("#10-1-2 .enunciado").css("color","red");
						bandera = "falso";
					}else{
						$("#10-1-2 .enunciado").css("color","black");
					}
				}
			}
			j++;
		}
		
		if(bandera == "verdadero"){
			console.log("todo");
		}else{
			console.log("Faltan preguntas por responder");
		}
	});
});

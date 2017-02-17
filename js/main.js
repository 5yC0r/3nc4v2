$(document).ready(function () { 
 	
	$('#preguntas-titulado').hide(); //desde el inicio ocultamos las preguntas 8 en adelante

	/*Eventos para la pregunta 7 y subpreguntas*/
	$('#contenedor-global #7 .alternativas-simple-compuesta li').click(function(){
		var alternativa = $(this).data("indice");
		console.log(alternativa);
		if(alternativa == 'a'){
			$('#preguntas-titulado').show();
		}else{
			$('#preguntas-titulado').hide();	//ocultamos la preguntas dentro de #preguntas-titulado

			//luego de ocultar estas preguntas aparte de no contar para guardar en la bd se debe 
			
			$('#preguntas-titulado .pregunta-alternativa-simple, #preguntas-titulado .pregunta-respuesta-tipeada, #preguntas-titulado .pregunta-adicional-tipeada, #preguntas-titulado .pregunta-alternativa-multiple-1,#preguntas-titulado .pregunta-alternativa-multiple, #preguntas-titulado .pregunta-compuesta,#preguntas-titulado .pregunta-adicional-alternativa-simple-1, #preguntas-titulado .pregunta-adicional-alternativa-simple-2').each(function(){
				$(this).removeAttr("data-marcado");
				$(this).removeData("marcado");
			});

			$('#preguntas-titulado li').each(function(){
				$(this).removeAttr("seleccionado");
				$(this).removeData("seleccionado");
				$(this).css('color','black');
			});

			$('#preguntas-titulado input').each(function(){
				$(this).val('');
			});

			$('#select-departamentos').val(0);
			$('#select-departamentos').change();
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

	$('.pregunta-alternativa-simple-1 .alternativas li').click(function(){
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
	/*Fin de Eventos para la pregunta 7 y subpreguntas*/

	/*Eventos para la pregunta 8 y 8-1*/
	$('#contenedor-global .pregunta-compuesta .alternativas-8 li').click(function(){
		
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		$("#"+numeroPregunta+" .alternativas-8 li[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).removeAttr("seleccionado");								
			$(this).removeData("seleccionado");
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");
		adicional_alternativa_multiple(alternativa);
	});

	function adicional_alternativa_multiple(alternativa){
		$(".pregunta-adicional-alternativa-multiple").each(function(){
			var subordinante = $(this).data("head");
			if(alternativa == subordinante){
				$(this).show();
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');
				console.log(numeroPreguntaAdicional);
				$("#"+numeroPreguntaAdicional+" .grupo-alternativas-pregunta-multiple li[data-pregunta="+numeroPreguntaAdicional+"]").each(function(){ 		
					$(this).removeAttr("seleccionado");	
					$(this).removeData("seleccionado");					
					$(this).css("color","black");				
				});
				$(this).hide();
				$("#"+numeroPreguntaAdicional+"").removeAttr("data-marcado");
				$("#"+numeroPreguntaAdicional+"").removeData("marcado");
			}
		});
	}

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
			$(this).removeAttr("seleccionado");
			$(this).removeData("seleccionado");
			$(this).css('color','black');
		}
	});
	/* Fin de eventos para la preguntas 8 y 8-1 */

	/* Eventos para la pregunta 9 y 9-1 */
	$('#contenedor-global .pregunta-compuesta .alternativas-9 li').click(function(){
		
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		$("#"+numeroPregunta+" .alternativas-9 li[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).removeAttr("seleccionado");								
			$(this).removeData("seleccionado");
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");
		adicional_pregunta_tipeada(alternativa);
	});

	function adicional_pregunta_tipeada(alternativa){
		$(".pregunta-adicional-tipeada").each(function(){ 		
			var adicional = $(this).data("head");
			if(alternativa == adicional){
				var numeroPreguntaAdicional = $(this).attr('id');								
				$("#"+numeroPreguntaAdicional+" .respuesta-tipeada input").each(function(){ 		
					$(this).val("");	//valor vacio para la caja de texto al mostrarse									
				});
				$(this).show();
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');
				$(this).removeAttr('data-marcado');
				$(this).removeData('marcado');
				$("#"+numeroPreguntaAdicional+" .respuesta-tipeada input").each(function(){ 		
					$(this).val("");	//valor vacio para la caja de texto al ocultarse
				});
				$(this).hide();
			}
		});
	}
	/* Fin de eventos para la preguntas 9 y 9-1 */

	/* Eventos para la pregunta 13, 14, 15 y 16 */
	$('#contenedor-global .pregunta-compuesta .alternativas-13 li').click(function(){
		
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .enunciado").css("color","black");	
		$("#"+numeroPregunta+" .alternativas-13 li[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).removeAttr("seleccionado");								
			$(this).removeData("seleccionado");
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");
		adicional_alternativa_simple(alternativa);
	});	

	function adicional_alternativa_simple(alternativa){
		$(".pregunta-adicional-alternativa-simple-1").each(function(){
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
	}

	$('#contenedor-global  .pregunta-adicional-alternativa-simple-1 .alternativas li').click(function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		$("#"+numeroPregunta+" .alternativas  li").each(function(){ 	
			$(this).removeAttr("seleccionado");			//se cambia de color las alternativas	
			$(this).removeData("seleccionad");					
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("seleccionado","verdadero"); 		// se cambia atributo data-seleccionado -> true
		$(this).data("seleccionado","verdadero");

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");
		$("#"+numeroPregunta+"").data("marcado","marcado");
		$("#"+numeroPregunta+" .enunciado").css("color","black");
	});
	/* Fin de eventos para la pregunta 13, 14, 15 y 16 */

	/*Inicio Evento para preguntas de alternativa simple -> 1 | 2 | 4 | 5 | 6 | 11 | 12 | 17 | 20 | 21 | 22*/
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
	/* Fin Evento para preguntas de alternativa simple -> 1 | 2 | 4 | 5 | 6 | 11 | 12 | 17 | 20 | 21 | 22 */  

	/* Evento para las preguntas 18 y 19 */
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
	/*Fin de evento para las preguntas 18 y 19 */

	/* Inicio Evento para preguntas de alternativa multiple -> 3 | 10*/
	$('#contenedor-global .pregunta-alternativa-multiple .alternativas li, #contenedor-global .pregunta-alternativa-multiple-1 .alternativas li').on( "click",function(){
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
				$("#"+subpregunta+" .alternativas li").each(function(){
					var subsubpregunta = $(this).data('subpregunta');
					if(subsubpregunta != null){
						$("#"+subsubpregunta+"").removeAttr('data-marcado');
						$("#"+subsubpregunta+"").removeData('data-marcado');
						$("#"+subsubpregunta+" li").each(function(){
							$(this).removeAttr("seleccionado");
							$(this).removeData("seleccionado");
							$(this).css("color","black");
						})
						$("#"+subsubpregunta+"").hide();
					}
				});
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
	
	$('#contenedor-global .pregunta-alternativa-simple-2 .alternativas li').on("click",function(){
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

	/* Fin Evento para preguntas de alternativa multiple -> 3 | 10*/

	$('#boton-guardar-respuestas').click(function(){
		//para guardar preguntas de alternativa simple
		var bandera = verificarPreguntasRespondidas();
		if(bandera == "falso"){
			alert("Aun hay preguntas sin responder. (Marcadas de rojo)");
		}else{
			$('li[seleccionado=verdadero]').each(function(){
				var numeroPregunta = $(this).data("pregunta");
				var respuesta = $(this).data("indice");
				//console.log(numeroPregunta + " > " + respuesta);
				var parametros ={
					"indice": 0,
					"pregunta" : numeroPregunta,
					"respuesta" : respuesta
				}
				$.ajax({
		                data:  parametros,
		                url:   'controlador/Controlador.php',
		                type:  'post',
		                beforeSend: function () {
		                        $("#resultado").html("Procesando, espere por favor...");
		                },
		                success:  function () {
		                        $("#resultado").html("Sus respuestas han sido ingresadas y registradas, gracias por participar de nuestra encuesta.");
		                }
		        });
			});
			//para guardar preguntas tipo select
			$('select').each(function(){
				var numeroPregunta = $(this).data("pregunta");
				var respuesta = $(this).val();
				if(respuesta != 0){
					//console.log(numeroPregunta + " > " + respuesta);
					var parametros ={
						"indice": 0,
						"pregunta" : numeroPregunta,
						"respuesta" : respuesta
					}
					$.ajax({
			                data:  parametros,
			                url:   'controlador/Controlador.php',
			                type:  'post',
			                beforeSend: function () {
			                        $("#resultado").html("Procesando, espere por favor...");
			                },
			                success:  function () {
			                        $("#resultado").html("Sus respuestas han sido ingresadas y registradas, gracias por participar de nuestra encuesta.");
			                }
			        });
				}
			});
			//para guardar preguntas tipo input
			$('input').each(function(){
				var numeroPregunta = $(this).data("pregunta");
				var respuesta = $(this).val();
				if(respuesta != ""){
					//console.log(numeroPregunta + " -> " + respuesta);
					var parametros ={
						"indice": 1,
						"pregunta" : numeroPregunta,
						"respuesta" : respuesta
					}
					$.ajax({
			                data:  parametros,
			                url:   'controlador/Controlador.php',
			                type:  'post',
			                beforeSend: function () {
			                        $("#resultado").html("Procesando, espere por favor...");
			                },
			                success:  function () {
			                        $("#resultado").html("Sus respuestas han sido ingresadas y registradas, gracias por participar de nuestra encuesta.");
			                }
			        });
				}
			});
		}
	});

	$('#derecha').click(function(){
		$('#datos-personales').hide();
		$('#preguntas').show();
		$('#izquierda').css("border-bottom","5px solid #e1b3b3");
		$('#derecha').css("border-bottom","5px solid #dd6061");
		
	});

	$('#izquierda').click(function(){
		$('#preguntas').hide();
		$('#datos-personales').show();
		$('#derecha').css("border-bottom","5px solid #e1b3b3");
		$('#izquierda').css("border-bottom","5px solid #dd6061");
	});

	/* Eventos para la ventana consultas*/
	$('#selectPrincipal').val(0);
	$('#selectSecundario').empty();
	$('#selectSecundario').append("<option value=''>Seleccione</option>");
	var anioEgreso = 	"<option value=''>Seleccione</option>"+
						"<option value='2017'>2017</option>"+
						"<option value='2016'>2016</option>"+
						"<option value='2015'>2015</option>"+
						"<option value='2014'>2014</option>"+
						"<option value='2013'>2013</option>"+
						"<option value='2012'>2012</option>"+
						"<option value='2011'>2011</option>"+
						"<option value='2010'>2010</option>"+
						"<option value='2009'>2009</option>"+
						"<option value='2008'>2008</option>"+
						"<option value='2007'>2007</option>"+
						"<option value='2006'>2006</option>"+
						"<option value='2005'>2005</option>"+
						"<option value='2004'>2004</option>"+
						"<option value='2003'>2003</option>"+
						"<option value='2002'>2002</option>"+
						"<option value='2001'>2001</option>"+
						"<option value='2000'>2000</option>"+
						"<option value='1999'>1999</option>";
	var estadoCivil = "<option value=''>Seleccione</option><option value='soltero'>Soltero(a)</option><option value='casado'>Casado(a)</option>";
	var regionProcedencia = "<option value=''>Seleccione</option><option value='costa'>Costa</option><option value='selva'>Selva</option><option value='sierra'>Sierra</option>";
	var opcionSexo = "<option value=''>Seleccione</option><option value='masculino'>Masculino</option><option value='femenino'>Femenino</option>";
	$('#selectPrincipal').change(function(){
		var opcionSeleccionada = $('#selectPrincipal').val();
		if(opcionSeleccionada == 1){
			$('#selectSecundario').empty();
			$('#selectSecundario').append(anioEgreso);
			$('#selectSecundario').removeAttr('disabled');
		}else{
			if(opcionSeleccionada == 2){
				$('#selectSecundario').empty();
				$('#selectSecundario').append(estadoCivil);
				$('#selectSecundario').removeAttr('disabled');
			}else{
				if(opcionSeleccionada == 3){
					$('#selectSecundario').empty();
					$('#selectSecundario').append(regionProcedencia);
					$('#selectSecundario').removeAttr('disabled');
				}else{
					if(opcionSeleccionada == 4){

					}else{
						if(opcionSeleccionada == 5){
							$('#selectSecundario').empty();
							$('#selectSecundario').append(opcionSexo);
							$('#selectSecundario').removeAttr('disabled');
						}else{
							$('#selectSecundario').empty();
							$('#selectSecundario').append("<option value=''>Seleccione</option>");
							$('#selectSecundario').attr('disabled', 'disabled');
						}
					}
				}
			}
		}
	});
	$('#selectPrincipal').change(function(){
		if ($(this).val()==6) {
			var parametros = {"indice": 4};
			$.ajax({
	            data: parametros,
	            url : '../controlador/Controlador.php',
	            type : 'post',
	            success:  function (response) {
					var datos = $.parseJSON(response); 
					console.log(datos);
					var numeroFilas = datos.length;
					var contenedorTabla = $('#contenedor-tabla');
					contenedorTabla.html("<table align='center' id='tabla-alumnos' class='display'>"+
					"<thead>"+
						"<tr>"+
					        "<th>Codigo Usuario</th>"+
							"<th>Nombre(s) Usuario</th>"+
							"<th>Apellidos Usuario</th>"+
							"<th>Seleccione</th>"+
						"</tr>"+
					"</thead>"+
					"</tfoot>"+
					"<tbody id='cuerpoTabla'></tbody>"+
					"</table>");

					var cuerpoTabla = $('#cuerpoTabla');
					for (var i = 0; i < numeroFilas; i++) {
					    cuerpoTabla.append('<tr><td>'+datos[i].dniAlumno+'</td><td>'+datos[i].nombres+'</td><td>'+datos[i].apellidos+'</td><td><button class=boton-ver onclick= prueba('+datos[i].dniAlumno+')>Ver detalle</button></td></tr>');
					}      
					$('#tabla-alumnos').DataTable( {
				        "scrollY":        "200px",
				        "scrollCollapse": true,
				        "paging":         false,
				    } ); 
	            }
	        });
		}
	});

	$('#selectSecundario').change(function(){
		var contenedorTabla = $('#contedor-tabla-consultas');
		var valSelectPrincipal = $('#selectPrincipal').val();
	    var valSelectSecundario = $('#selectSecundario').val();

	    switch(valSelectPrincipal){
	    	case "1":
	    		var parametros = {"indice": 9,"anioEgreso": valSelectSecundario};
	    		break;
	    	case "2":
	    		var parametros = {"indice": 8,"estadoCivil": valSelectSecundario};
	    		break;
	    	case "3":
	    		var parametros = {"indice": 10,"regionProcedencia": valSelectSecundario};
	    		break;
	    	case "5":
	    		var parametros = {"indice": 7,"sexo": valSelectSecundario};
	    		break;
	    }
	    console.log(parametros);
	    $.ajax({
            data: parametros,
            url : '../controlador/Controlador.php',
            type : 'post',
            success:  function (response) {
				var datos = $.parseJSON(response); 
				console.log(datos);
				var numeroFilas = datos.length;
				var contenedorTabla = $('#contenedor-tabla');
				contenedorTabla.html("<table align='center' id='tabla-alumnos' class='display'>"+
				"<thead>"+
					"<tr>"+
				        "<th>Codigo Usuario</th>"+
						"<th>Nombre(s) Usuario</th>"+
						"<th>Apellidos Usuario</th>"+
						"<th>Seleccione</th>"+
					"</tr>"+
				"</thead>"+
				"</tfoot>"+
				"<tbody id='cuerpoTabla'></tbody>"+
				"</table>");

				var cuerpoTabla = $('#cuerpoTabla');
				for (var i = 0; i < numeroFilas; i++) {
				    cuerpoTabla.append('<tr><td>'+datos[i].dniAlumno+'</td><td>'+datos[i].nombres+'</td><td>'+datos[i].apellidos+'</td><td><button class=boton-ver onclick= prueba('+datos[i].dniAlumno+')>Ver detalle</button></td></tr>');
				}      
				$('#tabla-alumnos').DataTable( {
			        "scrollY":        "200px",
			        "scrollCollapse": true,
			        "paging":         false,
			    } ); 
            }
        });
	});
});

function verificarPreguntasRespondidas(){
	var j = 1;
	var alternativa_a = $('#7 .alternativas-simple-compuesta li[data-indice=a]').data("seleccionado");
	var alternativa_b = $('#7 .alternativas-simple-compuesta li[data-indice=b]').data("seleccionado");
	var bandera = "verdadero";
	if(alternativa_a == "verdadero"){i=22}else{i=7};

	while(j<=i){
		if($("#"+j+"").data("marcado")==null && j!= 14 && j != 15  && j != 16 ){	
			$("#"+j+" > .enunciado").css("color","red");
			console.log("<-> "+j);
			bandera = "falso";
		}else{
			$("#"+j+" > .enunciado").css("color","black");
		}
		
		if(j==7){
			if(alternativa_a == "verdadero"){
				if($("#7-1").data("marcado")==null ){
					$("#7-1 .enunciado").css("color","red");
					console.log("-> 7-1");
					bandera = "falso";
				}else{
					$("#7-1 .enunciado").css("color","black");
				}
			}

			if(alternativa_b == "verdadero"){
				if($("#7-2").data("marcado")==null ){
					$("#7-2 .enunciado").css("color","red");
					console.log("-> 7-2");
					bandera = "falso";
				}else{
					$("#7-2 .enunciado").css("color","black");
				}
			}
			
			if($('#7-1 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero"){
				if($("#7-1-1").data("marcado")==null ){
					$("#7-1-1 .enunciado").css("color","red");
					console.log("-> 7-1-1");
					bandera = "falso";
				}else{
					$("#7-1-1 .enunciado").css("color","black");
				}
			}
		}

		if(j==8 && $('#8 .alternativas-8 li[data-indice=a]').data("seleccionado") == "verdadero"){
			if($("#8-1").data("marcado")==null ){
				$("#8-1 .enunciado").css("color","red");
				console.log("-> 8-1");
				bandera = "falso";
			}else{
				$("#8-1 .enunciado").css("color","black");
			}
		}

		if(j==9 && $('#9 .alternativas-9 li[data-indice=b]').data("seleccionado") == "verdadero"){
			if($("#9-1").data("marcado")==null ){
				$("#9-1 .enunciado").css("color","red");
				console.log("-> 9-1");
				bandera = "falso";
			}else{
				$("#9-1 .enunciado").css("color","black");
			}
		}

		if(j==10){
			if($('#10 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero"){
				if($("#10-1").data("marcado")==null ){
					$("#10-1 .enunciado").css("color","red");
					console.log("-> 10-1");
					bandera = "falso";
				}else{
					$("#10-1 .enunciado").css("color","black");
				}
			}
			if($('#10 .alternativas li[data-indice=b]').data("seleccionado") == "verdadero"){
				if($("#10-2").data("marcado")==null ){
					$("#10-2 .enunciado").css("color","red");
					console.log("-> 10-2");
					bandera = "falso";
				}else{
					$("#10-2 .enunciado").css("color","black");
				}
			}
			if($('#10-1 .alternativas li[data-indice=a]').data("seleccionado") == "verdadero" || $('#10-1 .alternativas li[data-indice=b]').data("seleccionado") == "verdadero"){
				if($("#10-1-1").data("marcado")==null ){
					$("#10-1-1 .enunciado").css("color","red");
					console.log("-> 10-1-1");
					bandera = "falso";
				}else{
					$("#10-1-1 .enunciado").css("color","black");
				}
			}
			if($('#10-1 .alternativas li[data-indice=c]').data("seleccionado") == "verdadero"){
				if($("#10-1-2").data("marcado")==null ){
					$("#10-1-2 .enunciado").css("color","red");
					console.log("-> 10-1-2");
					bandera = "falso";
				}else{
					$("#10-1-2 .enunciado").css("color","black");
				}
			}
		}
		if(j==13){
			if($('#13 .alternativas-13 li[data-indice=a]').data("seleccionado") == "verdadero" || $('#13 .alternativas-13 li[data-indice=b]').data("seleccionado") == "verdadero" || $('#13 .alternativas-13 li[data-indice=c]').data("seleccionado") == "verdadero" || $('#13 .alternativas-13 li[data-indice=d]').data("seleccionado") == "verdadero"){
				if($("#14").data("marcado")==null ){
					$("#14 .enunciado").css("color","red");
					console.log("-> 14");
					bandera = "falso";
				}else{
					$("#14 .enunciado").css("color","black");
				}

				if($("#15").data("marcado")==null ){
					$("#15 .enunciado").css("color","red");
					console.log("-> 15");
					bandera = "falso";
				}else{
					$("#15 .enunciado").css("color","black");
				}
			}

			if($('#13 .alternativas-13 li[data-indice=e]').data("seleccionado") == "verdadero"){
				if($("#16").data("marcado")==null ){
					$("#16 .enunciado").css("color","red");
					console.log("-> 16");
					bandera = "falso";
				}else{
					$("#16 .enunciado").css("color","black");
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
	return bandera;
}

function prueba(dniAlumno) {
	//console.log(dniAlumno);
	$('#resultado').show();
	$('#resultado li').each(function(){ 	//se asignan atributo data-seleccionado a cada una de las alternativas -> false
		$(this).removeData("seleccionado");
		$(this).removeAttr("seleccionado");
		$(this).css("color","black");
	});

	$('#resultado input').each(function(){		//se asigna valor "" (vacio) a cada input
		$(this).val("")
	});

	$('#select-departamentos').val(0);			//para el elemento select

	var parametros = {
		"indice" : 2,
		"dniAlumno" : dniAlumno
		};
		$.ajax({
                data:  parametros,
                url:   '../controlador/Controlador.php',
                type:  'post',
                success:  function (response) {
    				var datos = $.parseJSON(response); 
               		console.log(datos);
               		var numeroFilas = datos.length;
               		for (var i = 0; i < numeroFilas; i++) {
               			if(datos[i].numeroPregunta == 7 && datos[i].respuestaPregunta == 'a'){
               				$('#preguntas-titulado').show();
               			}
               			if(datos[i].numeroPregunta == '7-1-1'){
               				$('#select-departamentos').val(datos[i].respuestaPregunta);
               				$('#select-departamentos').attr('disabled','disabled');

               			}
               			$("#"+datos[i].numeroPregunta+"").show();	//mostramos las respuestas, si es que hay alguna que originalmente esta oculta
               			$("#"+datos[i].numeroPregunta+" ul li[data-indice="+datos[i].respuestaPregunta+"][data-pregunta="+datos[i].numeroPregunta+"]").css('color','red');
               		}
                }
        });
    var parametrosrt = {
    	"indice":3,
    	"dniAlumno" : dniAlumno
    	};
    	$.ajax({
    		data:  parametrosrt,
            url:   '../controlador/Controlador.php',
            type:  'post',
            success: function(response){
            	var datos = $.parseJSON(response);
            	console.log(datos);
            	var numeroFilas = datos.length;
            	for (var i = 0; i < numeroFilas; i++) {
            		$("#"+datos[i].numeroPregunta+"").show();
            		$("#"+datos[i].numeroPregunta+" .respuesta-tipeada input").val(datos[i].respuestaPregunta);
            		$("#"+datos[i].numeroPregunta+" .respuesta-tipeada input").attr('disabled','disabled');
            	}
            }
    	});
    var parametrosAlumno = {
    	"indice" : 5,
    	"dniAlumno" : dniAlumno
    	};
    	$.ajax({
    		data: parametrosAlumno,
    		url:   '../controlador/Controlador.php',
            type:  'post',
            success: function(response){
            	var datos = $.parseJSON(response);
            	//var datos = response;
            	console.log(datos);
            	//var numeroFilas = datos.length;
            	/*for (var i = 0; i < numeroFilas; i++) {
            		$("#"+datos[i].numeroPregunta+" .respuesta-tipeada input").val(datos[i].respuestaPregunta);
            	}*/
            	$('#datos-personales #dniAlumno').html(datos.dniAlumno);
            	$('#datos-personales #nombres').html(datos.nombres);
            	$('#datos-personales #apellidos').html(datos.apellidos);
            	$('#datos-personales #fechaNacimiento').html(datos.fechaNacimiento);
            	$('#datos-personales #estadoCivil').html(datos.estadoCivil);
            	$('#datos-personales #regionProcedencia').html(datos.regionProcedencia);
            	$('#datos-personales #sexo').html(datos.sexo);
            	$('#datos-personales #direccion').html(datos.direccion);
            	$('#datos-personales #anioEgreso').html(datos.anioEgreso);
            	$('#datos-personales #telefono').html(datos.telefono);
            	$('#datos-personales #correoElectronico').html(datos.correoElectronico);
            }
    	});
}




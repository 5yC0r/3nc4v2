<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Encuesta Estomatología</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="css/main.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="js/main.js"></script>
</head>
<body>
	<div id="cuadrado"></div>
	<div id="contenedor-global">
		<h1>Bienvenido</h1>
		<p>Instrucciones: A continuación se le presenta un conjunto de preguntas, algunas son de respuesta única, otras de respuesta múltiple y otras donde tendrá que digitar la respuesta usted mismo. Al finalizar todas las preguntas, solo de click al botón del final y sus respuestas serán registradas y almacenadas en nuestra base de datos.</p>
		<?php
			include ('vista/preguntas.php'); 
		?>
		<button type="button" class="btn btn-primary btn-lg" id="boton-guardar-respuestas">
			Guardar Respuestas
		</button>

		<div id="resultado">
		</div>

		<!-- Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div style="background-color: #990100;color: white" class="modal-header">
						<button style="color: white;" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 style="text-align: center;" class="modal-title" id="myModalLabel">Mensaje de Administrador.</h4>
					</div>
					<div class="modal-body">
						<div style="text-align: center; margin-bottom: 10px; font-weight: 700">¿Está seguro de sus respuestas?</div>
						<div style="margin-bottom: 10px;text-align: justify;">Si acepta, esta ventana se cerrará y la encuesta terminará; si desea cambiar alguna(s) respuesta(s), presione el botón "Cancelar" y corriga su(s) respuesta(s). Luego presione nuevamente el botón "Guardar Respuestas" en la ventana anterior y finalmente "Aceptar" en esta.</div>
						<div><label style="font-weight: 700" for="">Nota: </label> Asegúrese de haber respondido todas las preguntas antes de dar por finalizada la encuesta.</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						<a href="cerrarSesion.php"><button style="background-color: #990100;border: 1px solid #990100" type="button" class="btn btn-primary" id="cerrar-session">Aceptar</button></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

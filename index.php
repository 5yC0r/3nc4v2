<?php
	session_start();
	$_SESSION['dniAlumno']=22222222;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Encuesta Estomatología</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
	
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="js/main.js"></script>
</head>
<body>
	<div id="cuadrado"></div>
	<div id="contenedor-global">
		<div id="contendor-titulo">
			<h1>Bienvenido</h1>
		</div>
		<div id="contenedor-instrucciones">
			<p>Instrucciones: A continuación se le presenta un conjunto de preguntas, algunas son de respuesta única, otras de respuesta múltiple y otras donde tendrá que digitar la respuesta usted mismo. Al finalizar todas las preguntas, solo de click al botón del final y sus respuestas serán registradas y almacenadas en nuestra base de datos.</p>
		</div>
		<div id="contenedor-preguntas">
			<?php
				include ('vista/preguntas.php'); 
			?>
			<button type="button" class="btn btn-primary btn-lg" id="boton-guardar-respuestas">
				Guardar Respuestas
			</button>
		</div>
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
						<div style="margin-bottom: 10px;text-align: justify;">Si acepta, esta ventana se cerrará y la encuesta terminará; si desea cambiar alguna(s) de su(s) respuesta(s), presione el botón "Cancelar" y corriga su(s) respuesta(s). Luego presione nuevamente el botón "Guardar Respuestas" en la ventana anterior y finalmente "Aceptar" en esta.</div>
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

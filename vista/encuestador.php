<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ventana Administrador</title>

	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="css/main.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="js/main.js"></script>
</head>
<body>
	<div id="listado-alumnos">
		<div id="instrucciones">
			<p>Esta es la lista de las personas que han respondido la encuesta. Darle click al botón "Ver detalle" en la misma fila del nombre de la persona para ver información personal y sus respuestas.</p>
		</div>
		<div id="boton-listado-alumnos">
			<button id="botonListar">Ver listado</button>
		</div>
		<div id="contenedor-tabla"></div>
		<div class="" id="resultado">			
			<div id="encabezado">
				<div id="izquierda">
					<label for="">Datos Personales</label>
				</div>
				<div id="derecha">
					<label for="">Lista de preguntas</label>
				</div>
			</div>
			<div id="cuerpo">
				<div id="preguntas">
					<h2>Listado de preguntas</h2>
					<?php
						include ('vista/preguntas.php'); 
					?>
				</div>
				<div id="datos-personales">
					<label for="">Dni Alumno: </label><label for="" id="dniAlumno"></label><br>
					<label for="">Nombes Alumno: </label><label for="" id="nombres"></label><br>
					<label for="">Apellidos Alumno: </label><label for="" id="apellidos"></label><br>
					<label for="">Fecha Nacimiento: </label><label for="" id="fechaNacimiento"></label><br>
					<label for="">Estado Civil: </label><label for="" id="estadoCivil"></label><br>
					<label for="">Región de Procedencia: </label><label for="" id="regionProcedencia"></label><br>
					<label for="">Sexo: </label><label for="" id="sexo"></label><br>
					<label for="">Direccioón: </label><label for="" id="direccion"></label><br>
					<label for="">Año Egreso: </label><label for="" id="anioEgreso"></label><br>
					<label for="">Teléfono: </label><label for="" id="telefono"></label><br>
					<label for="">Correo Electrónico: </label><label for="" id="correoElectronico"></label><br>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
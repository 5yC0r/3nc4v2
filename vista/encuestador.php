<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ventana Administrador</title>
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../css/jquery.dataTables.css">
	<link rel="stylesheet" href="../css/main.css">
	
	<script src="../js/jquery.min.js"></script>
	<script type="text/javascript" charset="utf8" src="../js/jquery.dataTables.js"></script>
	<script src="../js/main.js"></script>
	
</head>
<body>
	<div id="listado-alumnos">
		<div id="cerrar-sesion">
			<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
			<a href="../cerrarSesion.php"><label for="">Cerrar Sesión</label></a>
		</div>
		<div id="instrucciones">
			<p>Esta es la lista de las personas que han respondido la encuesta. Darle click al botón "Ver detalle" en la misma fila del nombre de la persona para ver información personal y sus respuestas.</p>
		</div>
		<!--<div id="boton-listado-alumnos">
			<button id="botonListar">Ver listado</button>
		</div>-->
		<div id="opciones">
			<label for="">Ver resultados por: </label>
			<select name="" id="selectPrincipal">
				<option value="0">Seleccione</option>
				<option value="1">Año Egreso</option>
				<option value="2">Estado Civil</option>
				<option value="3">Región Procedencia</option>
				<option value="4">Región Residencia</option>
				<option value="5">Sexo</option>
				<option value="6">Todo</option>
			</select>
			<select name="" id="selectSecundario"></select>
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
						include ('preguntas.php'); 
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
					<label for="">Dirección: </label><label for="" id="direccion"></label><br>
					<label for="">Año Egreso: </label><label for="" id="anioEgreso"></label><br>
					<label for="">Teléfono: </label><label for="" id="telefono"></label><br>
					<label for="">Correo Electrónico: </label><label for="" id="correoElectronico"></label><br>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
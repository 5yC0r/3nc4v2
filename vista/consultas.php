<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Administador - Filtrado de datos</title>
	<link rel="stylesheet" type="text/css" href="../css/jquery.dataTables.css">
	<link rel="stylesheet" href="../css/main.css">

	<script src="../js/jquery.min.js"></script>
	<script type="text/javascript" charset="utf8" src="../js/jquery.dataTables.js"></script>
	<script src="../js/main.js"></script>
</head>
<body>
	<div id="contendor-consultas">
		<p style="text-align: center">Seleccione la opción que desee para poder ver la lista de alumnos que han respondido la encuesta según la opción elegida.</p>
		<div id="opciones">
			<select name="" id="selectPrincipal">
				<option value="0">Seleccione</option>
				<option value="1">Año Egreso</option>
				<option value="2">Estado Civil</option>
				<option value="3">Región Procedencia</option>
				<option value="4">Región Residencia</option>
				<option value="5">Sexo</option>
			</select>
			<select name="" id="selectSecundario"></select>
		</div>
		<div id="contedor-tabla-consultas">
			
		</div>
	</div>
</body>
</html>
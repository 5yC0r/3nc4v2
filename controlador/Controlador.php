<?php
	
	$indice = $_POST["indice"];

	if($indice == 0){
		//regitrar respuestas en la base de datos
		session_start();
		include 'ControladorPregunta.php';
		$numeroPregunta = $_POST["pregunta"];
	    $respuestaPregunta = $_POST["respuesta"];
	    $dniAlumno = $_SESSION['dniAlumno'];
	    $controladorPregunta = new ControladorPregunta();
	    $r = $controladorPregunta->crear($numeroPregunta,$respuestaPregunta,$dniAlumno);
	    //echo $numeroPregunta."+".$respuestaPregunta;
	}else{
		if($indice == 1){
			session_start();
			include 'ControladorPregunta.php';
			$numeroPregunta = $_POST["pregunta"];
		    $respuestaPregunta = $_POST["respuesta"];
		    $dniAlumno = $_SESSION['dniAlumno'];
		    $controladorPregunta = new ControladorPregunta();
	    	$r = $controladorPregunta->crearpt($numeroPregunta,$respuestaPregunta,$dniAlumno);
		}else{
			if($indice == 2){
				//traer respuestas de la base de datos (preguntas con alernativa)
				session_start();
				include 'ControladorPregunta.php';
				$controladorPregunta = new ControladorPregunta();
				$dniAlumno = $_POST["dniAlumno"];
				$resultado = $controladorPregunta->listar($dniAlumno);
				$filas = array();
				$i=0;
				while($r = mysqli_fetch_assoc($resultado)){
					$filas[$i] = $r;
					$i++;
				}
				echo json_encode($filas);
			}else{
				if($indice == 3){
					//traer respuestas de la base de datos (preguntas tipeadas)
					session_start();
					include 'ControladorPregunta.php';
					$controladorPregunta = new ControladorPregunta();
					$dniAlumno = $_POST["dniAlumno"];
					$resultado = $controladorPregunta->listarpt($dniAlumno);
					$filas = array();
					$i=0;
					while($r = mysqli_fetch_assoc($resultado)){
						$filas[$i] = $r;
						$i++;
					}
					echo json_encode($filas);
				}
				else{
					if($indice == 4){
						//traer lista usuarios de la base de datos
						session_start();
						include 'ControladorAlumno.php';
						$controladorAlumno = new ControladorAlumno();
						$resultado = $controladorAlumno->listar();
						$filas = array();
						$i=0;
						while($r = mysqli_fetch_assoc($resultado)){
							$filas[$i] = $r;
							$i++;
						}
						echo json_encode($filas);
					}else{
						if($indice == 5){
							//traer datos de alumno
							session_start();
							include 'ControladorAlumno.php';
							$controladorAlumno = new ControladorAlumno();
							$dniAlumno = $_POST["dniAlumno"];
							$resultado = $controladorAlumno->ver($dniAlumno);
							/*$filas = array();
							$i=0;
							while($r = mysqli_fetch_assoc($resultado)){
								$filas[$i] = $r;
								$i++;
							}*/
							echo json_encode($resultado);
						}/*else{
							if($indice == 6){
								session_start();
								session_destroy();//Destruimos la sesion
							}
						}*/
					}
				}
			}
		}
	}
?>
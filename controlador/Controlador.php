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
						}else{
							if($indice == 6){
								//actualizar atributo encuestaRespondida
								session_start();
								include 'ControladorCuenta.php';
								$controladorCuenta = new ControladorCuenta();
								$dniAlumno = $_SESSION['dniAlumno'];
								$resultado = $controladorCuenta->updateAttrEncuestaRespondida($dniAlumno);
							}else{
								if($indice == 7){
									//listar alumnos por atributo sexo
									session_start();
									include 'ControladorAlumno.php';
									$controladorAlumno = new ControladorAlumno();
									$sexo = $_POST["sexo"];
									$resultado = $controladorAlumno->listarPorSexo($sexo);
									$filas = array();
									$i=0;
									while($r = mysqli_fetch_assoc($resultado)){
										$filas[$i] = $r;
										$i++;
									}
									echo json_encode($filas);
								}else{
									if($indice ==8){
										//listar alumnos por atributo estado civil
										session_start();
										include 'ControladorAlumno.php';
										$controladorAlumno = new ControladorAlumno();
										$estadoCivil = $_POST["estadoCivil"];
										$resultado = $controladorAlumno->listarPorEstadoCivil($estadoCivil);
										$filas = array();
										$i=0;
										while($r = mysqli_fetch_assoc($resultado)){
											$filas[$i] = $r;
											$i++;
										}
										echo json_encode($filas);
									}else{
										if($indice == 9){
											//listar alumnos por año de egreso
											session_start();
											include 'ControladorAlumno.php';
											$controladorAlumno = new ControladorAlumno();
											$anioEgreso = $_POST["anioEgreso"];
											$resultado = $controladorAlumno->listarPorAnioEgreso($anioEgreso);
											$filas = array();
											$i=0;
											while($r = mysqli_fetch_assoc($resultado)){
												$filas[$i] = $r;
												$i++;
											}
											echo json_encode($filas);
										}else{
											if($indice == 10){
												//listar alumnos por region de procedencia
												session_start();
												include 'ControladorAlumno.php';
												$controladorAlumno = new ControladorAlumno();
												$regionProcedencia = $_POST["regionProcedencia"];
												$resultado = $controladorAlumno->listarPorRegionProcedencia($regionProcedencia);
												$filas = array();
												$i=0;
												while($r = mysqli_fetch_assoc($resultado)){
													$filas[$i] = $r;
													$i++;
												}
												echo json_encode($filas);
											}else{
												if($indice == 11){
													//listar alumnos por region de residencia
													session_start();
													include 'ControladorAlumno.php';
													$controladorAlumno = new ControladorAlumno();
													$regionResidencia = $_POST["regionResidencia"];
													$resultado = $controladorAlumno->listarPorRegionResidencia($regionResidencia);
													$filas = array();
													$i=0;
													while($r = mysqli_fetch_assoc($resultado)){
														$filas[$i] = $r;
														$i++;
													}
													echo json_encode($filas);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
?>
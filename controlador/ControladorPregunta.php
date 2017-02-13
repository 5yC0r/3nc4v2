<?php 

	include('../clases/Pregunta.php');

    class ControladorPregunta {
        
        private $pregunta;
        
        public function __construct() {
            $this->pregunta = new Pregunta();
        }
        
        public function crear($numeroPregunta, $respuestaPregunta, $dniAlumno){
        	$this->pregunta->set("numeroPregunta",$numeroPregunta);
        	$this->pregunta->set("respuestaPregunta",$respuestaPregunta);
            $this->pregunta->set("dniAlumno",$dniAlumno);

            $resultado = $this->pregunta->crear();
            return $resultado;
        }

        public function crearpt($numeroPregunta, $respuestaPregunta, $dniAlumno){
            $this->pregunta->set("numeroPregunta",$numeroPregunta);
            $this->pregunta->set("respuestaPregunta",$respuestaPregunta);
            $this->pregunta->set("dniAlumno",$dniAlumno);

            $resultado = $this->pregunta->crearpt();
            return $resultado;
        }

        public function listar($dniAlumno){
            $resultado = $this->pregunta->listar($dniAlumno);
            return $resultado;
        }

        public function listarpt($dniAlumno){
            $resultado = $this->pregunta->listarpt($dniAlumno);
            return $resultado;
        }
    }
?>
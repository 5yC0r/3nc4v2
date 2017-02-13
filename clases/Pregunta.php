<?php 
	
	include('../clases/Conexion.php');

	class Pregunta{
		//Atributos
		private $numeroPregunta;
		private $respuestaPregunta;

        private $dniAlumno;
 
		private $con;

		//Metodos
		public function __construct(){
			$this->con = new Conexion();
		}
		
		public function set($atributo, $contenido){
            $this->$atributo = $contenido;
        }

        public function get($atributo){
            return $this->$atributo;
        }

        public function crear(){
        	$sql = "INSERT INTO pregunta (numeroPregunta, respuestaPregunta, dniAlumno) VALUES ('{$this->numeroPregunta}','{$this->respuestaPregunta}','{$this->dniAlumno}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }

        public function crearpt(){
        	$sql = "INSERT INTO preguntart (numeroPregunta, respuestaPregunta, dniAlumno) VALUES ('{$this->numeroPregunta}','{$this->respuestaPregunta}', '{$this->dniAlumno}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }
        public function listar($dniAlumno){
            $sql = "SELECT * FROM pregunta WHERE dniAlumno ='".$dniAlumno."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
        public function listarpt($dniAlumno){
            $sql = "SELECT * FROM preguntart  WHERE dniAlumno ='".$dniAlumno."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
	}
?>
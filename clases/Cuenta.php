<?php
	include ('Conexion.php');

	class Cuenta{
		//Atributos
		private $usuario;
		private $password;
		private $encuestaRespondida;

		private $con;
		//Métodos
		public function __construct(){
			$this->con = new Conexion();
		}

		public function set($atributo, $contenido){
            $this->$atributo = $contenido;
        }

        public function get($atributo){
            return $this->$atributo;
        }

        public function updateAttrEncuestaRespondida($dniAlumno){
        	$sql = "UPDATE cuenta SET encuestaRespondida = 'si' WHERE password = '".$dniAlumno."'";
        	$this->con->consultaSimple($sql);
        	return true;
        }
	} 
?>
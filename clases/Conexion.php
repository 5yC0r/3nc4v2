<?php  
	class Conexion{
		//Atributos
		private $host;
		private $user;
		private $pass;
		private $bd;
		public $con;

		//Metodos
		public function __construct(){
			$this->host = "localhost";
			$this->user = "root";
			$this->pass = "";
			$this->bd = "encuestaunt";

			$this->con = mysqli_connect($this->host,$this->user,$this->pass,$this->bd);

		}

		public function consultaSimple($sql){
			$consulta = $this->con->query($sql);
		}

		public function consultaRetorno($sql){
			$consulta = $this->con->query($sql);
			return $consulta;
		}
	}
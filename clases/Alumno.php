<?php 
	include('../clases/Conexion.php');

	class Alumno{
		//Atributos
		private $dniAlumno;
		private $nombres;
		private $apellidos;
		private $fechaNacimiento;
		private $estadoCivil;
		private $regionProcedencia;
		private $sexo;
		private $direccion;
		private $anioEgreso;
		private $telefono;
		private $correoElectronico;

		private $con;

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
        	$sql = "INSERT INTO alumno (dniAlumno,nombres,apellidos,fechaNacimiento,estadoCivil,regionProcedencia,sexo,direccion,anioEgreso,telefono,correoElectronico) VALUES ('{$this->dniAlumno}','{$this->nombres}','{$this->apellidos}','{$this->fechaNacimiento}','{$this->estadoCivil}','{$this->regionProcedencia}','{$this->sexo}','{$this->direccion}','{$this->anioEgreso}','{$this->telefono}'),'{$this->correoElectronico}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }
        public function ver(){
			$sql = "SELECT * FROM alumno WHERE dniAlumno = '{$this->dniAlumno}'";
			$resultado = $this->con->consultaRetorno($sql);
			$row = mysqli_fetch_assoc($resultado);
			//set
			$this->dniAlumno = $row['dniAlumno'];
			$this->nombres = $row['nombres'];
			$this->apellidos = $row['apellidos'];
			$this->fechaNacimiento = $row['fechaNacimiento'];
			$this->estadoCivil = $row['estadoCivil'];
			$this->regionProcedencia = $row['regionProcedencia'];
			$this->sexo = $row['sexo'];
			$this->direccion = $row['direccion'];
			$this->anioEgreso = $row['anioEgreso'];
			$this->telefono = $row['telefono'];
			$this->correoElectronico = $row['correoElectronico'];
			return $row;
		}
        public function listar(){
        	$sql = "SELECT * FROM alumno";
        	$resultado = $this->con->consultaRetorno($sql);
        	return $resultado;
        }
        public function listarPorEstadoCivil($estadoCivil){
            $sql = "SELECT * FROM alumno  WHERE estadoCivil ='".$estadoCivil."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
        public function listarPorRegionProcedencia($regionProcedencia){
            $sql = "SELECT * FROM alumno  WHERE regionProcedencia ='".$regionProcedencia."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
        public function listarPorSexo($sexo){
            $sql = "SELECT * FROM alumno  WHERE sexo ='".$sexo."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
        public function listarPorRegionResidencia($regionResidencia){
            $sql = "SELECT * FROM alumno  WHERE regionResidencia ='".$regionResidencia."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
        public function listarPorAnioEgreso($anioEgreso){
            $sql = "SELECT * FROM alumno  WHERE anioEgreso ='".$anioEgreso."'";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
	}
 ?>
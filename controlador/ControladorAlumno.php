<?php 
	include('../clases/Alumno.php');

	class ControladorAlumno{

		private $alumno;
		
		public function __construct(){
			$this->alumno = new Alumno();
		}

		public function crear($dniAlumno,$nombres,$apellidos,$fechaNacimiento,$estadoCivil,$regionProcedencia,$sexo,$direccion,$anioEgreso,$telefono,$correoElectronico){
			$this->alumno->set("dniAlumno",$dniAlumno);
			$this->alumno->set("nombres",$nombres);
			$this->alumno->set("apellidos",$apellidos);
			$this->alumno->set("fechaNacimiento",$fechaNacimiento);
			$this->alumno->set("estadoCivil",$estadoCivil);
			$this->alumno->set("regionProcedencia",$regionProcedencia);
			$this->alumno->set("sexo",$sexo);
			$this->alumno->set("direccion",$direccion);
			$this->alumno->set("anioEgreso",$anioEgreso);
			$this->alumno->set("telefono",$telefono);
			$this->alumno->set("correoElectronico",$correoElectronico);

            $resultado = $this->alumno->crear();
            return $resultado;
		}

        public function listar(){
            $resultado = $this->alumno->listar();
            return $resultado;
        }
        public function listarPorAnioEgreso($anioEgreso){
            $resultado = $this->alumno->listarPorAnioEgreso($anioEgreso);
            return $resultado;
        }
        public function listarPorEstadoCivil($estadoCivil){
            $resultado = $this->alumno->listarPorEstadoCivil($estadoCivil);
            return $resultado;
        }
        public function listarPorRegionProcedencia($regionProcedencia){
            $resultado = $this->alumno->listarPorRegionProcedencia($regionProcedencia);
            return $resultado;
        }
        public function listarPorSexo($sexo){
            $resultado = $this->alumno->listarPorSexo($sexo);
            return $resultado;
        }
        public function ver($dniAlumno){
			$this->alumno->set("dniAlumno",$dniAlumno);
			$datos = $this->alumno->ver();
			return $datos;
		}
	}
?>
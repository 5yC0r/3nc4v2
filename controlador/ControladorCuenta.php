<?php 

	include('../clases/Cuenta.php');

    class ControladorCuenta {
        
        private $cuenta;
        
        public function __construct() {
            $this->cuenta = new Cuenta();
        }

        public function updateAttrEncuestaRespondida($dniAlumno){
            $resultado = $this->cuenta->updateAttrEncuestaRespondida($dniAlumno);
            return $resultado;
        }
    }
?>
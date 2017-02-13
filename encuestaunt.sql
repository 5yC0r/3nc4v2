-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2017 a las 21:53:58
-- Versión del servidor: 10.0.17-MariaDB
-- Versión de PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encuestaunt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `administrador` varchar(20) DEFAULT NULL,
  `passwordadmin` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id`, `administrador`, `passwordadmin`) VALUES
(1, 'paolo', '45272561');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `dniAlumno` int(8) NOT NULL,
  `nombres` varchar(20) DEFAULT NULL,
  `apellidos` varchar(25) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `estadoCivil` varchar(7) DEFAULT NULL,
  `regionProcedencia` varchar(6) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `anioEgreso` int(4) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `correoElectronico` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`dniAlumno`, `nombres`, `apellidos`, `fechaNacimiento`, `estadoCivil`, `regionProcedencia`, `sexo`, `direccion`, `anioEgreso`, `telefono`, `correoElectronico`) VALUES
(12345678, 'panfilo', 'alberto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(72540879, 'jesus', 'vela', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(78945612, 'guille', 'fintanilla', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `idcuenta` int(11) NOT NULL,
  `usuario` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `encuestaRespondida` varchar(2) NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`idcuenta`, `usuario`, `password`, `encuestaRespondida`) VALUES
(1, 'alex', '12345678', 'si'),
(3, 'jflion', '72540879', 'si');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `codPregunta` int(11) NOT NULL,
  `numeroPregunta` varchar(8) DEFAULT NULL,
  `respuestaPregunta` varchar(3) DEFAULT NULL,
  `dniAlumno` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`codPregunta`, `numeroPregunta`, `respuestaPregunta`, `dniAlumno`) VALUES
(48, '1', 'c', 78945612),
(49, '5', 'b', 78945612),
(50, '3', 'g', 78945612),
(51, '4', 'c', 78945612),
(52, '2', 'c', 78945612),
(53, '6', 'a', 78945612),
(54, '7', 'b', 78945612);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntart`
--

CREATE TABLE `preguntart` (
  `codPregunta` int(11) NOT NULL,
  `numeroPregunta` varchar(8) DEFAULT NULL,
  `respuestaPregunta` varchar(10) DEFAULT NULL,
  `dniAlumno` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `preguntart`
--

INSERT INTO `preguntart` (`codPregunta`, `numeroPregunta`, `respuestaPregunta`, `dniAlumno`) VALUES
(3, '7-2', 'olasdasd', 78945612);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`dniAlumno`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`idcuenta`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`codPregunta`),
  ADD KEY `fk_pregunta_alumno_idx` (`dniAlumno`);

--
-- Indices de la tabla `preguntart`
--
ALTER TABLE `preguntart`
  ADD PRIMARY KEY (`codPregunta`),
  ADD KEY `fk_encuestart_alumno1_idx` (`dniAlumno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `idcuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `codPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT de la tabla `preguntart`
--
ALTER TABLE `preguntart`
  MODIFY `codPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `fk_pregunta_alumno` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno` (`dniAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `preguntart`
--
ALTER TABLE `preguntart`
  ADD CONSTRAINT `fk_encuestart_alumno1` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno` (`dniAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

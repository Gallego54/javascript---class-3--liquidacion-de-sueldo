/*
Generar una clase llamada CEmpleado.

Mostrar el calculo - con sus constructores -

Para la siguientes personas:

Apellido y Nombre: Alvarado Lucas.
Categoria : B 11 - desarrollador web - Semi-Sr
antiguedad: 5 años
Idioma: Ingles
Hijos con guarderia: 2
Presentismo: si
cordinador grupo
Km por movilidad propia: 250


Apellido y Nombre: Artigas Juan Luis.
Categoria : B 10 - desarrollador Mobile - Junior
antiguedad: 2 años
Idioma: Ingles
Hijos con guarderia: 0
Presentismo: si
Km por movilidad propia: 100
Adicional objetivo: 7500$


Apellido y Nombre: Casas Kevin.
Categoria : B 2- Analista de Sistmas - Senior
antiguedad: 20 años
Idioma: Ingles
Hijos con guarderia: 1
Presentismo: si
Km por movilidad propia:350
Funcion : lider de equipo.

Empleado perteneciente al sindicato.




Calcular:
Sueldo Bruto= Sueldo Neto + Antiguedad + IdiomaExtranjero + Titulo de Grado + Presentismo + Funcion (coordinar... etc)+ Adicionales * Objetivos + Adicionales Voluntarios.
Retenciones: Jubilacion (11% del Sueldo básico) + Obra social (3%Sueldo Básico) + Sindicato (1% del sueldo Básicoo)

Calcular:
Calcular Sueldo Neto =Sueldo Bruto - Retenciones
*/ 


class Persona  {
    constructor (flnm, lng, songuard) {
        this.fullname = flnm;
        this.idioma = lng;
        this.songuard = songuard;
    }
}


class CEmpleado {
    #Person; #category; #antiguedad;
    #presentismo;
    #funciongrupo; #kmpropio; #adicionalobjetiv;

    constructor (flnm, cty, antig, idioma, 
        songuard, present, funciongroup, 
        kmpropio, adicionalobj) {
        
        this.#fullname 


    }
}
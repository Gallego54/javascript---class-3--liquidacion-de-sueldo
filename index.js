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


 

/*function getJson () {
    const requestURL = HTTPJson;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    console.log(request.response)
    return request.response;
}

jsonParser.jsonData = getJson();
console.log(jsonParser.searchData(1))
*/



class Persona  {
    #fullname; #idioma; #songuard
    constructor (flnm, lng, songuard) {
        this.#fullname = flnm;
        this.#idioma = lng;
        this.#songuard = songuard;
    }

    getFullname () {
        return this.#fullname;
    }

    getIdioma () {
        return this.#idioma;
    }

    getSonGuard () {
        return this.#songuard;
    }
}


const JSONData = '{    "web-develop" : {        "junior": 84000,        "semi-senior": 92000,        "senior": 100289    },    "mobile-develop" : {        "junior": 86000,        "semi-senior": 94000,        "senior": 102000    },    "systems-analyst":{        "junior": 91000,        "semi-senior": 99500,        "senior": 107000    }}'
const HTTPJson = 'https://raw.githubusercontent.com/Gallego54/javascript---class-3--liquidacion-de-sueldo/main/category.json'
class jsonParser { 
    static searchData ( id ) {
        return JSON.parse(JSONData)[id];
    }
}

class categoryManager{
    static searchCategory ( category ) {
        return jsonParser.searchData(category)
    }
}

class percentCalculator{
    static upValue (value, percent ) {
        return value*(percent)/100
    }

    static downValue ( value, percent ) {
        return value*(-percent)/100
    }
}



class CEmpleado extends Persona{
    #antiguedad; #category; #puesto;
    #presentismo; #funcion; #saldoadicional; 
    #kmpormovilidad; #pertenecesindicato

    constructor (flnm, lng, songuard,
        antiguedad, category, puesto, presentismo,
        funcion,  kmpormovilidad, saldoadicional=0,
        pertenecesindicato=0
    ) {
        super(flnm, lng, songuard);

        this.#antiguedad = antiguedad; this.#category = category;
        this.#presentismo = presentismo; this.#funcion = funcion;
        this.#saldoadicional = saldoadicional; this.#kmpormovilidad = kmpormovilidad;
        this.#pertenecesindicato = pertenecesindicato; this.#puesto = puesto;
    }

    getSalaryBruto(){
        const money = this.#getMoneyOfCategory();
        let pozo = 0;

        pozo += percentCalculator.upValue(money, 1*this.#antiguedad);
        pozo += percentCalculator.upValue(money, this.#idiomaExtrajero());
        pozo += percentCalculator.upValue(money, this.#titleGrade());
        pozo += this.#guarderiaValue();
        pozo += percentCalculator.upValue(money, this.#titleGrade());
        pozo += percentCalculator.upValue(money, this.#getPresentismo());
        pozo += percentCalculator.upValue(money, this.#getFunction());
        pozo += this.#kmCalculator();
        
        return money+pozo+this.#saldoadicional;
    }

    getSalaryNeto(){
        const money = this.getSalaryBruto();
        let pozo = 0;
        
        pozo += percentCalculator.downValue (money, 11);
        pozo += percentCalculator.downValue (money, 3);
        pozo += percentCalculator.downValue (money, this.#getSindicato());

        return money+pozo;
    }

    #getSindicato () {
        if (this.#pertenecesindicato == 1) {
            return 1;
        } return 0;
    }


    #getMoneyOfCategory () {
        return categoryManager.searchCategory(this.#category)
        [this.#puesto]
    }

    #idiomaExtrajero () {
        if (this.getIdioma() != 'Español') {
            return 8;
        } else {
            return 0;
        }
    }

    #titleGrade () {
        switch (this.#puesto) {
            case 'junior': return 8;
            case 'semi-senior': return 10;
            case 'senior': return 12;
        }
    }

    #guarderiaValue () {
       return this.getSonGuard()*10000;
    }

    #getPresentismo () {
        if (this.#presentismo == 1) {
            return 2;
        } return 0;
    }

    #getFunction () {
        switch (this.#funcion) {
            case 'cordinador': return 10;
            case 'lider': return 20;
            default: return 0;
        }
    }

    #kmCalculator () {
        return this.#kmpormovilidad*43;
    }
}

window.onload =  () => {
    const obj1 = new CEmpleado (
        'Alvarado Lucas', 'Ingles', 2,
        5, 'web-develop', 'semi-senior', 1,
        'cordinador', 250
        );
    
    const obj2 = new CEmpleado (
        'Artigas Juan Luis', 'Ingles', 0,
        2, 'mobile-develop', 'junior', 1,
        '', 100, 7500
        );
    
    const obj3 = new CEmpleado (
        'Casas Kevin', 'Ingles', 1,
        20, 'systems-analyst', 'senior', 1,
        'lider', 350
        );



    const body = document.getElementsByTagName('body')[0];
    body.innerHTML += `${obj1.getFullname()} | Salario Bruto: ${obj1.getSalaryBruto()} | Salario Neto: ${obj1.getSalaryNeto()}<br>`
    body.innerHTML += `${obj2.getFullname()} | Salario Bruto: ${obj2.getSalaryBruto()} | Salario Neto: ${obj2.getSalaryNeto()}<br>`
    body.innerHTML += `${obj3.getFullname()} | Salario Bruto: ${obj3.getSalaryBruto()} | Salario Neto: ${obj3.getSalaryNeto()}<br>`
}




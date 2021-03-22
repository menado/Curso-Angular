"use strict";
(() => {
    // Uso de Let y Const
    let nombre = 'Ricardo Tapia';
    let edad = 23;
    const PERSONAJE = { nombre, edad };
    const enviarMision = (objeto) => {
        const [karate, aikido, wing_chun, jiu_jitsu] = objeto.artesMarciales;
        console.log(`Enviando a ${objeto.nombre} a la misión, aplicando el arte del ${karate}.`);
    };
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    enviarMision(batman);
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => (a + b) * 2;
    // function resultadoDoble( a, b ){
    //   return (a + b) * 2
    // }
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma = 'arco') {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + poder;
        }
    }
    ;
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    // class Rectangulo {
    //   constructor(
    //     base:string,
    //     altura:string
    //   ){
    //     this.base = base;
    //     this.altura = altura;
    //   }
    // }
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.calcularArea = (b, a) => (b * a);
        }
    }
    // const rec: Rectangulo = new Rectangulo(2,6);
    const rec = new Rectangulo(2, 6);
    console.log(rec.calcularArea(rec.altura, rec.base));
})();

(function(){

    // "let" se declara una vez en el scope.
    // "var" se declara las veces que se quiera.
    // "const" se declara cuando no varia el valor. 

    let mensaje:string = 'Hola';
    let numero:number = 123; 
    let booleano:boolean = true; // false
    let hoy:Date = new Date();

    // let cualquiercosa:any;
    // cualquiercosa = mensaje;
    // cualquiercosa = numero;
    // cualquiercosa = booleano;
    // cualquiercosa = hoy;

    let cualquiercosa:string | number | Date | boolean;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };

    spiderman = {
        nombre: 'Juan',
        edad: 24
    }

})();
(function(){

    // "let" se declara una vez en el scope.
    // "var" se declara las veces que se quiera.
    // "const" se declara cuando no varia el valor. 
   
    let mensaje = 'Hola'; 

    if(true){
        let mensaje = 'Mundo';
    }
    console.log(mensaje);

})();
(function(){

    function getEdad(){
       return 100 + 100 + 300; 
    }

    const nombre = 'Juan';
    const apellido = 'Mena';
    const edad = 26;

    // const salida = nombre + apellido + edad; 
    // const salida = nombre + " " + apellido + " (Edad: " + edad + ")";
    // Juan Mena (Edad: 26)

    // TEMPLATE LITERAL

    // Backticks son: ``
    // const salida = `${nombre} ${apellido} (Edad: ${edad})`;
    // Juan Mena (Edad: 26)

    // const salida = `
    // ${nombre} 
    // ${apellido} 
    // (Edad: ${edad})`;
    // // Juan 
    // // Mena 
    // // (Edad: 26)

    const salida = `
    ${nombre} 
    ${apellido} 
    (Edad: ${getEdad()})`;
    // Juan 
    // Mena 
    // (Edad: 500 )
    
    console.log(salida);

})();





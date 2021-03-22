(function(){

    // Los argumentos deberían llevar el siguiente orden:
    // Obligatorios, Opcionales y Por Defecto.

    function activar(
        quien:string, 
        momento?:string, // Dejamos el argumento opcional colocando signo de interrogación.
        objeto:string = 'batiseñal'        
    ){
        if(momento){
            console.log(`${quien} activó la ${objeto} en la ${momento}.`);
        }else{
            console.log(`${quien} activó la ${objeto}.`);
        }
        
    }

    activar('Gordon','tarde');

})();   





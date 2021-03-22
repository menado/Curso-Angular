(function(){

    const miFuncion = function(a:string){
        return a;
    }

    // const miFuncionFlecha = (a:string) => {
    //     return a.toUpperCase();
    // }

    const miFuncionFlecha = (a:string) => a.toUpperCase();

    console.log(miFuncion('Normal'));
    console.log(miFuncionFlecha('Flecha'));

    // const sumarNormal = function(a:number, b:number){
    //     return a+b
    // }

    const sumarFlecha = (a:number, b:number) => a + b; 
    console.log(sumarFlecha(5,2))

     
    // const hulk = {
    //     nombre: 'Hulk',
    //     smash(){

    //         setTimeout(function(){
    //             console.log(`${ hulk.nombre } smash!!!`); // Para que funcione correctamente toca apuntar directamente al objeto, sino el "this" no funcionaria.
    //         }, 1000);
  
    //     }
    // }

    const hulk = {
        nombre: 'Hulk',
        smash(){

            setTimeout(() => {
                console.log(`${ this.nombre } smash!!!`);
            }, 1000);
  
        }
    }

    hulk.smash();

    // La función flecha no modifica donde apunta el "this". 

})();   





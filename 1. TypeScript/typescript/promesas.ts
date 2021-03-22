(() => {

    // Ejemplo 1:
    // console.log('Inicio');

    // const prom1 = new Promise((resolve, reject)=>{

    //     setTimeout(() =>{
    //         reject('Se terminó el timeout.');
    //     }, 1000)
    // });

    // prom1
    //     .then((mensaje:string) => console.log(mensaje))
    //     .catch((err:string) => console.warn(err));

    // console.log('Fin');

    // Ejemplo 2:
    // let x = 10;

    // const p = new Promise((resolve, reject)=>{
    //     if(x == 10){
    //         resolve('La variable es igual a 10.');
    //     }else{
    //         reject('La variables no es igual a 10.')
    //     }
    // });

    // p
    // .then((res:string) => {
    //     console.log('Success: ' + res);
    // })
    // .catch((err:string) => {
    //     console.log('Error: ' + err);
    // })


    // Ejemplo 3:
    // let x = 10;
    // console.log('1. Proceso iniciado...');

    // setTimeout(() => {
    //     x = x * 3 + 2; 
    //     console.log('2. Proceso terminado...');
    // }, 2000);

    // console.log('3. El resultado es: ' + x);

    let x = 10;
    // console.log('1. Proceso iniciado...');

    // setTimeout(() => {
    //     x = x * 3 + 2; 
    //     console.log('2. Proceso terminado...');
    // }, 2000);

    // console.log('3. El resultado es: ' + x);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            x = x * 3 + 2; 
            console.log('2. Proceso terminado...');
            resolve(x);
        }, 2000);

        
    });

    console.log('1. Proceso iniciado...');
    promesa.then(res=>{console.log('3. El resultado es: ' + res)})


})();   






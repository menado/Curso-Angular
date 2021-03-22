(() => {

    interface Xmen {
        nombre:string;
        edad:number;
        poder?:string;
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión.`);
    }

    const wolverine = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine);

})();   





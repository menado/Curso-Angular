(()=>{

  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  const PERSONAJE = {nombre,edad};


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Batman{
    nombre:string,
    artesMarciales:string[];
  }

  const enviarMision = (objeto: Batman) => {
    const[karate, aikido,wing_chun,jiu_jitsu] = objeto.artesMarciales;
    console.log(`Enviando a ${objeto.nombre} a la misión, aplicando el arte del ${karate}.`);
  }

  const batman:Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  enviarMision(batman);

 

  // Convertir esta funcion a una funcion de flecha

  const resultadoDoble = (a:number, b:number):number => (a+b)*2;

  // function resultadoDoble( a, b ){
  //   return (a + b) * 2
  // }

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( 
    nombre:string, 
    poder?:string, 
    arma:string = 'arco'){
      let mensaje;
      if(poder){
        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
      }else{
        mensaje = nombre + ' tiene un ' + poder
      }
  };

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
    constructor(
      public base:number,
      public altura:number
    ){}

    calcularArea = (b:number, a:number):number => (b*a); 
  }
  // const rec: Rectangulo = new Rectangulo(2,6);
  const rec = new Rectangulo(2,6);
  
  console.log(rec.calcularArea(rec.altura, rec.base));

})();
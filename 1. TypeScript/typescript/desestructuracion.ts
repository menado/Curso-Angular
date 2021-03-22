(() => {

  const avenger = {
      nombre: 'Steve',
      clave: 'Capitán América',
      poder: 'Droga'
  }

  const extraer = ({nombre, clave, poder}:any) => {

    console.log(nombre);
    console.log(clave);
    console.log(poder);

  }

  extraer(avenger);

//   const {nombre, clave, poder} = avenger;

//   console.log(nombre);
//   console.log(clave);
//   console.log(poder);

//   console.log(avenger.nombre);
//   console.log(avenger.clave);
//   console.log(avenger.poder);

  // Para desestructurar un arreglo toca tener en cuenta la posición de los objetos en el arreglo, según se requiera.

  const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

  const[thor, ironman, spiderman] = avengers;

//   const[, , spiderman] = avengers; // Si solo nos interesara un dato.

  console.log(thor);
  console.log(ironman);
  console.log(spiderman);

//   console.log(avengers[0]);
//   console.log(avengers[1]);
//   console.log(avengers[2]);


  const extraerArr = ([thor, ironman, spiderman]:string[]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  }


})();   





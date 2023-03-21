'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {//*ya no se puede dividir mas!!
      return array;
    }
  //let pibot =Math.floor(Math.random() * array.length);//*genera aleatorios de 0 a length -1
  let pibot = 0;
  const izq = [];
  const equal = [];
  const der = [];
  for(let elem of array){
      if(elem < array[pibot])izq.push(elem)
      if(elem == array[pibot])equal.push(elem)
      if(elem > array[pibot])der.push(elem)
  }
  return quickSort(izq).concat(equal,quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 
    if (array.length < 2) {
        return array;
    }
    const pibot = Math.ceil(array.length /2);
    const izq = array.slice(0, pibot);
    const der = array.slice(pibot, array.length);

    return merge(mergeSort(izq), mergeSort(der));

    function merge(izq, der) {
        const mergeArr = [];
        while (izq.length && der.length) {
            if (izq[0] <= der[0]) {
                mergeArr.push(izq.shift());
            } else {
            mergeArr.push(der.shift());
            }
        }
        while (izq.length) {
            mergeArr.push(izq.shift());
        }
        while (der.length) {
            mergeArr.push(der.shift());
        }
        return mergeArr;
    }
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let rta=[1];
  let i = 2;
  while(num != 1){
    if(num % i === 0){
      rta.push(i);
      num = num/i
    } else {
      i++
    }
  }
  return rta;
}  
//  const factores = [];
//  const primos = generaPrimos(num);
//  
//  if(num == 0)return [0];
//  if(num == 1)return [1];
//  let i = primos.length - 1;
//  while(factores[0] != 1){
//    if(primos.includes(num)){
//      factores.unshift(num)
//      break
//    }
//    if(num%primos[i]==0){
//      factores.unshift(primos[i]);
//      num /= Math.trunc(primos[i]);
//      continue;
//    }
//      i--;
//    
//  }
//  factores.unshift(1);
//  return factores;
//}
//
//function generaPrimos(num){
//  const primos = [1,2];
//  if(num < 1) return [];
//  if(num == 1)return [1];
//  if(num == 2)return primos;
//  let actual = 3
//  while(actual <= num){
//      let esPrimo= true;
//      for(let i = 2 ; i < actual; i++){
//        if(actual % i !==0)continue;
//        esPrimo=false
//        break;}
//      if(esPrimo)primos.push(actual);
//      actual++;
//  }
//  return primos
//}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length > 1){
    let ordenado;
    do {
      ordenado = true;
      for(let i = 0; i < array.length -1; i++){
        if(array[i]>array[i+1]){
          let aux = array[i];   //-------------------------------------------
          array[i]= array[i+1]; //?Es memos sintetico pero mas eficiente
          array[i+1] = aux;     //-------------------------------------------
          //array.splice(i+1,0,...array.splice(i,1));//*usa splice para intercambiar elementos del array
          ordenado = false;
        }
      }
    }while(!ordenado);
  }
  return array;
}
  

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length;i++){
    let aux = array[i];
    let actual = i;
    while(actual > 0 && aux < array[actual-1]){
      array[actual]=array[--actual];
    }
    array[actual]= aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i= 0 ; i< array.length - 1; i++){
    let minIndex = i;
    for(let j = i + 1 ; j< array.length; j++){
      if(array[j] < array[minIndex])minIndex = j
    }
    if(i!=minIndex){
      let aux = array[i];
      array[i] = array[minIndex] ;
      array[minIndex] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

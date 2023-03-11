'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la LinkedList;
  - remove: elimina el último nodo de la LinkedList y retorna su valor (tener en cuenta el caso particular de una LinkedList de un solo nodo y de una LinkedList vacía);
  - search: recibe un parámetro y lo busca dentro de la LinkedList, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  //this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

//*Declaracion del nodo
//*class Node {
//*  constructor(value){
//*      this.value = value;
//*      this.next = null;
//*  }
//*}

//*Declaracion de la LinkedList SL
//*class LinkedList {
//*  constructor(){
//*  this._length = 0;
//*  this.head = null;
//*  }
//*}

//*Implementacion de los metodos de la LinkedList Sl
LinkedList.prototype.add = function(value){
  const node = new Node(value);
  let current = this.head;
  if(!current){  //?Agrega un nodo si esta la LinkedList vacia
      this.head = node;
      //this._length++;
      //return node //?Retorna el nodo
      return value;
  }
  while(current.next){ //?recorre la LinkedList hasta el ultimo nodo
      current = current.next;
  }
  current.next = node;
  //this._length++;
  //return node;//?Retorna el nodo
  return value;
}

LinkedList.prototype.remove = function(){
  let current = this.head;
  let removed = null;
  if(!current){ //?Si la LinkedList esta vacia retorna null
      return null;
  }
  if(!current.next){//?si tiene un solo elemento retorna el head
    this.head = null;
    //this._length = 0;
    return current.value;
  }
  while(current.next.next){//?recorre la lista hasta el anteultimo elemento
    current= current.next;
  }
  removed = current.next;
  current.next = null;
  //this._length--;
  return removed.value ;
}

LinkedList.prototype.search = function (cb){
  let current = this.head;
  if(!current){
      return null //*Retorna null si esta vacia
  }
  
  if(typeof cb === "function"){
    while(current){//?Recorre la LinkedList
        if(cb(current.value)){
          
          return current.value; //*retorna el valor del elemento
        };
        current = current.next;
    }
    return null; //*retorna null si no se encuentra el elemento
  }
  while(current){//?Recorre la LinkedList
    if(cb == current.value){
      
      return current.value;//*retorna el valor del elemento
    };
    current = current.next;
    }
  return null//*retorna null si no encuentra el elemento
}

LinkedList.prototype.getAll = function(){
  current = this.head;
  if(!current){
      console.log("Lisa vacia!");
      return;
  }
  while(current){ 
      console.log(current.value);
      current = current.next;
  }
  return;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (input){
  return (input.split("").reduce(function(hashNum, char){
    return hashNum + char.charCodeAt();
  },0)) % this.numBuckets;
}

//HashTable.prototype.hash = function (input){ //*version con for of
//  let suma = 0;
//  for(let char of input){
//    suma += char.charCodeAt();
//  }
//  return suma % this.numBuckets;
//}

HashTable.prototype.set = function (key, value){
  let index = this.hash(key);
  //if(!this.hasKey(key) && !this.buckets[index]){ //!no necesita usar haskey
  if(!this.buckets[index]){
    this.buckets[index] = {[key] :value};
    return
  }
  this.buckets[index][key] = value;
}

HashTable.prototype.get = function (key){
  let index = this.hash(key)
  if(this.buckets[index]){
    return this.buckets[index][key];
  }
  return null;
}

HashTable.prototype.hasKey = function (key){
  let index = this.hash(key);
  //*con hasOwnProperty
  //if(this.buckets[this.hash(key)] && this.buckets[this.hash(key)].hasOwnProperty(key)){
  //  return true;
  //}
  //return false;
  
  //return !!this.buckets[index][key];//*doble negacion de la expresion para obtener su valor logico
  return !!this.get(key);//*doble negacion del resultado del get
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};

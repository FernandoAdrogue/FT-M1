'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-orright", "pre-orright", o "in-orright"). Nota: si no se provee ningún parámetro, hará el recorrido "in-orright" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function (value){
   if(value < this.value){//*Si es menor profundiza por izq hasta una hoja
       if(this.left)this.left.insert(value)
       else this.left = new BinarySearchTree(value) //*inserta un nodo a izq de la hoja
   }else if(value > this.value){//*Si es mayor profundiza por der hasta una hoja
       if(this.right)this.right.insert(value)
       else this.right = new BinarySearchTree(value)//*inserta un nodo a der de la hoja
   }
}

BinarySearchTree.prototype.size = function () {
   let count = 1; //*El nodo se cuenta a si mismo
   if(this.left) count += this.left.size();//*Recorre por izq
   if(this.right) count += this.right.size();//*Recorre por der
   return count; //*Retorna el conteo de las sucesibas recurciones
}

BinarySearchTree.prototype.contains = function (value) {
     if(value < this.value){//*Recorre por Izq si es menor
         if(this.left){
            return this.left.contains(value);
         }
      };
     if(value > this.value){//*Recorre por Der si es mayor
         if(this.right){
            return this.right.contains(value);
         }
      };
     if(this.value===value){//*Retorna true si encuentra el valor
         return true;
      };
      return false; //*Retorna false si el valor no existe
 }  
 
BinarySearchTree.prototype.depthFirstForEach= function(cb , arg = 'default' ) {
   switch (arg) {
      case 'pre-order': {
         cb(this.value);
         if(this.left)this.left.depthFirstForEach(cb,arg);
         if(this.right)this.right.depthFirstForEach(cb,arg);
         break;
      }
      case 'post-order':{
         if(this.left)this.left.depthFirstForEach(cb,arg);
         if(this.right)this.right.depthFirstForEach(cb,arg);
         cb(this.value);
         break;
      }
      default : {  //*Recorre in-order por default
         if(this.left)this.left.depthFirstForEach(cb,arg);
         cb(this.value);
         if(this.right)this.right.depthFirstForEach(cb,arg);
      }
   }

}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
   cb(this.value); //*Ejecuto la callback
   if(this.left) arr.push(this.left);//*si tengo nodo izq lo encolo
   if(this.right) arr.push(this.right);//*si tengo nodo der lo encolo
   if(arr.length > 0) arr.shift().breadthFirstForEach(cb, arr);//*si la cola no esta bacia ejecuto la cb para el proximo nodo de la cola
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
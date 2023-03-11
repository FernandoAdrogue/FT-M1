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
   if(value < this.value){
       if(this.left)this.left.insert(value)
       else this.left = new BinarySearchTree(value)
   }else if(value > this.value){
       if(this.right)this.right.insert(value)
       else this.right = new BinarySearchTree(value)
   }
}

BinarySearchTree.prototype.size = function () {
   let count = 1;
   if(this.left) count += this.left.size();
   if(this.right) count += this.right.size();
   return count;
}

BinarySearchTree.prototype.contains = function (value, current = this) {
   if(!current)return false;
   
   if(current.value === value) return true;
 
   if(value < current.value)return this.contains(value, current.left);
   else return this.contains(value, current.right);
   
}

BinarySearchTree.prototype.depthFirstForEach= function(cb , arg = 'in-order' ) {
   if(arg === 'in-order') {   
       if(this.left)this.left.depthFirstForEach(cb, arg = 'in-order');
       cb(this.value);
       if(this.right)this.right.depthFirstForEach(cb, arg = 'in-order');
   }
   if(arg === 'pre-order') {   
       cb(this.value);
       if(this.left)this.left.depthFirstForEach(cb,arg);
       if(this.right)this.right.depthFirstForEach(cb,arg);
   }
   if(arg === 'post-order') {   
       if(this.left)this.left.depthFirstForEach(cb,arg);
       if(this.right)this.right.depthFirstForEach(cb,arg);
       cb(this.value);
   }

}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
   cb(this.value); //Ejecuto la callback
   if(this.left) arr.push(this.left);//si tengo nodo izq lo encolo
   if(this.right) arr.push(this.right);//si tengo nodo der lo encolo
   if(arr.length > 0) arr.shift().breadthFirstForEach(cb, arr);//si la cola no esta bacia ejecuto la cb para el proximo nodo de la cola
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

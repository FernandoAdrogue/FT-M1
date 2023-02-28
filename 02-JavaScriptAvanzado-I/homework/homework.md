# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //* se guarda siempre como propiedad del ibjeto gloval
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar);// undefined
console.log(baz);// baz no esta definido
foo();
function foo() {
   console.log('Hola!');//Hola
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor);//Tony
(function () {
   if (true) {
      var instructor = 'Franco'; // porque esta expresion medifica la variable global?
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash'; //porque no se modifica la variable gloval "instructor" y en el ej anterior no?
   let pm = 'Reverse Flash';
   console.log(instructor); //The Flash
   console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0//Infinity
{}[0]//undefine
parseInt("09")//9
5 && 2// 2
2 && 5// 5
5 || 0// 5
0 || 5// 5
[3]+[3]-[10]//23 -los dos primeros array los toma como string y concatena ("33") despues los convierte a N° Y le resta 10
3>2>1 //false...3>2 es true...true>1 es false
[] == ![]//true...![] es false => []==false ,convierte [] en "" que es false, por eso false==false es true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué: 
Cuando el hoisting declara la variable a al inicio del entorno de ejecucion que es la funcion, pero no la inicializa.
seria como:
         function test() {
            var a;
            console.log(a);
            console.log(foo());
            a = 1;


```javascript
function test() {
   console.log(a);//undefined
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :
la valiable snack dentro del if es elevada al principio de su entorno que es la funcion, es como si fuera asi:
                  var snack = 'Meow Mix';
                  function getFood(food) {
                     var snack;     //snack queda definida pero no inicializada
                     if (food) {
                        snack = 'Friskies';
                        return snack;
                     }
                     return snack;
                  }

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);//undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:
el this apunta a prop que es el entorno desde donde se llama el metodo
```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());// Juan Perez ...el this apunta al global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);   //1ro
   setTimeout(function () {
      console.log(2); //4to
   }, 1000);
   setTimeout(function () {
      console.log(3); //3ro
   }, 0);
   console.log(4); //2do
}

printing();//1 4 3 2 LLama a los callbac de forma sincronica
```

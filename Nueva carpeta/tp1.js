//Variables: let, const

//1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.
var nombre;
nombre = "mili";

console.log(nombre);
//2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
var num1=3;
var num2=8;
console.log(num1+num2);
//3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.
const PI =3.14159;
console.log(PI);

//Funciones: function

//4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.

function saludar(){
    console.log(`Bienvenido ${nombre ??'Usuario'}`);
}
saludar();
//5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y `false` si es impar.
let num=3;
function esPar(num){
    return num %2== 0 ? "par" : "impar" ;

}
let resultado= esPar(num);
console.log(resultado);

//6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos.
let array=[1,2,3,40];
let sumaA =  sumarArray(array);
function sumarArray(array){
    let suma=0;
    for(numero of array)
    {
        suma = suma+numero;
    }
    return suma;
}

console.log(sumaA);
// Objetos literales y constructores
//7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.
console.log("EJERCICIO 7");
const persona ={ nombre :"milagros", edad : 24, profesion : "estudiante"}
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);
//8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un objeto con esas propiedades.
console.log("EJERCICIO 8");
function Producto(nombre1,precio1,stock1)
{
   this.nombre=nombre1;
   this.precio=precio1;
   this.stock=stock1;
}
let producto1= new  Producto( "Gaseosa",10,5);
console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto1.stock);

//9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`, `director` y `anio`.

function Pelicula (nombreP,directorP,anioP){
    this.nombre=nombreP;
    this.director= directorP;
    this.anio=anioP;
}
 const pelicula1= new Pelicula("harry","jk",2008);
console.log(pelicula1);
/*/"Escribir un programa que escriba a la 
consola los numeros del 1 al 100 con dos exceciones. 
Cuando el numero es divisible por 3, escribir
 Fizz y cuando es divisible por 5 (pero no por 3) escribir Buzz. 
Cuando eso funcione modificar para escribir FizzBuzz cuando el 
numero es divisible tanto por 3 como por 5./*/

for(let numero =1; numero<=100 ;numero++)
{
  if(numero%3==0 && numero%5==0 ){
    console.log("FizzBuzz")}
  else if(numero %3==0){
    console.log("Fizz")}
  else if(numero%5 == 0) {
    console.log("Buzz")}
  else {console.log(numero)}
}
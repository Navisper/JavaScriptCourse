//hoisting 
/*
comportamiento integrado del lenguaje mediante
el cual las declaraciones de funciones,
variables y clases se mueven al principio de su alcance,
todo antes de la ejecución del código. Esto, a su vez, 
nos permite usar funciones, variables y clases antes de que
se declaren.
*/

//let x; // Declaración de la variable x

x= 5; // Asignación de valor a la variable x

//let x; // Esto es un error, ya que la declaración de x se mueve al principio,
// pero la asignación no se mueve, por lo que no se puede volver a declarar x

var x; // Esto es correcto, ya que var permite redeclarar la variable

//El hoisting no es recomendado 
// porque puede llevar a confusiones y errores difíciles de detectar.
// Es mejor declarar las variables antes de usarlas para evitar problemas.
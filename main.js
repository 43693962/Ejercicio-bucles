// los ejercicio estan comentado porque hay variables que se repite y da erro el visual 
//ejercicio 1 
/* N°1 | Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos).  */

/* let number = 33
for(let i =1 ; i < 11; i++){
    console.log( `${i} X ${number} = ${i * number}`)
} */

//Ejercicio 2
/* N°2 | Realizar un programa que permita el ingreso de números los cuales se tienen que ir
acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. */



/* let numIngresado = Number(prompt('Ingrese un número'))
const numeros = []
while (numIngresado != 0) {
    numeros.push(numIngresado)
    numIngresado = Number(prompt('Ingrese un número'))
}
console.log(numeros); */

// Ejercicio 3 
//N°3 | Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado

/* let numeroGuardado = numerosIngresados.slice(numerosIngresados.length - 1)

console.log(numeroGuardado)

let numeroAdivinado = parseInt(prompt("Ingrese Numero a Adivinar")) */

/* let bucle = true

while (bucle) {
    if (numeroGuardado[0] == numeroAdivinado) {
        alert(`Adivinaste el numero ${numeroGuardado[0]}`)
        bucle = false
    } else if (numeroAdivinado < numeroGuardado[0]) {
        numeroAdivinado = prompt('El numero es menor, intente otro numero')
    }
    else if (numeroAdivinado > numeroGuardado[0]) {
        numeroAdivinado = prompt('El numero es mayor, intente otro numero')
    }
} */
//Ejercicio 4
//N°4 | Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible por el valor 1 y por sí mismo. Ayuda!: Usar la operación de módulo. Los números solo poseen divisores hasta la mitad del valor del mismo. Dicho de otra forma, si haces la división por cualquier número que no sea 1 o él mismo, se obtiene un resto distinto de cero.

/* 
let numeroIngresado = Number(prompt("Ingrese un número: "))
let numeroPrimo = []
for (let i = 0; i <= numeroIngresado; i++) {

    if (numeroIngresado % i == 0) {
        numeroPrimo.push(i);
    }
}
for (let i = 0; i < numeroPrimo.length; i++) {
    console.log(numeroPrimo[i])
}
if (numeroPrimo.length > 3) {
    console.log("El numero no es primo")
} else {
    console.log("El numero es primo")
} */

//Ejercicio 5
//N°5 | Realizar un programa que reciba un número y muestre de alguna forma todos sus divisores. 

//let numero = prompt('ingrese un numero ')

//Ejercicio 6 
//N°6 | Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array. 
/* 
const array = [1, 2, "3","", , `adrian`, [ `juan`], { nombre: `roberto`, }]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
} */

//Ejercicio 7
//N°7 | Dado un array de 10 números, realizar un programa que muestre por consola el doble de cada uno de los elementos

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 2)
}
 */

//Ejercicio 8 
//N°8 | Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentación por cada elemento del array

/* const familia = [{
    name: `Roberto`,
    edad: 52,
    ocupacion: `policia`,
    colorPelo: `negro`
}, {
    name: `Silvana`,
    edad: 53,
    ocupacion: `Ama de casa`,
    colorPelo: `castaño`
}, {
    name: `Aylin`,
    edad: 20,
    ocupacion: `estudiante`,
    colorPelo: `castaño claro`
}, {
    name: `adrian`,
    edad: 21,
    ocupacion: `estudiante`,
    colorPelo: `castaño`
}, {
    name: `Dona`,
    edad: 13,
    ocupacion: `mascota`,
    colorPelo: `negro`
}];

for (let i = 0; i < familia.length; i++) {
    console.log(`Su nombre es ${familia[i].name} tiene ${familia[i].edad} años, 
    el pelo de color ${familia[i].colorPelo} y actualmente es ${familia[i].ocupacion}.`)
} */

//ejercicio 9
//N°9 | Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números impares

/* const arrayNumber = [1, 3, 4, 5, 43, 22, 66, 84, 255,];
let numImpar = []
for (let i = 0; i < arrayNumber.length; i++) {
    if (i % 2 !== 0) {
        numImpar.push(arrayNumber[i]);
    }
}
console.log(numImpar) */

// ejercicio 10
//N°10 | Realizar un programa que permita la entrada de números y calcule la suma de los números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0

/* let numIngres = Number(prompt('Ingrese un número'))
const numeros = []
const impar = []
const par = []
let resultadoImpar = 0
let resultadoPar = 0
while (numIngres != 0) {
    numeros.push(numIngres)
    numIngres = Number(prompt('Ingrese un número'))
} for (let i = 0; i < numeros.length; i++) {
    if (i % 2 == 0) {
        impar.push(numeros[i]);
    } else if (i % 2 !== 0) {
        par.push(numeros[i]);
    }
}
for (let i = 0; i < impar.length; i++) {
    resultadoImpar += impar[i];
}
for (let i = 0; i < par.length; i++) {
    resultadoPar += par[i];
}
console.log(numeros)
console.log(impar)
console.log(resultadoImpar)
console.log(par)
console.log(resultadoPar)
 */

//Ejercicio 16 IMPOSIBLEEEEE 
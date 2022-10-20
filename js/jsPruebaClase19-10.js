//ciclos de repetición
//While cycle
//se ejecutara mientras la condición sea verdadera
// la palabra reservada es 'while'
console.log('Antes del ciclo de iteración while')
let countWhile = 10;

while(countWhile < 20){
    console.log('Contador', countWhile);
    //Debo tener cuidado de que no se transforme en un ciclo infinito.
    countWhile++;
}

console.log('Despues del ciclo de iteración while')

let countFor = 10;

for(let i=0; i<countFor; i++){
    console.log('Iniciatec');
}

for(let i=0; i<countFor; i++){
    console.log(`El valor del contador es ${i}`);
}
// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
// de lo contrario cuente la longitud del string y lo sume. 
// Puedes usar este array para probar tu función:

// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    const suma = sumAll(param);
    let media = 0;

    if(suma != 0) {
        media = suma/param.length;
    }
    return media;
}

function sumAll(param) {
    let suma = 0;
    if(param != null) {
        for(let i=0; i < param.length; i++) {
            if(typeof param[i] === "number") {
                suma += param[i];
            }else if(typeof param[i] === "string") {
                suma += param[i].length
            }
        }
    }
    return suma;
}

console.log(averageWord(mixedElements))
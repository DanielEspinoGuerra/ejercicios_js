// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
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
            }
        }
    }
    return suma;
}

console.log(average(numbers));
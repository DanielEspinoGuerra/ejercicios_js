// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
// Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(array) {
    
    if(array != null) {
        let length = array.length;
        //Resultado será un array que contenga objetos con su valor y cantidad de repeticiones 
        let resultado = [];

        for(let i=0; i < length; i++) {
            resultado.push({valor: array[i], repeticiones: 1});

            if(i+1 != length) {
                for(let j=i+1; j < length; j++) {
                    if(array[j] == array[i]) {
                        resultado[i].repeticiones++;

                        //Se evita recorrer elementos ya revisados
                        array.splice(j, 1);
                        length--;
                    }
                }
            }
        }

        return resultado;
    }
    return null;    
}

console.log(repeatCounter(counterWords))
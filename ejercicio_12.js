// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
  ];

  function removeDuplicates(param) {
      
      if(param != null) {
        let length = param.length;
        for(let i=0; i < length; i++) {
            if(i+1 != length) {
                for(let j=i+1; j < length; j++) {
                    if(param[j] == param[i]) {
                        param.splice(j, 1);
                        length--;
                    }
                }
            }
        }
    }

    return param;
  }

  console.log(removeDuplicates(duplicates));
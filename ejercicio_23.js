// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, 
// mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];

let peques = [];
let medianas = [];
let grandes = [];

for(const movie of movies) {
    if(movie.durationInMinutes > 200){
        grandes.push(movie.name);
    } else if(movie.durationInMinutes < 100) {
        peques.push(movie.name);
    } else {
        medianas.push(movie.name);
    }
}

console.log("Películas pequeñas: ", peques);
console.log("Películas medianas: ", medianas);
console.log("Películas grandes: ", grandes);
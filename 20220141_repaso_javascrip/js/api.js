let id = 1;

async function obtenerNombreYImagenPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const nombrePokemon = data.name;
        const imagenPokemon = data.sprites.front_default;
        return { nombre: nombrePokemon, imagen: imagenPokemon };
    } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
    }
}

async function mostrarNombreYImagenPokemon() {
    const pokemonNameContainer = document.getElementById('pokemonName');
    const pokemonImageContainer = document.getElementById('pokemonImage');
    const { nombre, imagen } = await obtenerNombreYImagenPokemon(id);
    id++;
    pokemonNameContainer.textContent = nombre;
    pokemonImageContainer.src = imagen;
}

mostrarNombreYImagenPokemon();

const botonCambiarPokemon = document.getElementById('cambiarPokemon');
botonCambiarPokemon.addEventListener('click', mostrarNombreYImagenPokemon);
import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/?t=';
const API_KEY = '&apiKey=73e50d37';

export async function getFilmes(titulo) {
    const response = await axios.get(API_URL + titulo.trim() + API_KEY);
    const filme = await response.data;

    let temporadas = []
    if (filme.Type === 'series') {
        temporadas = await getDadosSerie(titulo, filme.totalSeasons);
    }
    return { filme, temporadas }
}

async function getDadosSerie(titulo, totalTemporadas) {
    let temporadas = []
    for(let i = 1; i <= totalTemporadas; i++) {
        const response = await axios.get(API_URL + titulo.trim() + '&season=' + i + API_KEY);
        const temporada = await response.data;
        temporadas.push(temporada)
    }    
    return temporadas
}




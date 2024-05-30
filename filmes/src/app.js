import express from 'express';
import dateFormat from 'dateformat';
import { getFilmes } from  './api.js'

const app = express();

app.set('view engine', 'pug');

function formatDateBr(data) {
    if (data === 'N/A') {
        return 'N/A';
    }
    return dateFormat(data, 'dd/mm/yyyy');
}

app.get('/', async (req, res) => {
    const filtro = req.query.filtro;
    const dados = await getFilmes(filtro)
    res.render('index', {
        filme: dados.filme,
        temporadas: dados.temporadas,
        formatDateBr
    });
});

app.get('/teste', async (req, res) => {
    res.render('teste', {
        nome: 'Luiz',
        casado: false,
        cidades: [
            'São Luis',
            'Porto Alegre',
            'Rio de Janeiro',
            'Curitiba',
            'Florianópolis',
            'São Paulo',
        ]
    });
});


app.listen(3000, () =>{
    console.log('listening on port 3000');
})
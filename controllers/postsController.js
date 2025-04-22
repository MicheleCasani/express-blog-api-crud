// importo mi dati contenente l'array di oggetti
const posts = require('../data/posts.js');

function index(req, res){
    res.json(posts);
}


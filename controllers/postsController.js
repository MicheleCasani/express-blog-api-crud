// importo mi dati contenente l'array di oggetti
const posts = require('../data/posts.js');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const post = posts.find(function (element) {
        return element.id == req.params.id
    });

    res.json(post)
}

function store(req, res) {
    res.json('creo un nuovo elemento')
}

function update(req, res) {
    res.json('mdifico il post con id:' + req.params.id)
}

function modify(req, res) {
    res.json('mdifica parziale del post con id:' + req.params.id)
}

function destroy(req, res) {
    res.json('elimino il post con id:' + req.params.id)
}

// esporto le funzioni
module.exports = { index, show, store, update, modify, destroy };


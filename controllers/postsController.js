// importo mi dati contenente l'array di oggetti
const posts = require('../data/posts.js');

function index(req, res) {
    let key = req.query.tags;
    let filteredPosts = posts;

    if(key){
        filteredPosts = posts.filter(function (element){
            return element.tags.includes(key);
        })
    }

    // faccio il controllo in caso di errore
    if (filteredPosts.length === 0) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }

    res.json(filteredPosts); 

}

function show(req, res) {
    const post = posts.find(function (element) {
        return element.id === parseInt(req.params.id);
    });

    // faccio il controllo in caso di errore
    if (post === undefined) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }

    res.json(post);
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
    const id = parseInt(req.params.id)
    const post = posts.find(function (element) {
        return element.id === id;
    })

    if (post === undefined) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }
    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
    console.log(posts);
}

// esporto le funzioni
module.exports = { index, show, store, update, modify, destroy };


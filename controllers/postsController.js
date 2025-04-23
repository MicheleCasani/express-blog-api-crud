// importo mi dati contenente l'array di oggetti
const posts = require('../data/posts.js');

// CREO LE FUNZIONI PER LE ROTTE DEI POST

// index
function index(req, res) {

    // creo la variabile che contiene il valore della query string (?tags=...) 
    let key = req.query.tags;

    // creo la variabile che contiene l'array di oggetti 
    let filteredPosts = posts;

    // controllo se l'utente ha passato un parametro alla query string (?tags=...)
    if (key) {
        filteredPosts = posts.filter(function (element) {
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

// show
function show(req, res) {

    // tramite la funzione find cerco l'elemmento all'interno dell'array che ha l'id uguale a quello passato dall'utente tramite la query string (:id)
    const post = posts.find(function (element) {
        return element.id === parseInt(req.params.id);
    });

    // faccio il controllo in caso di errore
    // (!post) è uguale a (post === undefined)
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

// store (post)
function store(req, res) {

    // creo la variabiile che contiene l'id del nuovo post
    // l'id del nuovo post è uguale all'id dell'ultimo post +1 (esempio: se l'ultimo post ha un id di valore 3, il nuovo post avrà un id di valore 4 , e cosi via)
    const newId = posts[posts.length - 1].id + 1;

    // creo la variabile che contiene il nuovo post con i dati inseriti dall'utente tramite il body
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,

    }

    // inserisco il nuovo post all'interno dell'array
    posts.push(newPost);

    res.status(201);

    console.log(posts);

    res.json(newPost);



}

// update (put)
function update(req, res) {

    // creo una variabile che contiene l'id del post che l'utente ha selezionato tramite la query string (:id)
    const id = parseInt(req.params.id)

    // tramite la funzione find cerco l'elemmento all'interno dell'array che ha l'id uguale a quello passato dall'utente tramite la query string (:id)
    const post = posts.find(function (element) {
        return element.id === id;
    })

    // faccio il controllo in caso di errore
    // (!post) è uguale a (post === undefined)
    if (post === undefined) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }
    // vado a modificare i dati del post con quelli inseriti dall'utente tramite il body
    // (req.body.title; req.body.content; req.body.image; req.body.tags;) sono i dati che l'utente può modificare
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);

    res.json(post);
}

// modify (patch)
function modify(req, res) {

    // creo una variabile che contiene l'id del post che l'utente ha selezionato tramite la query string (:id)
    const id = parseInt(req.params.id)

    // tramite la funzione find cerco l'elemmento all'interno dell'array che ha l'id uguale a quello passato dall'utente tramite la query string (:id)
    const post = posts.find(function (element) {
        return element.id === id;
    })

    // faccio il controllo in caso di errore
    // (!post) è uguale a (post === undefined)
    if (post === undefined) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }

    // vado a modificare i dati del post con quelli inseriti dall'utente tramite il body
    // (req.body.title; req.body.tags;) sono i dati che l'utente può modificare
    post.title = req.body.title;
    post.tags = req.body.tags;

    console.log(posts);

    res.json(post);

}

// destroy (delete)
function destroy(req, res) {

    // creo una variabile che contiene l'id del post che l'utente ha selezionato tramite la query string (:id)
    const id = parseInt(req.params.id)

    // tramite la funzione find cerco l'elemmento all'interno dell'array che ha l'id uguale a quello passato dall'utente tramite la query string (:id)
    const post = posts.find(function (element) {
        return element.id === id;
    })

    // faccio il controllo in caso di errore
    // (!post) è uguale a (post === undefined)
    if (post === undefined) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "Post non trovato"
        })
    }

    // tramite la funzione splice vado a rimuovere l'elemento dall'array indicato dalla posizione (indexOf) dell'elemento che voglio rimuovere
    // (posts.indexOf  (post)) sta a significare che voglio rimuovere l'elemento che ha l'id uguale a quello passato dall'utente tramite la query string (:id)
    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
    console.log(posts);
}

// esporto le funzioni
module.exports = { index, show, store, update, modify, destroy };


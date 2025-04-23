// importo mi dati contenente l'array di oggetti
const posts = require('../data/posts.js');

// CREO LE FUNZIONI PER LE ROTTE DEI POST

// index
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

// show
function show(req, res) {

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

    const newId = posts[posts.length -1].id + 1;
    const newPost ={
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,

    }
    posts.push(newPost);

    res.status(201);

    console.log(posts);

    res.json(newPost);

    
  
}

// update (put)
function update(req, res) {

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
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);
   
    res.json(post);
}

// modify (patch)
function modify(req, res) {

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

    post.title = req.body.title;
    post.tags = req.body.tags;

    console.log(posts);
   
    res.json(post);

}

// destroy (delete)
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


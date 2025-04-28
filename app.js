// importo express
const express = require('express')

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta, ovvero 3000
const port = 3000;

// importo router
const postsRouter = require('./routers/routerPosts.js')

// dichiaro le varibili che contengono i middleware
// checkTime
const checkTime = require('./middlewares/checkTime.js')
// errorsHandler
const errorsHandler = require ('./middlewares/errorsHandler.js')
// notFound
const notFound = require ('./middlewares/notFound.js')

// importo il middleware checkTime
app.use(checkTime);

// indico ad express di trattare i body delle richieste come json in modo da poterli leggere
app.use(express.json())

// instrada le richieste che iniziano con /posts al router postsRouter
app.use('/posts', postsRouter)

// importo il middleware notFound
app.use(notFound);

// importo ilmiddleware errorsHandles
app.use(errorsHandler);

// importo la cartella public, che contiene file statici
app.use('/imgs', express.static('public/imgs'));

// definisco la rotta base 
app.get('/', (req, res)=>{
    res.send('Homepage')
})

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port,()=>{
    console.log(port);
});



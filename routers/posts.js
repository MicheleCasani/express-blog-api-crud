// importo express
const express = require('express')

// importo router
const router = express.Router();

// importo i dati dei post
const posts = require('../data/posts.js')

// importo il controller per i post
const postsController = require('../controllers/postsController.js');

// DEFINISCO LE ROTTE PER I POST

// index
router.get('/', postsController.index);

// show
router.get('/:id', postsController.show);

// store
router.post('/', postsController.store);

// update (put)
router.put('/:id', postsController.update);

// modify (patch)
router.patch('/:id', postsController.modify);

// delete
router.delete('/:id', postsController.destroy);

// esporto il router
module.exports = router;

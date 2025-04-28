function notFound(req, res, next){
res.status (404);
res.json({
    error: 'not found',
    message: 'la rotta non esiste'
})
}

module.exports = notFound;
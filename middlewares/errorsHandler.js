function errorsHandler (err , req, res, next){
    res.status(500);

    res.json({
        error: err.message,
        message: ' si è verificato un errore interno al server'
    })
}

module.exports = errorsHandler
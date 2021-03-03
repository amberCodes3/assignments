const middleware = ("/player", (req, res, next) => {
    console.log("This is the MIDDLEWARE")
    next()
})

module.exports = middleware 
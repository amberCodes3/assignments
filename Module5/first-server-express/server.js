const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

//ROUTES
app.use("/users", require("./routes/userRouter.js"))
app.use("/vehicles", require("./routes/vehicleRouter.js"))

//ERROR HANDLING 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
}) 
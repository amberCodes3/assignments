const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//MIDDLEWARE (for every request)//
app.use(express.json())
app.use(morgan('dev'))

//CONNCET TO DB//
mongoose.connect('mongodb://localhost:27017/usersdb',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

//ROUTES//
app.use("/users", require("./routes/userRouter.js"))
app.use("/vehicles", require("./routes/vehicleRouter.js"))

//ERROR HANDLING//
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
}) 
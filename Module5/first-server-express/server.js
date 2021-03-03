const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use("/users", require("./routes/userRouter.js"))
app.use("/vehicles", require("./routes/vehicleRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
}) 
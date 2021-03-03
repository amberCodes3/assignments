const express = require('express')
const app = express()

app.use(express.json())

app.use("/shoes", require("./routes/shoeRouter.js"))


app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})
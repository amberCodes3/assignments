const express = require('express')
const app = express()

app.use(express.json())
app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(8000, () => {
    console.log("Server is running on Port 8000")
})
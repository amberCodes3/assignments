const mongoose = require('mongoose')
const Schema = mongoose.Schema

//BOUNTY BLUEPRINT
const bountySchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    amount:{
        type: Number, 
        required: true
    }, 
    type: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)
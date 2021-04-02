const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    clothingType: {
       type: String, 
       required: true
   },
   amount: {
       type: Number,
       required: true
   },
   brand: {
       type: String, 
       required: true
   }
})

module.exports = mongoose.model("Inventory", inventorySchema) 
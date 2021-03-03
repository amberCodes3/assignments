const express = require('express')
const shoeRouter = express.Router()
const uuid = require('uuid').v4

const shoes = [
    { brand: "Nike", styles: "Nike Air Max 270", price: 150, _id: uuid() },
    { brand: "Nike", styles: "Nike Air Huarache", price: 74.99, _id: uuid() }, 
    { brand: "Adidas", styles: "Adidas Originals NMD R1" , price: 140, _id: uuid() }, 
    { brand: "PUMA", styles: "PUMA Suede Classic Mono", price: 55, _id: uuid() }
]

shoeRouter.get("/", (req, res) => {
    res.send(shoes)
})


shoeRouter.get("/search/brand", (req, res) => {
    const brand = req.query.brand
    const filteredShoes = shoes.filter(shoe => shoe.brand === brand)
    res.send(filteredShoes)
})

module.exports = shoeRouter
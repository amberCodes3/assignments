const express = require("express")
const vehicleRouter = express.Router()
const uuid  = require('uuid').v4

const vehicles = [
    { type: "Toyota", year: 2003, _id: uuid() }, 
    { type: "Lexus", year: 2021, _id: uuid() }, 
    { type: "Ford", year: 2015, _id: uuid() }
]

//GET ALL
vehicleRouter.get("/", (req, res) => {
    res.send(vehicles)
})

//POST ONE
vehicleRouter.post("/", (req, res) => {
    const newVehicle = req.body
    newVehicle._id = uuid()
    vehicles.push(newVehicle)
    res.send(`Successfully added ${newVehicle.type} and ${newVehicle.year} to the database`)
})

//GET ONE 
vehicleRouter.get("/:vehicleId", (req, res) => {
    const vehicleId = req.params.vehicleId
    const foundVehicle = vehicles.find(vehicle => vehicle._id === vehicleId)
    res.send(foundVehicle)
})

//GET by Query
vehicleRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredVehicles = vehicles.filter(vehicle => vehicle.type === type )
    res.send(filteredVehicles)
})

//DELETE ONE
vehicleRouter.delete("/:vehicleId", (req, res) => {
    const vehicleId = req.params.vehicleId
    const vehicleIndex = vehicles.findIndex(vehicle => vehicle._id === vehicleId)
    vehicles.splice(vehicleIndex, 1)
    res.send( "Successfully deleted your vehicle!")
})

//UPDATE ONE
vehicleRouter.put("/:vehicleId", (req, res) => {
    const vehicleId = req.params.vehicleId
    const vehicleIndex = vehicles.findIndex(vehicle => vehicle._id === vehicleId)
    const updateVehicle = Object.assign(vehicles[vehicleIndex], req.body)
    res.send(updateVehicle)
})

/*vehicleRouter.route("/")
    .get( (req, res) => {
        res.send(vehicles)
    })
    .post( (req, res) => {
        const newVehicle = req.body
        vehicles.push(newVehicle)
        res.send(`Successfully added ${newVehicle.type} and ${newVehicle.year} to the database`)
    })*/


module.exports = vehicleRouter
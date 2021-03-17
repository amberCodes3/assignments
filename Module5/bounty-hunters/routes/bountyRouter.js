const express = require("express")
const bountyRouter = express.Router()
const uuid  = require('uuid').v4

const bounties = [
   {firstName: "Dominic", lastName: "Dean", living: true, amount: 500, type: "Sith", _id: uuid() }, 
   {firstName: "Gary", lastName: "Wright", living: true, amount: 200, type: "Jedi", _id: uuid() }, 
   {firstName: "Gabrielle", lastName: "Howard", living: false, amount: 400, type: "Jedi", _id: uuid() },
   {firstName: "Quinn", lastName: "Goodwin", living: true, amount: 1000, type: "Sith", _id: uuid() }
]

bountyRouter.route("/")
    .get( (req, res) => {
        res.send(bounties)
    })
    .post( (req, res) => {
        const newBounty = req.body
        bounties.push(newBounty)
        res.send(newBounty)
    })

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted your bounty!")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updateBounty)
})


module.exports = bountyRouter
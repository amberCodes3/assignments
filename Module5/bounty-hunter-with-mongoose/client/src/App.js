import React, {useState, useEffect} from 'react'
import axios from "axios"
import AddBountyForm from './AddBountyForm'
import Bounties from './Bounties'

function App() {
    const [bounties, setBounties] = useState([])

    function getBounty() {
        axios.get('/bounties')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addBounty (newBounty) {
        axios.post('/bounties', newBounty)
        .then(res => {
            console.log(res.data)
            setBounties (prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty (bountyId) {
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    function handleFilter(e){
        if(e.target.value === "reset"){
            getBounty()
        } else {
            axios.get(`/bounties/find/type?type=${e.target.value}`)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getBounty()
     }, [])

    return (
        <div className= "bounty-container">

            <AddBountyForm 
                submit={addBounty}
                btnText="Add Bounty"
            />

            <h4>Filter By Type</h4>
            <select onChange= {handleFilter} className='filter-form'>
                <option value='reset'>All Types</option>
                <option value= "Sith">Sith</option>
                <option value= "Jedi">Jedi</option>
            </select>

            { 
            bounties.map(bounty => 
                <Bounties
                 {...bounty} 
                 key= {bounty._id}
                 deleteBounty={deleteBounty}
                 editBounty={editBounty}/>) 
            }
            <br/>
        </div>
    )
}

export default App 
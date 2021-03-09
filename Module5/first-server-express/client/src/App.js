import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Users from "./Users"
import AddUserForm from "./AddUserForm"
//import Vehicles from "./Vehicles"

function App() {
    const [users, setUsers] = useState([])

    function getUsers() {
        axios.get('/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }

    function addUser(newUser) {
        axios.post('/users', newUser)
        .then(res => {
            setUsers (prevUsers => [...prevUsers, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteUser(userId) {
        axios.delete(`/users/${userId}`)
        .then(res => {
            setUsers(prevUsers => prevUsers.filter(user => user._id !== userId))
        })
        .catch(err => console.log(err))
    }

    function editUser(updates, userId) {
        axios.put(`/users/${userId}`, updates)
        .then(res => {
            setUsers(prevUsers => prevUsers.map(user => user._id !== userId ? user : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
       getUsers()
    }, [])

    
    return (
        <div className= "user-container">
            <AddUserForm 
                submit={addUser}
                btnText="Add User"
            />
            { 
            users.map(user => 
                <Users
                 {...user} 
                 key= {user.id}
                 deleteUser={deleteUser}
                 editUser={editUser}/>) 
            }
            <br/>
        </div>
    )
}

export default App 

/*const [vehicles, setVehicles] = useState([])
useEffect(() => {
    axios.get('/vehicles')
    .then(res => setVehicles(res.data))
    .catch(err => console.log(err))
}, [])*/

//{ vehicles.map(vehicle => <Vehicles {...vehicle} key= {vehicle.id}/>)}
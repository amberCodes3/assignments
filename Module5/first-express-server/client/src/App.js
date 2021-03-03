import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Users from "./Users"

function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { users.map(user => <Users {...user} key= {user.id}/>) }
        </div>
    )
}

export default App
import React, {useState} from 'react'
import AddUserForm from './AddUserForm'


function Users(props) {
    const { name, age, _id} = props
    const [editToggler, setEditToggler] = useState(false)

    return (
        <div className="user">
            { !editToggler ?
                <>
                    <h1>Name: {name}</h1>
                    <p>Age: {age}</p>
                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteUser(_id)}>Delete
                    </button>
                    <button 
                        className="edit-btn"
                        onClick= {() => setEditToggler(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :
                <>
                    <AddUserForm 
                        name ={name}
                        age={age}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editUser}
                    />
                    <button
                        onClick= {() => setEditToggler(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}


export default Users
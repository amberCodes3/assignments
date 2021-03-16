import React, {useState}from 'react'
import AddBountyForm from './AddBountyForm'

function Bounties(props) {
    const {firstName, lastName, amount, _id} = props
    const [editToggler, setEditToggler] = useState(false)

    return (
        <div className="bounty">
            { !editToggler ?
                <>
                    <h1>Name: {firstName} {lastName} </h1>
                    <p>Amount: {amount} </p>
                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>Delete
                    </button>
                    <button 
                        className="edit-btn"
                        onClick= {() => setEditToggler(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :
                <>
                    <AddBountyForm 
                        name ={firstName}
                        amount={amount}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editBounty}
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


export default Bounties
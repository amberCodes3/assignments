import React, {useState} from 'react'

function AddBountyForm(props) {
    const intInput = { firstName: props.firstName || "", lastName: props.lastName || "", amount: props.amount || "", type: props.type || "" }
    const [inputs, setInputs] = useState(intInput)

   function handleChange (e) {
       const { name, value } = e.target
       setInputs(prevInputs => ({...prevInputs, [name]:value}))
   }

   function handleSubmit (e) {
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props._id)
        setInputs(intInput)
   }

    return (
        <form onSubmit= {handleSubmit}>
            <input 
                type= "text" 
                name= "firstName" 
                value= {inputs.firstName} 
                onChange= {handleChange} 
                placeholder="First Name"
            />
            <input 
                type= "text" 
                name= "lastName" 
                value= {inputs.lastName} 
                onChange= {handleChange}
                placeholder="Last Name"
            />
             <input 
                type= "number" 
                name= "amount" 
                value= {inputs.amount} 
                onChange= {handleChange} 
                placeholder="Amount"
            />
            <input 
                type= "text" 
                name= "type" 
                value= {inputs.type} 
                onChange= {handleChange} 
                placeholder="Type"
            />
            <button>{props.btnText}</button>
        </form>
    )
}


export default AddBountyForm

import React, {useState} from 'react'

function AddUserForm(props) {
    const intInput = {name: props.name || "", age: props.age || ""}
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
                name= "name" 
                value= {inputs.name} 
                onChange= {handleChange} 
                placeholder="Name"
            />
            <input 
                type= "number" 
                name= "age" 
                value= {inputs.age} 
                onChange= {handleChange}
                placeholder="Age"
            />
            <button>{props.btnText}</button>
        </form>
    )
}


export default AddUserForm
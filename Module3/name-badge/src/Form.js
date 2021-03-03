import React from 'react'
import Badge from './Badge'


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birth: "",
            phone: "",
            food: "",
            about: "",
            badges: []
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("sunbmitted")
        const {firstName, lastName, email, birth, phone, food, about } = this.state
        this.setState(prevState => {
            return {
                badges: [...prevState.badges, { firstName, lastName, email, birth, phone, food, about }]
            }
        })
    }

    render() {
        const mystyle= {
            width:"400px", 
            margin:"20px",
            position: "relative",
            borderStyle:"solid"
        }

        const updatedBadge = this.state.badges.map((item, i) => <Badge key={i} {...item} />)
        
        return(
            <div>
                <form onSubmit = {this.handleSubmit} style={{border: "3px solid", padding: "30px", margin: "50px 200px 100px 250px", borderRadius:"10px"}}>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder= "First Name"
                        minLength= "3"
                        value= {this.state.firstName}
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <input 
                        type="text"
                        name="lastName"
                        placeholder= "Last Name"
                        minLength= "3"
                        value= {this.state.lastName}
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <br/>
                    <input 
                        type="emial"
                        name="email"
                        placeholder= "E-mail"
                        minLength="3"
                        value= {this.state.emial}
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <input 
                        type="text"
                        name="birth"
                        placeholder= "Place of Birth"
                        minLength='3'
                        value= {this.state.birth}
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <br/>
                    <input 
                        type="tel"
                        name="phone"
                        placeholder= "Phone Number"
                        value= {this.state.phone}
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <input 
                        type="text"
                        name="food"
                        placeholder= "Favorite Food"
                        minLength="3"
                        value= {this.state.food}
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <br/>
                    <textarea 
                        name="about"
                        value={this.state.about}
                        placeholder='Tell us about yourself'
                        onChange={this.handleChange}
                        style={mystyle}
                        required
                    />
                    <br/>
                    <button>Submit</button>
                </form>
                <div>{updatedBadge}</div>
            </div>
        )
    }
}

export default Form
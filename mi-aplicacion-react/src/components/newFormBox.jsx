import { createRoot } from 'react-dom/client';
import { useState } from 'react';

class NewFormBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.state = {
            values: {
                name: '',
                email: '',
                gender: '',
            },
            validations: {
                name: '',
                email: '',
                gender: '',
            },
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        })
    }

    validateAll = () => {
        const { name, email, gender } = this.state.values
        const validations = { name: '', email: '', gender: '' }
        let isValid = true

        if (!name) {
            validations.name = 'Name is required'
            isValid = false
        }

        if (!email) {
            validations.email = 'Email is required'
            isValid = false
        }

        if (!gender) {
            validations.gender = 'Gender is required'
            isValid = false
        }

        if (!isValid) {
            this.setState({ validations })
        }

        return isValid
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validateAll()

        if (!isValid) {
            return false
        }

        const values = JSON.stringify(this.state.values)
        alert(values)
    }

    render() {
        const { name, email, gender } = this.state.values
        const { name: nameVal, email: emailVal, gender: genderVal } = this.state.validations

        return (
            
            <div>
                <h1>Simple form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                        <div>{nameVal}</div>
                    </div>

                    <div>
                        <label>
                            Email:
                            <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                        <div>{emailVal}</div>
                    </div>

                    <div>
                        <label>
                            Female
                            <input type="radio" name="gender" value="F" onChange={this.handleChange} />
                        </label>
                        <label>
                            Male
                            <input type="radio" name="gender" value="M" onChange={this.handleChange} />
                        </label>
                        <div>{genderVal}</div>
                    </div>

                    <button type="submit">Send</button>
                </form>

                <div>
                    <h2>Values of the form</h2>
                    <p>{JSON.stringify(this.state.values)}</p>
                </div>
            </div>
        )
    }
}

createRoot(document.getElementById('root')).render(
  <NewFormBox />
);

export default NewFormBox
import React, { Component } from 'react'

export default class DataEntry extends Component {

    constructor(props) {
        super(props)

        // declare state object
        this.state = {
            email: "",
            full_name: "",
            address: "",
            address2: "",
            city: "",
            province: "",
            postal_code: "",
            html: ""
        }
    }

    // values for provinces
    provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']

    readValues = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    print = e => {
        e.preventDefault()
        let value = (
            <table class="center">
                <tbody>
                    <tr>
                        <th>Email:</th><td>{this.state.email}</td>
                    </tr>
                    <tr>
                        <th>Name:</th><td>{this.state.full_name}</td>
                    </tr>
                    <tr>
                        <th>Address:</th><td>{this.state.address} {this.state.address2}</td>
                    </tr>
                    <tr>
                        <th>City:</th><td>{this.state.city}</td>
                    </tr>
                    <tr>
                        <th>Province:</th><td>{this.state.province}</td>
                    </tr>
                    <tr>
                        <th>Postal Code:</th><td>{this.state.postal_code}</td>
                    </tr>
                </tbody>
            </table>
        )
        this.setState({
            html: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.print}>
                    <label for="email">Email </label>
                    <br/>
                    <input 
                        name="email"
                        placeholder="Enter email"
                        type="text"
                        onChange={this.readValues}
                    />
                    <br/>
                    <label for="full_name">Name </label>
                    <br/>
                    <input
                        name="full_name"
                        placeholder="Enter your name"
                        type="text"
                        onChange={this.readValues}
                    />
                    <br/>
                    <label for="address">Address </label>
                    <br/>
                    <input
                        name="address"
                        placeholder="123 Main St"
                        type="text"
                        onChange={this.readValues}
                    />
                    <br/>
                    <label for="address2">Address 2 </label>
                    <br/>
                    <input
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                        type="text"
                        onChange={this.readValues}
                    />
                    <br/>
                    <label for="city">City </label>
                    <br/>
                    <input
                        name="city"
                        type="text"
                        placeholder="Enter city"
                        onChange={this.readValues}
                    />
                    <br/>
                    <label for="province">Province: </label>
                    <br/>
                    <select name="province" onChange={this.readValues}>
                        <option value="">Choose...</option>
                        {
                            this.provinces.map(p => (
                                <option value={p} key={p}>{p}</option>
                            ))
                        }
                    </select>
                    <br/>
                    <label for="postal_code">Postal Code </label>
                    <br/>
                    <input
                        name="postal_code"
                        placeholder="Enter postal code"
                        type="text"
                        onChange={this.readValues}
                    />
                    <br/>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
                <br/>
                {this.state.html}
            </div>
        )
    }
}

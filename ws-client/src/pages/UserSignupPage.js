import React from "react";
import {signup} from "../api/apiCalls";
import Input from "../component/input";

class UserSignupPage extends React.Component {

    // ilk değerler null olsun
    state = {
        name: null,
        surname: null,
        email: null,
        password: null,
        passwordRepeat: null,
        phoneNumber: null,
        pendingApiCall: false,
        errors: {}
    };

    // içerik değişince ne olsun
    onchange = event => {
        const {name, value} = event.target;
        const errors = {...this.state.errors};
        errors[name] = undefined;

        this.setState({
            [name]: value,
            errors
        });
    };

    // butona basılınca verileri yollar
    onClickSignup = async event => {
        event.preventDefault();

        const {name,surname,email,phoneNumber, password} = this.state;

        const body = {
            name,
            surname,
            email,
            phoneNumber,
            password
        };

        this.setState({pendingApiCall: true});

        try {
            const response = await signup(body);
        } catch (error) {
            if(error.response.data.validationMessage) {
                this.setState({errors: error.response.data.validationMessage});
            }
        }
        this.setState({pendingApiCall: false});
    };

    render() {
        const {pendingApiCall, errors} = this.state;
        const {name, surname, email, phoneNumber} = errors;

        return(
            <div className="container">
                <form>
                    <h1 className="text-center">Sign Up</h1>
                    <Input name="name" label="Name" error={name} onChange={this.onchange} />
                    <Input name="surname" label="Surname" error={surname} onChange={this.onchange} />
                    <Input name="email" label="Email" error={email} onChange={this.onchange} />
                    <Input name="phoneNumber" label="Phone Number" error={phoneNumber} onChange={this.onchange} />

                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name='password' type="password" onChange={this.onchange} />
                    </div>
                    <div className="form-group">
                        <label>Password Repeat</label>
                        <input className="form-control" name='passwordRepeat' type="password" onChange={this.onchange} />
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-primary"
                            onClick={this.onClickSignup}
                            disabled={pendingApiCall}
                        >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSignupPage;

import React from "react";
import {signup} from "../api/apiCalls";
import Input from "../component/input";
import {Link} from "react-router-dom";

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
            /*<div className="container">
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
            </div>*/


            <div className="container">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-register-image" style={{backgroundImage: "url(https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=996&t=st=1700252566~exp=1700253166~hmac=e31f335bc210dd555e3c77389c085c04b3e26a97314cb762e7975fe91a74a261)"}}></div>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Create an Account!</h4>
                                    </div>
                                    <form className="user">
                                        <div className="row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <Input name="name" label="Name" error={name} onChange={this.onchange} />

                                            </div>
                                            <div className="col-sm-6">
                                                <Input name="surname" label="Surname" error={surname} onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <Input name="email" label="Email" error={email} onChange={this.onchange} />
                                            <Input name="phoneNumber" label="Phone Number" error={phoneNumber} onChange={this.onchange} />
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <label>Password</label>
                                                <input className="form-control" name='password' type="password" onChange={this.onchange} />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Password Repeat</label>
                                                <input className="form-control" name='passwordRepeat' type="password" onChange={this.onchange} />
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary d-block btn-user w-100"
                                            onClick={this.onClickSignup}
                                            disabled={pendingApiCall}
                                            type="submit">
                                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up
                                        </button>
                                        <hr/>
                                            <Link className="btn btn-primary d-block btn-google btn-user w-100 mb-2" to="/" role="button">
                                                <i className="fab fa-google"></i>&nbsp; Register with Google </Link>  <hr/>
                                    </form>
                                    <div className="text-center">
                                        <Link className="small" to="forgot-password.html">Forgot Password?</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link className="small" to="/login">Already have an account? Login!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserSignupPage;

import React from "react";
import { login } from "../api/apiCalls";
import Input from "../component/input";
import {Link} from "react-router-dom";


class UserLoginPage extends React.Component {


    state = {
        email: null,
        password: null,
        pendingApiCall: false,
        errors: {}
    }

    onChange = event => {
        const { name, value } = event.target;
        const errors = { ...this.state.errors };
        errors[name] = undefined;

        this.setState({
            [name]: value,
            errors
        });
    };

    onClickLogin = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        const body = {
            email, password
        };

        const {push} = this.props.history;

        this.setState({ pendingApiCall: true });

        try {
            await login(body);
            push("/");
        } catch (error) {
            if (error.response.data.validationMessage) {
                this.setState({ errors: error.response.data.validationMessage });
            }
        }
        this.setState({ pendingApiCall: false });
    };


    render() {
        const { pendingApiCall, errors } = this.state;
        const { email } = errors;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image" style={{backgroundImage: "url(https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=996&t=st=1700252566~exp=1700253166~hmac=e31f335bc210dd555e3c77389c085c04b3e26a97314cb762e7975fe91a74a261)"}}></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form className="user">
                                                <div className="mb-3">
                                                    {/*<Input name="email" label="Email" error={email} onChange={this.onChange} />*/}
                                                    <input className="form-control form-control-user" type="email" error={email} onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" onChange={this.onChange} />
                                                </div>
                                                <button className="btn btn-primary d-block btn-user w-100" onClick={this.onClickLogin} disabled={pendingApiCall}> {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign In </button>
                                                <hr />
                                                <Link className="btn btn-primary d-block btn-google btn-user w-100 mb-2" to="/" role="button">
                                                    <i className="fab fa-google"></i>&nbsp; Login with Google </Link>
                                                <hr />
                                            </form>
                                            <div className="text-center">
                                                <Link className="small" to="/">Forgot Password?</Link>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/register">Create an Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLoginPage;

import React from "react";
import {login} from "../api/apiCalls";
import Input from "../component/input";


class UserLoginPage extends React.Component {


    state = {
        email: null,
        password: null,
        pendingApiCall: false,
        errors: {}
    }

    onChange = event => {
        const {name, value} = event.target;
        const errors = {...this.state.errors};
        errors[name] = undefined;

        this.setState({
            [name]: value,
            errors
        });
    };

    onClickLogin = async  event => {
        event.preventDefault();
        const {email, password} = this.state;

        const body = {
            email, password
        };

        this.setState({pendingApiCall: true});

        try {
            const response = await login(body);
        } catch (error) {
            if(error.response.data.validationMessage) {
                this.setState({errors: error.response.data.validationMessage});
            }
        }
        this.setState({pendingApiCall: false});
    };


    render() {
        const {pendingApiCall, errors} = this.state;
        const {email} = errors;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">Sign In</h1>
                    <Input name="email" label="Email" error={email} onChange={this.onChange} />
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name='password' type="password" onChange={this.onChange} />
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-primary"
                            onClick={this.onClickLogin}
                            disabled={pendingApiCall}
                        >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign In
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default UserLoginPage;

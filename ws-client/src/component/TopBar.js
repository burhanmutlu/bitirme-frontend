import React, {Component} from 'react';
import {Link} from "react-router-dom";

/*rcc yaz*/
class TopBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-body py-3">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                     {/*Link = <a ancak browser routera gecince sıkıntı cikmasin
                       diye kullanıyoruz*/}
                    <span>Ws-Client</span></Link>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span
                        className="visually-hidden">Toggle navigation</span><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link active" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/register">Sign Up</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">Example</Link></li>
                        </ul>
                        <Link className="btn btn-primary ms-md-2" role="button" to="#">Example</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopBar;
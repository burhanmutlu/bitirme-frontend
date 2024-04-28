import React from 'react';
import UserSignupPage from "./pages/UserSignupPage";
import UserLoginPage from "./pages/UserLoginPage";
import HomePage from "./pages/HomePage";
import {HashRouter as Router, Route} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import Switch from "react-router-dom/es/Switch";
import ActivationPage from "./pages/Activation";
import TopBar from "./component/TopBar";
import UserFiles from "./pages/UserFiles";


function App() {
    return (
        <div>
            <Router>
                <TopBar />
                <Switch> {/*yoksa hepsi calisir.*/}
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={UserLoginPage} />
                    <Route exact path="/register" component={UserSignupPage} />
                    <Route exact path="/activation/:token" component={ActivationPage} />
                    <Route exact path="/my-files" component={UserFiles} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
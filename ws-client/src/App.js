import React from 'react';
import UserSignupPage from "./pages/UserSignupPage";
import UserLoginPage from "./pages/UserLoginPage";
import HomePage from "./pages/HomePage";
import {HashRouter as Router, Route} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import Switch from "react-router-dom/es/Switch";
import TopBar from "./component/TopBar";


function App() {
    return (
        <div>
            <Router>
                <TopBar />
                <Switch> {/*yoksa hepsi calisir.*/}
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={UserLoginPage} />
                    <Route exact path="/register" component={UserSignupPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
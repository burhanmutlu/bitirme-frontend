import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import async from "async";
import {activateUser} from "../api/apiCalls";

const ActivationPage =  () => {
    const {token} = useParams();

    useEffect(() => {
        async function activate() {
            try {
                const response = await activateUser(token);
                console.log(response.data.message);
            } catch (axiosError) {

            } finally {

            }
        }
        activate();
    }, []);
    return (
        <div>Activation Page</div>
    );
}

export default ActivationPage;
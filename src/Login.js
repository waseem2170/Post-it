import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import Pic from "./Pics/post.png";
import {auth, provider, provider2} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();

    const signInWithGoogle = () => {
        //sign in
        auth.signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    }

   /* const signInWithFacebook = () => {
        //sign in
        auth.signInWithPopup(provider2)
        .then(result => {
            console.log(result)
        })
        .catch(error => alert(error.message));
    }*/

    return (
        <div className="login">
            <div className="login__logo">
                <img src={Pic} alt=""/>
                <p>Post - it</p>
            </div>
            <Button className="google" type="submit" onClick={signInWithGoogle}>
            Login with Google+
            </Button>
        </div>
        /*
         <Button className="facebook" type="submit" onClick={signInWithFacebook}>
            Login with facebook
            </Button>
        */
    )
}

export default Login

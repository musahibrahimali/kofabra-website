import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {SignIn, Register} from "../pages";
import {authentication, database} from "../../../Config/FireBase";
import './styles/Landing.css';
import {LoadAnimation} from "../../exports";

function LogLanding () {
    /* react hooks */
    let browserHistory = useHistory();
    const [loading, setLoading] = useState(false);
    const [logIn, setLogIn] = useState(true);
    const [displayName, setDisplayName] = useState('');
    const [displayNameError, setDisplayNameError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    /* Functions */

    /* clear all inputs */
    const clearInput = () => {
        setEmail('');
        setPassword('');
        setDisplayName('');
    }

    /* clear all errors */
    const clearError = () => {
        setEmailError('');
        setPasswordError('');
        setDisplayNameError('');
    }

    /* switch login and sign up components */
    const handleSwitch = () => {
        clearInput();
        clearError();
        setLogIn(!logIn);
    }

    /* handle sign in */
    const handleSignIn = useCallback(
        async (event) => {
            event.preventDefault();
            clearError();
            setLoading(true);
            await authentication
                .signInWithEmailAndPassword(email, password)
                .catch((error) => {
                    switch (error.code){
                        case "auth/invalid-email":
                            setLoading(false);
                            setEmailError("Invalid Email");
                            break;
                        case "auth/user-disabled":
                            setLoading(false);
                            setEmailError("Account has been disabled");
                            break;
                        case "auth/user-not-found":
                            setLoading(false);
                            setEmailError("User not found");
                            break;
                        case "auth/wrong-password":
                            setLoading(false);
                            setPasswordError("Invalid password");
                            break;
                        default:
                            break;
                    }
                });

            /* navigate to home page */
            if(email.length > 3){
                browserHistory.push('/');
            }
            // eslint-disable-next-line
        },[]
    );

    /* handle sign up */
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            clearError();
            setLoading(true);
            const user = await authentication
                .createUserWithEmailAndPassword(email, password)
                .catch((error) => {
                    switch (error.code){
                        case "auth/invalid-email":
                            setLoading(false);
                            setEmailError("Invalid Email");
                            break;
                        case "auth/email-already-in-use":
                            setLoading(false);
                            setEmailError("Email in use by another account");
                            break;
                        case "auth/weak-password":
                            setLoading(false);
                            setPasswordError("Password must be at least 8 characters");
                            break;
                        default:
                            break;
                    }
                });

            await database.ref(`users/${user.user.uid}`).set({
                userInfo: {
                    email: email,
                    displayName: displayName,
                }
            });

            /* navigate to home page */
            if(email.length > 3){
                browserHistory.push('/');
            }
            // eslint-disable-next-line
        }, []
    );


    return (
        <>
            <div className="App">
                {
                    loading ?
                        <LoadAnimation /> :
                        <div className="login">
                            <div className="container">
                                {logIn && (
                                    <SignIn
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        emailError={emailError}
                                        setEmailError={setEmailError}
                                        passwordError={passwordError}
                                        setPasswordError={setPasswordError}
                                        handleSignIn={handleSignIn}
                                        handleSwitch={handleSwitch}
                                        onClick={handleSwitch}
                                    />
                                )}
                                {!logIn && (
                                    <Register
                                        displayName={displayName}
                                        setDisplayName={setDisplayName}
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        emailError={emailError}
                                        setEmailError={setEmailError}
                                        passwordError={passwordError}
                                        setPasswordError={setPasswordError}
                                        displayNameError={displayNameError}
                                        setDisplayNameError={setDisplayNameError}
                                        handleSignUp={handleSignUp}
                                        handleSwitch={handleSwitch}
                                        onClick={handleSwitch}
                                    />
                                )}
                            </div>


                            <RightSide
                                className={logIn ? "right-side right" : "right-side left"}
                                currentActive={logIn ? "REGISTER" : "LOG IN"}
                                onClick={handleSwitch}
                            />

                    </div>
                }
            </div>
        </>
    );
}

const RightSide = (props) => {
    const {className, onClick, currentActive} = props;
    return (
        <div className={className} onClick={onClick}>
            <div className="inner-container">
                <div className="text">{currentActive}</div>
            </div>
        </div>
    );
};

export default LogLanding;
import React from 'react';
import './styles/style.css';
import { loginImage } from "../../../assets/AssetExport";

function SignIn(props) {

    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        handleSignIn,
        handleSwitch,
    } = props;

    const handleEmailOnChange = (event) => {
        event.preventDefault();
        setEmailError("");
        setEmail(event.target.value);
    }

    const handlePasswordOnChange = (event) => {
        event.preventDefault();
        setPasswordError("");
        setPassword(event.target.value);
    }

    return (
        <div className="base-container">
            <div className="header">
                <h2>LOG IN</h2>
            </div>
            <div className="content">
                <div className="image">
                    <img src={loginImage} alt="this is a graphic" />
                </div>
                <div className="form">
                    {/* Email Address */}
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Email</label>
                        <input
                            type="text"
                            required
                            value={email}
                            name="username"
                            placeholder="johndoe@email.com"
                            onChange={handleEmailOnChange}
                        />
                        <p className="error-message">{emailError}</p>
                    </div>
                    {/* password */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handlePasswordOnChange}
                        />
                        <p className="error-message">{passwordError}</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn-log" onClick={handleSignIn}>
                    Sign In
                </button>

                <p className="btn-log-reg" onClick={handleSwitch}>
                    Don't have an account? <span className="register-text">Register</span>
                </p>
            </div>
        </div>
    );
}

export default SignIn;

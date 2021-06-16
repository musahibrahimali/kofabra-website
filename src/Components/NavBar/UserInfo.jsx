import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { authentication } from "../../Config/FireBase";
import LoadAnimation from "../LoadAnimation/LoadAnimation";
import './Styles/UserInfo.css';

function UserInfo() {

    let browserHistory = useHistory();
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () => {
        setLoading(true);
        await authentication.signOut();
        browserHistory.replace('/');
    }

    return (
        <>
            {loading && <LoadAnimation />}
            <ul className='user-drop-menu'>
                <li><Link to="/profile-page" className="user-info-link">Profile</Link></li>
                <li onClick={handleLogOut}>
                    <p className="user-info-link">log out</p>
                </li>
            </ul>
        </>
    );
}

export default UserInfo;

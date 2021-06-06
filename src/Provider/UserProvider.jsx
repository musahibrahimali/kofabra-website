import React, {createContext, useEffect, useState} from 'react';
import {authentication} from "../Config/FireBase";
import {LoadAnimation} from "../Components/exports";

export const UserContext = createContext({user: null});

function UserProvider(props) {
    const {children} = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        authentication.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        })
    }, []);

    if(pending){
        return(
            <>
                <LoadAnimation />
            </>
        );
    }

    return (
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
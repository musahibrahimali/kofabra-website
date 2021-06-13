import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from '../Provider/StateProvider';
import { Footer, Home, Services, Products, SignUp, ProfilePage, AboutUs, HelpPage, Landing, RequestPage } from "../Components/exports";
import { authentication } from '../Config/FireBase';

function App() {

    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        authentication.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' exact component={Services} />
                    <Route path='/products' exact component={Products} />
                    <Route path='/request-page' exact component={RequestPage} />
                    <Route path='/sign-up' exact component={SignUp} />
                    <Route path='/landing-page' exact component={Landing} />
                    <Route path='/about-page' exact component={AboutUs} />
                    <Route path='/help-page' exact component={HelpPage} />
                    <Route path='/profile-page' exact component={ProfilePage} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;

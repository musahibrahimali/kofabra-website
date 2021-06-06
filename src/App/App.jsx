import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from '../Provider/StateProvider';
import { Footer, Home, Services, Products, SignUp } from "../Components/exports";
import { AboutUs, HelpPage, Landing } from "../Components/Pages/pages";
import { authentication } from '../Config/FireBase';

function App() {

    const [dispatch] = useStateValue();

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
                    <Route path='/sign-up' exact component={SignUp} />
                    <Route path='/landing-page' exact component={Landing} />
                    <Route path='/about-page' exact component={AboutUs} />
                    <Route path='/help-page' exact component={HelpPage} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;

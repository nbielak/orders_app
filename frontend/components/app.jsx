import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SplashPageContainer from './splash_page/splash_page_container';

const App = () => (
    <div className="main-content">
        <div className="main-container">
            <Switch>
                <Route exact path="/" component={SplashPageContainer}/>
            </Switch>
        </div>
    </div>
);

export default App;
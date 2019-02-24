import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShipmentIndexContainer from './shipments/shipment_index_container';

const App = () => (
    <div className="main-content">
        <div className="main-container">
            <Switch>
                <Route exact path="/" component={ShipmentIndexContainer}/>
            </Switch>
        </div>
    </div>
);

export default App;
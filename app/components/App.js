import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Teams from './Teams';
import Competitions from './competitions/Competitions';
import Table from './tables/Table';

const FourOhFour = () => <div>Uh oh, this page doesn't exist</div>;

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/teams' component={Teams} />
                        <Route exact path='/competitions' component={Competitions} />
                        <Route path='/competitions' component={Table}/>
                        <Route component={FourOhFour} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;
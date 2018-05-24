import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Teams from './teams/Teams';
import Team from './teams/Team';
import Competitions from './competitions/Competitions';
import TableContainer from './tables/TableContainer';
import Player from './players/Player';

const FourOhFour = () => <div>Uh oh, this page doesn't exist</div>;

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/competitions' component={Competitions} />
                        <Route path='/competitions' component={TableContainer}/>
                        <Route exact path='/teams' component={Teams}/>
                        <Route path = '/teams' component={Team} />
                        <Route component={FourOhFour} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;
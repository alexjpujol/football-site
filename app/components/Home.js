import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>Alex's Football Site</h1>
                <h2>For all your football needs</h2>
                <div className="jumbotron">
                    <img src="/public/images/NOU_CAMP.JPG" alt="Alex at the Nou Camp"/>
                </div>
            </div>  
        )
    }
}

module.exports = Home;
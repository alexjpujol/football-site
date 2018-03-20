import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../utils/api';

class Teams extends React.Component {
    constructor(props) {
        super(props);

        this.initialSearch = "wagwan!!"
    }

    componentDidMount() {
       const url = 'http://api.football-data.org/v1/teams/manchester';
       Api.callApi(url).then(data => {
           console.log(data)
           return data
        });
    }

    render() {
        console.log(this.initialSearch)
        return(
            <div>This is where the teams will be!</div>
        )
    }
    
}

module.exports = Teams; 
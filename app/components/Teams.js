import React from 'react';
import ReactDOM from 'react-dom';

class Teams extends React.Component {
    constructor(props) {
        super(props);

        this.initialSearch = "wagwan!!"
    }

    render() {
        console.log(this.initialSearch)
        return(
            <div>This is where the teams will be!</div>
        )
    }
    
}

module.exports = Teams; 
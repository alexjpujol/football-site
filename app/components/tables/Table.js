import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from'query-string';
import Api from '../../utils/api';

class Table extends React.Component {
    
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const string = Api.constructUrl(this.props.location.pathname);
        Api.callApi(string)
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return(
            <div>
                <h1>This is where the table will go</h1>
            </div>
        )
    }
}

module.exports = Table;
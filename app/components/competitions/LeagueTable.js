import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class LeagueTable extends React.Component {

    constructor(props) {
        super(props)
    }
    
    
    render() {
        return(
            <div className="league-table">
                <h1>This is a league table</h1>
            </div>
        )
    }
}

LeagueTable.propTypes = {
    year: PropTypes.string.isRequired
}

module.exports = LeagueTable;
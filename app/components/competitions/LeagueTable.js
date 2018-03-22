import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class LeagueTable extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "props received!")
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
    table: PropTypes.array.isRequired
}

module.exports = LeagueTable;
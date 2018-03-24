import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LeagueTableGrid extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps,props) {
        console.log(prevProps, props)
    }

    render() {
        return (
            <div>
                <h1>Rendered</h1>
                {props.table.map(row => {
                    <li>{row.teamName}</li>
                })}
            </div>
        ) 
    }
}

LeagueTableGrid.propTypes = {
    table: PropTypes.array.isRequired
}

module.exports = LeagueTableGrid;
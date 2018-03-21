import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import LeagueTableLink from './LeagueTableLink';


const CompetitionsGrid = props => {
    return(
        <div className="competitions-grid">
            {props.competitions.map(competition => {
                return (
                    <div className="competition-square" key={competition.id}>
                        <LeagueTableLink competition={competition} />
                    </div>
                )
            })}
        </div>
    )
}

CompetitionsGrid.propTypes = {
    competitions: PropTypes.array.isRequired
}

module.exports = CompetitionsGrid;
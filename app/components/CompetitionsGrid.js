import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../utils/api';


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
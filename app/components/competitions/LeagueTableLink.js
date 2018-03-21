import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import LeagueTable from './LeagueTable';

const LeagueTableLink = props => {
    return (
        <ul>
            <li><span className="league-name">{props.competition.caption}</span></li>
            <li table={props.competition._links.self.href}>Table</li>
            <li teams={props.competition._links.teams.href}>Teams</li>
        </ul>
    )
}

LeagueTableLink.propTypes = {
    competition: PropTypes.object.isRequired
}

module.exports = LeagueTableLink;
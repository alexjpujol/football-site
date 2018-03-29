import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../common/Logo';

const TeamInfo = props => {

    return (
        <table className="team-info">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Nationality</th>
                    <th>Birthday</th>
                    <th>Kit Number</th>
                </tr>
            </thead>
            <tbody>
                {props.team.map(row => {
                    return(
                        <tr key={row.jerseyNumber}>
                            <td>{row.name}</td>
                            <td className="wins">{row.position}</td>
                            <td className="draws">{row.nationality}</td>
                            <td className="losses">{row.dateOfBirth}</td>
                            <td>{row.jerseyNumber}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TeamInfo.propTypes = {
    team: PropTypes.array.isRequired
}

module.exports = TeamInfo;
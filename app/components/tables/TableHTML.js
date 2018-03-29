import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../common/Logo';

const TableHTML = props => {

    return (
        <table className="league-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Team</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                    <th>+ / -</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {props.table.map(row => {

                    const link = row._links.team.href.split("/");

                    return(
                        <tr key={row.position}>
                            <td><Logo src={row.crestURI} alt={row.teamName} height="30px" /></td>
                            <td className="team-name">
                                <Link to={{
                                    pathname: `/teams/${link[link.length - 1]}`,
                                }}>
                                    {row.teamName}
                                </Link>
                            </td>
                            <td className="wins">{row.wins}</td>
                            <td className="draws">{row.draws}</td>
                            <td className="losses">{row.losses}</td>
                            {row.goalDifference > 0 ? <td className="positive">{row.goalDifference}</td> : <td className="negative">{row.goalDifference}</td>}
                            <td>{row.points}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TableHTML.propTypes = {
    table: PropTypes.array.isRequired
}

module.exports = TableHTML;
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../common/Logo';
import { POINT_CONVERSION_COMPRESSED } from 'constants';


const CupHTML = props => {

    let groups = []
    for (let group in props.cup) {
        groups.push(props.cup[group])
    }

    console.log(groups)


    return (
        <div>
            {groups.map(group => {
                console.log(group[0])
                return(
                    <div key={Math.round(Math.random() * 1000000)}>
                        <h2>Group {group[0]["group"]}</h2>
                        <table key={group[0]["teamId"]}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Team</th>
                                        <th>Goal Differential</th>
                                    </tr>
                                </thead>
                                {group.map(team => {
                                    return(
                                        <tbody key={team.teamId}>
                                            <tr>
                                                <td><Logo src={team.crestURI} alt={team.team} height="30px" /></td>
                                                <td>{team.team}</td>
                                                <td>{team.goalDifference}</td> 
                                            </tr>
                                        </tbody>
                                    )
                            })}
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

CupHTML.propTypes = {
    cup: PropTypes.object.isRequired
}

module.exports = CupHTML;
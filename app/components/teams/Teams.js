import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import teams from '../../../public/json/teams';
import Api from '../../utils/api';

const Teams = props => {
    console.log(props)

    const match = props.match;

    return(
        <div className="container">
            <ul className="teams">
                {teams.map(team => {
                    return(
                        <li className="team" key={team.id}>
                            <img src={team.logo} />
                            <Link to={{
                                pathname: `${match.url}/${team.id}`
                            }}>
                                <h3>{team.name}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

module.exports = Teams;
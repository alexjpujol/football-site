import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../common/Logo';
import teams from '../../../public/json/teams';
import Api from '../../utils/api';

const Teams = () => {
    console.log(teams)

    return(
        <div>
            <h1>Teams</h1>
                <ul>
                    {teams.map(team => {
                        return(
                            <li className="team">

                            </li>
                        )
                    })}
                </ul>
        </div>
    )

}

module.exports = Teams;
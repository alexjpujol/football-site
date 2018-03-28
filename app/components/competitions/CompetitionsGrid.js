import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';
import Logo from '../common/Logo';

import LeagueTable from './LeagueTable';

const leagueLogos = {
        "SA": "https://upload.wikimedia.org/wikipedia/en/f/f7/LegaSerieAlogoTIM.png",
        "BSA": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Primeira_Liga_%28Brazil%29.png/250px-Primeira_Liga_%28Brazil%29.png",
        "PL": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png",
        "ELC": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/EFL_Championship.svg/1200px-EFL_Championship.svg.png",
        "EL1": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/EFL_League_One.svg/1200px-EFL_League_One.svg.png",
        "EL2": "https://vignette.wikia.nocookie.net/the-football-database/images/c/cc/Football_League_Two_Logo.png/revision/latest?cb=20140811133847",
        "DED": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/1200px-Eredivisie_nieuw_logo_2017-.svg.png",
        "FL1": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ligue1.svg/2000px-Ligue1.svg.png",
        "FL2": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Ligue_2_logo.svg/1200px-Ligue_2_logo.svg.png",
        "BL1": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png",
        "BL2": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/2._Bundesliga_logo.svg/1200px-2._Bundesliga_logo.svg.png",
        "PD": "https://upload.wikimedia.org/wikipedia/commons/0/04/La_Liga_logotip.jpg",
        "PPL": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Liga_NOS_logo.png",
        "DFB": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/DFB-Pokal_logo_2016.svg/1200px-DFB-Pokal_logo_2016.svg.png",
        "SB": "https://upload.wikimedia.org/wikipedia/it/7/7e/Logo_Serie_B_2015.png",
        "CL": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png",
        "AAL": "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Hyundai_A-League_logo_%282017%E2%80%93%29.svg/1200px-Hyundai_A-League_logo_%282017%E2%80%93%29.svg.png"
}



const CompetitionsGrid = props => {

    const match = props.url;

    return(
        <div className="competitions-grid">
            {props.competitions.map(competition => {
                return (
                    <div className="competition-square" key={competition.id}>
                        <ul>
                            <li>
                                <Link to={{
                                    pathname: `${match.url}/${competition.id}/leagueTable`
                                }}><Logo src={leagueLogos[competition.league]} alt={competition.caption} height="100px"/></Link>
                            </li>
                            <li className="caption">{competition.caption}</li>
                        </ul>
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
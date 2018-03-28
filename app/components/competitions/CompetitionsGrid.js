import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';

import LeagueTableLink from './LeagueTableLink';
import LeagueTable from './LeagueTable';


class CompetitionsGrid extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            table: []
        }
        //this.clickLeagueTable = this.clickLeagueTable.bind(this);
    }

    // clickLeagueTable(e) {
    //     const competition = e.target.getAttribute("link");
    //     Api.callApi(competition).then(data => {
    //         this.setState(() => {
    //             return {
    //                 table: data.standing
    //             };
    //         })
    //     });
    // }

    render() {
        const match = this.props.url;

        return(
            <div className="competitions-grid">
                {this.props.competitions.map(competition => {
                    return (
                        <div className="competition-square" key={competition.id}>
                            <ul>
                                <li><span className="league-name">{competition.caption}</span></li>
                                <li onClick={this.clickLeagueTable}>
                                    <Link to={{
                                        pathname: `${match.url}/${competition.id}/leagueTable`
                                    }}>Table</Link>
                                </li>
                                <li teams={competition._links.teams.href}>Teams</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}

CompetitionsGrid.propTypes = {
    competitions: PropTypes.array.isRequired
}

module.exports = CompetitionsGrid;
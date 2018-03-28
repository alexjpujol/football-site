import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';

import Logo from './Logo';

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
                    return(
                        <tr key={row.position}>
                            <td><Logo src={row.crestURI} alt={row.teamName} /></td>
                            <td className="team-name">{row.teamName}</td>
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

class Table extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            table: null
        }

    }

    componentDidMount() {
        const string = Api.constructUrl(this.props.location.pathname);
        Api.callApi(string).then(data => {
                this.setState(() => {
                    return {
                        table: data
                    }
                })
            })
    }

    render() {
        return(
            <div>
                {!this.state.table ? <p className="loading">"Loading"</p> : 
                    <div>
                        <h1 className="league-name">{this.state.table.leagueCaption}</h1>
                        {this.state.table.standing.length === 0 ? <h1>No data...sorry!</h1> : <TableHTML table={this.state.table.standing} /> }
                    </div>
                }
            </div>
        )
    }
}

module.exports = Table;
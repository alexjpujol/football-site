import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';

const TableHTML = props => {
    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Team</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                    <th>Goal Differential</th>
                    <th>Points</th>
                </tr>
                {props.table.map(row => {
                    return(
                        <tr key={row.position}>
                            <td><img src={row.crestURI} width="30px" /></td>
                            <td>{row.teamName}</td>
                            <td>{row.wins}</td>
                            <td>{row.draws}</td>
                            <td>{row.losses}</td>
                            <td>{row.goalDifference}</td>
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
                {!this.state.table ? <p className="loading">"Loading"</p> : <TableHTML table={this.state.table.standing}/>}
            </div>
        )
    }
}

module.exports = Table;
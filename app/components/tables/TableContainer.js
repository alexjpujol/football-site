import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';

import TableHTML from './TableHTML';


class TableContainer extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            table: null
        }

        this.determineTableType = this.determineTableType.bind(this)

    }

    componentDidMount() {
        const string = Api.constructUrl(this.props.location.pathname);
        console.log(string)
        Api.callApi(string).then(data => {
            this.setState(() => {
                return {
                    table: data
                }
            })
        })
    }

    determineTableType(table) {
        if (table.standing) {
            return <TableHTML table={this.determineTableType(table.standing)} />
        } else if (table.standings) {
            return <TableHTML cup={this.determineTableType(table.standings)} />
        }
        return <p className="loading">The API doesn't have data on this...sorry!</p>
    }

    render() {
        return(
            <div>
                {!this.state.table ? <p className="loading">"Loading"</p> : 
                    <div>
                        <h1 className="league-name">{this.state.table.leagueCaption}</h1>
                        {this.state.table.standing || this.state.table.standings ? <TableHTML table={this.state.table.standing} /> : <p className="loading">The API doesn't have data on this...sorry!</p>}
                    </div>
                }
            </div>
        )
    }
}

module.exports = TableContainer;
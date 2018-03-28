import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';

import TableHTML from './TableHTML';


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
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const LeagueTableGrid = props => {

    return (
        <div>
            <h1>Rendered</h1>
            {props.table.map(row => {
                <li>{row.teamName}</li>
            })}
        </div>
    )
}

LeagueTableGrid.propTypes = {
    table: PropTypes.array.isRequired
}

class LeagueTable extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            table: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "props received!")

        this.setState(() => {
            return {
                table: nextProps.table
            }
        })
    }

    render() {
        return(
            <div className="league-table">
                {!this.state.table ? <p>Loading...</p> : <LeagueTableGrid table={this.state.table} /> }
            </div>
        )
    }
}

LeagueTable.propTypes = {
    table: PropTypes.array.isRequired
}

module.exports = LeagueTable;
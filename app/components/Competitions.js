import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../utils/api';

import LeagueTable from './LeagueTable';
import LeagueTableLink from './LeagueTableLink'

const SelectYear = props => {
    const years = ['2017', '2016', '2015','2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000']
    return (
        <div className="select-year">
            <ul>
                {years.map(year => {
                    return (
                        <li key={year} 
                            onClick={props.updateSeason.bind(null, year)} 
                            style={year === props.selectedSeason ? {color: '#d0021b'} : null}
                        >
                        {year}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

SelectYear.propTypes = {
    updateSeason: PropTypes.func.isRequired,
    selectedSeason: PropTypes.string.isRequired
}

const CompetitionsGrid = props => {
    return(
        <div className="competitions-grid">
            {props.competitions.map(competition => {
                return (
                    <div className="competition-square" key={competition.id}>
                        <LeagueTableLink competition={competition} />
                    </div>
                )
            })}
        </div>
    )
}

CompetitionsGrid.propTypes = {
    competitions: PropTypes.array.isRequired
}

class Competitions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSeason: "2017",
            competitions: null
        }

        this.getCompetitionData = this.getCompetitionData.bind(this);
        this.updateSeason = this.updateSeason.bind(this);
    }

    //calls API 
    getCompetitionData(season) {
        const location = this.props.location.pathname;
        const url = Api.constructUrl(location, "", season);
        Api.callApi(url).then(data => {
            this.setState(() => {
                return {
                    selectedSeason: season,
                    competitions: data
                }
            })
         });
    }

    //updates the state of component
    updateSeason(season) {
        this.setState(() => {
            return {
                selectedSeason: season,
                competitions: null
            }
        });
        this.getCompetitionData(season);
    }

    // load the intital set of leagues for current year
    componentDidMount() {
        this.getCompetitionData(this.state.selectedSeason);
    }

    render() {
        return(
            <div className="competitions-container">
                <SelectYear selectedSeason={this.state.selectedSeason} updateSeason={this.updateSeason} />
                {!this.state.competitions ? <p className="loading">Loading...</p> : <CompetitionsGrid competitions={this.state.competitions}/>}
            </div>
        )
    }
    
}

module.exports = Competitions; 
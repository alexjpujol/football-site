import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../utils/api';

import LeagueTable from './LeagueTable';
import LeagueTableLink from './LeagueTableLink';
import CompetitionsGrid from './CompetitionsGrid';
import SelectYear from './SelectYear';

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
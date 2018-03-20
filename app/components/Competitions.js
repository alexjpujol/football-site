import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Api from '../utils/api';

const SelectYear = props => {
    const years = ['2017', '2016', '2015','2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000']
    return (
        <div>
            <ul className="select-year">
                {years.map(year => {
                    return (
                        <li
                        key={year}
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

class Competitions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSeason: "2017"
        }

        this.getCompetitionData = this.getCompetitionData.bind(this);
        this.updateSeason = this.updateSeason.bind(this);
    }

    getCompetitionData() {
        const location = this.props.location.pathname;
        const season = this.state.selectedSeason;
        const url = Api.constructUrl(location, "", season);
        Api.callApi(url).then(data => {
            console.log(data)
            return data
         });
    }

    updateSeason(e) {
        this.setState({selectedSeason: e});
        this.getCompetitionData();
    }

    render() {
        return(
            <div>
                <SelectYear selectedSeason={this.state.selectedSeason} updateSeason={this.updateSeason} />
            </div>
        )
    }
    
}

module.exports = Competitions; 